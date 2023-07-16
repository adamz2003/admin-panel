import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngManualBooking: NextPageWithLayout = () => {
    return (
        <div>
            MngManualBooking
        </div>
    )
}

MngManualBooking.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngManualBooking