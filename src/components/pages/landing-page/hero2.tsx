import { useEffect } from 'react';
import gsap from 'gsap';

export default function Hero2() {
    useEffect(() => {
        const additionalY = { val: 0 };
        let offset = 0;
        const cols: HTMLElement[] = gsap.utils.toArray(".col") as HTMLElement[];

        cols.forEach((col, i) => {
            const images: HTMLElement[] = Array.from(col.childNodes) as HTMLElement[];

            // DUPLICATE IMAGES FOR LOOP
            images.forEach((image) => {
                const clone = image.cloneNode(true) as HTMLElement;
                col.appendChild(clone);
            });

            // SET ANIMATION
            images.forEach((item) => {
                const columnHeight = item.parentElement?.clientHeight ?? 0;
                const direction = i % 2 !== 0 ? "+=" : "-="; // Change direction for odd columns

                gsap.to(item, {
                    y: direction + Number(columnHeight / 2),
                    duration: 20,
                    repeat: -1,
                    ease: "none",
                    modifiers: {
                        y: gsap.utils.unitize((y: string) => {
                            if (direction === "+=") {
                                offset += additionalY.val;
                                y = ((parseFloat(y) - offset) % (columnHeight * 0.5)).toString();
                            } else {
                                offset += additionalY.val;
                                y = ((parseFloat(y) + offset) % -Number(columnHeight * 0.5)).toString();
                            }

                            return y;
                        })
                    }
                });
            });
        });
    }, []);


    return (
        <div className="max-h-[100vh] w-full overflow-hidden">
            <section className="py-[10vw] h-full min-h-[100vh] flex flex-col justify-center overflow-hidden">

                <div className="flex flex-row w-full h-full">
                    <div className="col flex-1 flex flex-col">
                        <div className="image w-full filter-saturate-0 p-4">
                            <img src="https://images.pexels.com/photos/10324713/pexels-photo-10324713.jpeg?cs=srgb&dl=pexels-taha-samet-arslan-10324713.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt="" className="transition ease-out duration-300 overflow-hidden shadow-lg w-full" />
                        </div>
                        <div className="image w-full filter-saturate-0 p-4">
                            <img src="https://images.pexels.com/photos/10533885/pexels-photo-10533885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt="" className="transition ease-out duration-300 overflow-hidden shadow-lg w-full" />
                        </div>
                        <div className="image w-full filter-saturate-0 p-4">
                            <img src="https://images.pexels.com/photos/10253213/pexels-photo-10253213.jpeg?cs=srgb&dl=pexels-beepin-10253213.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt="" className="transition ease-out duration-300 overflow-hidden shadow-lg w-full" />
                        </div>
                    </div>
                    <div className="col flex-1 flex flex-col">
                        <div className="image w-full filter-saturate-0 p-4">
                            <img src="https://images.pexels.com/photos/10050979/pexels-photo-10050979.jpeg?cs=srgb&dl=pexels-%D0%B8%D0%BB%D1%8C%D1%8F-%D0%BF%D0%B0%D1%85%D0%BE%D0%BC%D0%BE%D0%B2-10050979.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt="" className="transition ease-out duration-300 overflow-hidden shadow-lg w-full" />
                        </div>
                        <div className="image w-full filter-saturate-0 p-4">
                            <img src="https://images.pexels.com/photos/1128660/pexels-photo-1128660.jpeg?cs=srgb&dl=pexels-nur-andi-ravsanjani-gusma-1128660.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt="" className="transition ease-out duration-300 overflow-hidden shadow-lg w-full" />
                        </div>
                        <div className="image w-full filter-saturate-0 p-4">
                            <img src="https://images.pexels.com/photos/9699293/pexels-photo-9699293.jpeg?cs=srgb&dl=pexels-lada-rezantseva-9699293.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt="" className="transition ease-out duration-300 overflow-hidden shadow-lg w-full" />
                        </div>
                    </div>
                    <div className="col flex-1 flex flex-col">
                        <div className="image w-full filter-saturate-0 p-4">
                            <img src="https://images.pexels.com/photos/6405575/pexels-photo-6405575.jpeg?cs=srgb&dl=pexels-daria-sannikova-6405575.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt="" className="transition ease-out duration-300 overflow-hidden shadow-lg w-full" />
                        </div>
                        <div className="image w-full filter-saturate-0 p-4">
                            <img src="https://images.pexels.com/photos/10162526/pexels-photo-10162526.jpeg?cs=srgb&dl=pexels-svetlana%F0%9F%8E%9E-10162526.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt="" className="transition ease-out duration-300 overflow-hidden shadow-lg w-full" />
                        </div>
                        <div className="image w-full filter-saturate-0 p-4">
                            <img src="https://images.pexels.com/photos/4394807/pexels-photo-4394807.jpeg?cs=srgb&dl=pexels-woodysmedia-4394807.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt="" className="transition ease-out duration-300 overflow-hidden shadow-lg w-full" />
                        </div>
                    </div>
                    {/* Add more columns as needed */}
                </div>
            </section>
        </div>
    );
}


// <h1 className="font-extrabold my-8 text-center z-[999] max-w-[800px] mix-blend-difference pointer-events-none text-white fixed inset-0 grid place-items-center text-[clamp(3vw,2rem,4rem)]">
//                     Vertical image loop with scroll acceleration with gsap
//                 </h1>
//                 <h2 className="credit text-center z-[999] text-[0.8rem] fixed bottom-4 right-4 writing-mode-vertical-rl text-orientation-mixed text-white">
//                     Your Credit Text Here
//                 </h2>
