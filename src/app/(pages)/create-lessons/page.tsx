import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeftIcon } from "../../../components/pages/create-lessons-page/Icons";

import ProductDetailsCard from "../../../components/pages/create-lessons-page/ProductDetailsCard";
import ProductCategoryCard from "../../../components/pages/create-lessons-page/ProductCategoryCard";
import ProductPricingCard from "../../../components/pages/create-lessons-page/ProductPricingCard";
import ProductStockCard from "../../../components/pages/create-lessons-page/ProductStockCard";
import ArchiveProductCard from "../../../components/pages/create-lessons-page/ArchiveProductCard";
import ProductImagesCard from "../../../components/pages/create-lessons-page/ProductImagesCard";
import Header from "../../../components/pages/create-lessons-page/Header";
import Sidebar from "../../../components/pages/create-lessons-page/Sidebar";

export default function Dashboard() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <Sidebar />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <Header />
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
                        <SubHeader />
                        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                                <ProductDetailsCard />
                                <ProductCategoryCard />
                                <ProductPricingCard />
                                <ProductStockCard />
                                <ProductImagesCard />
                            </div>
                            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                                <ArchiveProductCard />
                            </div>
                        </div>
                        <SubHeaderRight />
                    </div>
                </main>
            </div>
        </div>
    );
}

function SubHeaderRight() {
    return (
        <div className="flex items-center gap-4">
            <Button size="sm" variant="outline">
                Discard
            </Button>
            <Button size="sm">Save Product</Button>
        </div>
    );
}

function SubHeader() {
    return (
        <div className="flex items-center gap-4">
            <Button className="h-7 w-7" size="icon" variant="outline">
                <ChevronLeftIcon className="h-4 w-4" />
                <span className="sr-only">Back</span>
            </Button>
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Pro Controller
            </h1>
            <Badge className="ml-auto sm:ml-0" variant="outline">
                In stock
            </Badge>
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button size="sm" variant="outline">
                    Discard
                </Button>
                <Button size="sm">Save Product</Button>
            </div>
        </div>
    );
}

