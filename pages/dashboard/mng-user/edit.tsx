import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const EditUserPage: NextPageWithLayout = () => {
    return (
        <div>
            EditUserPage
        </div>
    )
}

EditUserPage.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default EditUserPage