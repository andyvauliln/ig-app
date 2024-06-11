import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function ProductDetailsCard() {
    return (
        <Card x-chunk="dashboard-07-chunk-0">
            <CardHeader>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>Lipsum dolor sit amet, consectetur adipiscing elit</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input className="w-full" defaultValue="Gamer Gear Pro Controller" id="name" type="text" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            className="min-h-32"
                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                            id="description"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default ProductDetailsCard;