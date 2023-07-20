import { OrderListComponent } from "@/components/dashboard/mng-order/OrderListComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngOrder: NextPageWithLayout = () => {
    return (
        <div>
            <OrderListComponent />
        </div>
    )
}

MngOrder.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngOrder