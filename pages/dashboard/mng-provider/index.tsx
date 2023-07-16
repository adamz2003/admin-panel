import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngProvider: NextPageWithLayout = () => {
    return (
        <div>
            MngProvider
        </div>
    )
}

MngProvider.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngProvider