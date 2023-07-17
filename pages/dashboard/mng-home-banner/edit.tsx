import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const BannerEdit: NextPageWithLayout = () => {
    return (
        <div>
            BannerEdit
        </div>
    )
}

BannerEdit.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default BannerEdit