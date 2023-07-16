import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngOrder: NextPageWithLayout = () => {
    return (
        <div>
            MngOrder
        </div>
    )
}

MngOrder.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngOrder