import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngOweAmount: NextPageWithLayout = () => {
    return (
        <div>
            MngOweAmount
        </div>
    )
}

MngOweAmount.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngOweAmount