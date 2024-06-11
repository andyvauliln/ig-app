import { CardTitle, CardDescription, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ArchiveProductCard() {
    return (
        <Card x-chunk="dashboard-07-chunk-4">
            <CardHeader>
                <CardTitle>Archive Product</CardTitle>
                <CardDescription>Lipsum dolor sit amet, consectetur adipiscing elit</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Are you sure you want to archive this product? This action cannot be undone.</p>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button variant="outline">Cancel</Button>
                <Button className="ml-2" variant="destructive">
                    Archive
                </Button>
            </CardFooter>
        </Card>
    );
}

export default ArchiveProductCard;