import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngBusinessType: NextPageWithLayout = () => {
    return (
        <div>
            MngBusinessType
        </div>
    )
}

MngBusinessType.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngBusinessType