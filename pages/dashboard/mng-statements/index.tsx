import { StatementListComponent } from "@/components/dashboard/mng-statement/StatementListComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngStatements: NextPageWithLayout = () => {
    return (
        <div>
            <StatementListComponent />
        </div>
    )
}

MngStatements.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngStatements