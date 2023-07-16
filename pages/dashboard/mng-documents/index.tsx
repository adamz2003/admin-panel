import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngDocuments: NextPageWithLayout = () => {
    return (
        <div>
            MngDocuments
        </div>
    )
}

MngDocuments.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngDocuments