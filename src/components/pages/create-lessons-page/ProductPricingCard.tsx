import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
import { ToggleGroupItem, ToggleGroup } from "@/components/ui/toggle-group";

function ProductPricingCard() {
    return (
        <Card x-chunk="dashboard-07-chunk-1">
            <CardHeader>
                <CardTitle>Stock</CardTitle>
                <CardDescription>Lipsum dolor sit amet, consectetur adipiscing elit</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">SKU</TableHead>
                            <TableHead>Stock</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className="w-[100px]">Size</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-semibold">GGPC-001</TableCell>
                            <TableCell>
                                <Label className="sr-only" htmlFor="stock-1">
                                    Stock
                                </Label>
                                <Input defaultValue="100" id="stock-1" type="number" />
                            </TableCell>
                            <TableCell>
                                <Label className="sr-only" htmlFor="price-1">
                                    Price
                                </Label>
                                <Input defaultValue="99.99" id="price-1" type="number" />
                            </TableCell>
                            <TableCell>
                                <ToggleGroup defaultValue="s" type="single" variant="outline">
                                    <ToggleGroupItem value="s">S</ToggleGroupItem>
                                    <ToggleGroupItem value="m">M</ToggleGroupItem>
                                    <ToggleGroupItem value="l">L</ToggleGroupItem>
                                </ToggleGroup>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

export default ProductPricingCard;