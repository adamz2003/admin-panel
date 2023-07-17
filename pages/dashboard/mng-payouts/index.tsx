import { PayoutsListComponent } from "@/components/dashboard/mng-payouts/PayoutHistoryComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngPayouts: NextPageWithLayout = () => {
    return (
        <div>
            <PayoutsListComponent />
        </div>
    )
}

MngPayouts.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngPayouts