import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngGigsDispute: NextPageWithLayout = () => {
    return (
        <div>
            MngGigsDispute
        </div>
    )
}

MngGigsDispute.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngGigsDispute