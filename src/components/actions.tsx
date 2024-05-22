import { setDoc, uploadFile } from '@junobuild/core-peer';
import { nanoid } from 'nanoid';
import { authSubscribe, type User, type ListParams } from '@junobuild/core-peer';
import { listDocs } from '@junobuild/core-peer';
import type { Note, NoteData } from '@/types/note';

const key = nanoid();

export const createNote = async (inputText: string, url?: string) => {
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
}
export const uploadImage = async (file: File | undefined, user: User) => {
    let url;
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
}

export const getNotes = async (filter: ListParams = {}) => {
    const { items } = await listDocs<NoteData>({
        collection: 'notes',
        filter: filter
    });
    return items;
}

