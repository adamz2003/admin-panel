import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngHelp: NextPageWithLayout = () => {
    return (
        <div>
            MngHelp
        </div>
    )
}

MngHelp.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngHelp