import { setDoc, uploadFile } from '@junobuild/core-peer';
import { nanoid } from 'nanoid';
import { authSubscribe, type User, type ListParams } from '@junobuild/core-peer';
import { listDocs } from '@junobuild/core-peer';
import type { Note, NoteData } from '@/types/app';

const key = nanoid();

export const createNote = async (inputText: string, url?: string) => {
    console.log('createNote', inputText, url, process.env.NEXT_PUBLIC_IS_ONCHAIN);
    if (process.env.NEXT_PUBLIC_IS_ONCHAIN === 'true') {
        await setDoc({
            collection: 'notes',
            doc: {
                key,
                data: {
                    text: inputText,
                    ...(url !== undefined && { url })
                }
            }
        });
    } else {
        // Implement local storage logic for creating a note
        const notes = JSON.parse(localStorage.getItem('notes') || '[]');
        const newNote = {
            key,
            data: {
                text: inputText,
                ...(url !== undefined && { url })
            }
        };
        notes.push(newNote);
        localStorage.setItem('notes', JSON.stringify(notes));
    }
}

export const uploadImage = async (file: File | undefined, user: User) => {
    let url;
    if (process.env.NEXT_PUBLIC_IS_ONCHAIN === 'true') {
        try {
            if (file !== undefined) {
                const filename = `${user.key}-${file.name}`;

                const { downloadUrl } = await uploadFile({
                    collection: 'images',
                    data: file,
                    filename
                });

                url = downloadUrl;
            }
            return url;
        } catch (error) {
            console.error(error);
        }
    } else {
        if (file !== undefined) {
            const filename = `${user.key}-${file.name}`;
            const reader = new FileReader();
            reader.onload = () => {
                const imageData = reader.result as string;
                const request = indexedDB.open('imageStore', 1);

                request.onupgradeneeded = (event) => {
                    const db = (event.target as IDBOpenDBRequest).result;
                    db.createObjectStore('images', { keyPath: 'filename' });
                };

                request.onsuccess = (event) => {
                    const db = (event.target as IDBOpenDBRequest).result;
                    const transaction = db.transaction('images', 'readwrite');
                    const store = transaction.objectStore('images');
                    store.put({ filename, imageData });

                    transaction.oncomplete = () => {
                        url = `data:image/jpeg;base64,${imageData}`;
                    };

                    transaction.onerror = (error) => {
                        console.error('Transaction error:', error);
                    };
                };

                request.onerror = (error) => {
                    console.error('IndexedDB error:', error);
                };
            };
            reader.readAsDataURL(file);
        }
        return url;
    }
}

export const getNotes = async (filter: ListParams = {}) => {
    if (process.env.NEXT_PUBLIC_IS_ONCHAIN === 'true') {
        const { items } = await listDocs<NoteData>({
            collection: 'notes',
            filter: filter
        });
        return items;
    } else {
        // Implement local storage logic for getting notes
        const notes = JSON.parse(localStorage.getItem('notes') || '[]');
        return notes;
    }
}
