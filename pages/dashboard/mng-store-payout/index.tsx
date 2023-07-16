import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngStorePayout: NextPageWithLayout = () => {
    return (
        <div>
            MngStorePayout
        </div>
    )
}

MngStorePayout.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngStorePayout