import { AddUserForm } from "@/components/dashboard/mng-users/AddUserForm";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const AddUserPage: NextPageWithLayout = () => {
    return (
        <div>
            <AddUserForm />
        </div>
    )
}

AddUserPage.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default AddUserPage