import { StorePayoutListComponent } from "@/components/dashboard/mng-store-payout/StorePayoutListComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngStorePayout: NextPageWithLayout = () => {
    return (
        <div>
            <StorePayoutListComponent />
        </div>
    )
}

MngStorePayout.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngStorePayout