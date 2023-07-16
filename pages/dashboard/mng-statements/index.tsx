import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngStatements: NextPageWithLayout = () => {
    return (
        <div>
            MngStatements
        </div>
    )
}

MngStatements.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngStatements