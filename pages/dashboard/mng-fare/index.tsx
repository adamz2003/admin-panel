import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngFare: NextPageWithLayout = () => {
    return (
        <div>
            MngFare
        </div>
    )
}

MngFare.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngFare