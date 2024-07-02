import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { YellowButton } from "@/components/ui/button"
import { Bebas_Neue } from "next/font/google"
import { GradientInput } from "@/components/ui/input";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400", style: "normal" });

export function Settings({ children }: { children: React.ReactNode }) {
    return (
        <Sheet>
            <SheetTrigger className="flex hover:text-yellow-500 items-center rounded-sm px-2 py-1.5 text-sm">
                {children}
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle><h3 className={`${bebasNeue.className} text-yellow-500 mt-8 text-xl lg:text-3xl`}> Account</h3 ></SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-4 flex-grow">
                    <div className="flex w-full min-h-[250px] rounded-sm bg-background text-yellow-500 border border-yellow-500  justify-center items-center cursor-pointer">

                        Upload Your Image

                    </div>
                    <div className="flex  flex-col gap-2">
                        <h3 className={`${bebasNeue.className} text-yellow-500 text-xl lg:text-4xl`}> User</h3>
                        <GradientInput placeholder="Your User Name" />
                    </div>
                    <div className="flex  flex-col">
                        <div className="flex justify-between">
                            <h3 className={`${bebasNeue.className} text-yellow-500 text-xl lg:text-4xl`}> Balance</h3>
                            <h3 className={`${bebasNeue.className} text-white text-xl lg:text-4xl`}> 0 ICP</h3>
                        </div>
                        <div className="flex justify-end mt-4">
                            <YellowButton className="w-1/3" onClick={() => { }}>Top Up</YellowButton>
                        </div>
                    </div>

                </div>

                <SheetFooter>
                    <SheetClose asChild>
                        <YellowButton onClick={() => {

                        }}>Save changes</YellowButton>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
