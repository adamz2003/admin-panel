import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngParcelType: NextPageWithLayout = () => {
    return (
        <div>
            MngParcelType
        </div>
    )
}

MngParcelType.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngParcelType