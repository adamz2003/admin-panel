import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngReferrals: NextPageWithLayout = () => {
    return (
        <div>
            MngReferrals
        </div>
    )
}

MngReferrals.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngReferrals