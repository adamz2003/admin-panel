import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngReasons: NextPageWithLayout = () => {
    return (
        <div>
            MngReasons
        </div>
    )
}

MngReasons.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngReasons