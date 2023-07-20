import { OweAmountListComponent } from "@/components/dashboard/mng-owe-amount/OweAmountListComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngOweAmount: NextPageWithLayout = () => {
    return (
        <div>
            <OweAmountListComponent />
        </div>
    )
}

MngOweAmount.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngOweAmount