import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngStatementCreate: NextPageWithLayout = () => {
    return (
        <div>
            MngStatementCreate
        </div>
    )
}

MngStatementCreate.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngStatementCreate