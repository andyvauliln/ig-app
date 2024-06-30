import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

export function VolumeControl() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <VolumeIcon className="w-5 h-5 " />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-yellow-500">Sound Controls</DialogTitle>
          <DialogDescription>Adjust the volume and mute settings.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-6">
          <div className="grid items-center gap-2">
            <Label htmlFor="volume" className="text-sm font-medium text-yellow-500">
              Volume
            </Label>
            <Slider id="volume" defaultValue={[50]} max={100} step={1} aria-label="Volume" className="h-4" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="mute" className="text-sm font-medium text-yellow-500">
              Mute
            </Label>
            <Switch id="mute" aria-label="Mute" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
// function VolumeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
//     </svg>
//   )
// }

function VolumeIcon(props: any) {
  return (
    <svg {...props} className="w-6 h-6 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.5 8.43A4.985 4.985 0 0 1 17 12a4.984 4.984 0 0 1-1.43 3.5m2.794 2.864A8.972 8.972 0 0 0 21 12a8.972 8.972 0 0 0-2.636-6.364M12 6.135v11.73a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l4.36-3.633a1 1 0 0 1 1.64.768Z" />
    </svg>
  )
}