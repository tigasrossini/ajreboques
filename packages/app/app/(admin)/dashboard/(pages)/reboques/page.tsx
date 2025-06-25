import { ProductFilters } from "../../components/products/productFilters";
import { ProductPagination } from "../../components/products/productPagination";
import { ProductTable } from "../../components/products/productTable";

export default function ReboqueList() {
    return (
        <div className="flex w-full px-28 py-12 flex-col items-center gap-8 bg-background">
            <div className="flex h-[835px] flex-col items-start gap-8 self-stretch max-w-screen-xl">
                <ProductFilters />
                <ProductTable />
                <ProductPagination />
            </div>
        </div>
    )
}