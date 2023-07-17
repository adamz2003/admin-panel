import UserTable from "@/components/dashboard/mng-users/UserTable";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngAdmin: NextPageWithLayout = () => {
    return (
        <div>
            <UserTable />
        </div>
    )
}

MngAdmin.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngAdmin