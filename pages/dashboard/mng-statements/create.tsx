import { CreateStateComponent } from "@/components/dashboard/mng-statement/CreateStatementComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngStatementCreate: NextPageWithLayout = () => {
    return (
        <div>
            <CreateStateComponent />
        </div>
    )
}

MngStatementCreate.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngStatementCreate