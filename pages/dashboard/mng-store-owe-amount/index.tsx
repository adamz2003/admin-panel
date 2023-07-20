import { StoreOweAmountListComponent } from "@/components/dashboard/mng-store-owe-amount/StoreOweAmountListComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngStoreOweAmount: NextPageWithLayout = () => {
    return (
        <div>
            <StoreOweAmountListComponent />
        </div>
    )
}

MngStoreOweAmount.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngStoreOweAmount