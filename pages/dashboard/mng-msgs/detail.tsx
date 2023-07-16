import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const DetailMsgs: NextPageWithLayout = () => {
    return (
        <div>
            DetailMsgs
        </div>
    )
}

DetailMsgs.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default DetailMsgs