import { HomeBannerListComponent } from "@/components/dashboard/mng-home-banner/HomeBannerListComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngHomeBanner: NextPageWithLayout = () => {
    return (
        <div>
            <HomeBannerListComponent />
        </div>
    )
}

MngHomeBanner.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngHomeBanner