
import { Button } from "@/components/ui/button"
import { GenerateContextWindow } from "@/components/pages/common/generate-context-window"
import { GradientInput } from "@/components/ui/input"
import { VolumeControl } from "./volume-control"

export default function SoundControl() {
    return (
        <div className="rounded-lg shadow-sm py-2 w-full border border-yellow-500">
            <div className="space-y-2">
                <div className="flex items-center justify-between  rounded-md p-4">
                    <div className="flex items-center space-x-4">
                        <MusicIcon className="w-6 h-6 text-yellow-500" />
                        <div>
                            <h3 className="font-medium">Download or Generate Background Sound</h3>
                            <p className="text-gray-500 dark:text-gray-4000 text-sm">0 seconds</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <GradientInput placeholder="starts from 0s" />
                        <button >
                            <PlusIcon className="w-6 h-6 hover:text-yellow-500" />
                        </button>
                        <VolumeControl />
                        <button >
                            <PlayIcon className="w-5 h-5 hover:text-yellow-500" />
                        </button>
                        <button >
                            <DownloadIcon className="w-5 h-5 hover:text-yellow-500" />
                        </button>
                        <button >
                            <FaceUploadIcon className="w-6 h-6 hover:text-yellow-500" />
                        </button>
                        <button >
                            <DeleteIcon className="w-6 h-6 hover:text-yellow-500" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function DownloadIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    )
}

function FaceUploadIcon(props: any) {
    return (
        <GenerateContextWindow type="audio" callBack={() => { }} className="">
            <svg  {...props} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 17a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2Z" />
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.815 9H16.5a2 2 0 1 0-1.03-3.707A1.87 1.87 0 0 0 15.5 5 1.992 1.992 0 0 0 12 3.69 1.992 1.992 0 0 0 8.5 5c.002.098.012.196.03.293A2 2 0 1 0 7.5 9h3.388m2.927-.985v3.604M10.228 9v2.574M15 16h.01M9 16h.01m11.962-4.426a1.805 1.805 0 0 1-1.74 1.326 1.893 1.893 0 0 1-1.811-1.326 1.9 1.9 0 0 1-3.621 0 1.8 1.8 0 0 1-1.749 1.326 1.98 1.98 0 0 1-1.87-1.326A1.763 1.763 0 0 1 8.46 12.9a2.035 2.035 0 0 1-1.905-1.326A1.9 1.9 0 0 1 4.74 12.9 1.805 1.805 0 0 1 3 11.574V12a9 9 0 0 0 18 0l-.028-.426Z" />
            </svg>
        </GenerateContextWindow>

    )
}


function MusicIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
        </svg>
    )
}
function DeleteIcon(props: any) {
    return (
        <svg {...props} className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
        </svg>

    )
}


function PlayIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="6 3 20 12 6 21 6 3" />
        </svg>
    )
}




function PlusIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}