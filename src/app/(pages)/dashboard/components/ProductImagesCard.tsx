import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { UploadIcon } from "./Icons";

function ProductImagesCard() {
    return (
        <Card x-chunk="dashboard-07-chunk-4">
            <CardHeader>
                <CardTitle>Product Images</CardTitle>
                <CardDescription>Lipsum dolor sit amet, consectetur adipiscing elit</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-2">
                    <img
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="300"
                        src="/placeholder.svg"
                        width="300"
                    />
                    <div className="grid grid-cols-3 gap-2">
                        <button>
                            <img
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-cover"
                                height="84"
                                src="/placeholder.svg"
                                width="84"
                            />
                        </button>
                        <button>
                            <img
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-cover"
                                height="84"
                                src="/placeholder.svg"
                                width="84"
                            />
                        </button>
                        <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                            <UploadIcon className="h-4 w-4 text-muted-foreground" />
                            <span className="sr-only">Upload</span>
                        </button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default ProductImagesCard;