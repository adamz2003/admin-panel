import { AddLocationForm } from "@/components/dashboard/mng-location/AddLocation";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const AddLocation: NextPageWithLayout = () => {
    return (
        <div>
            <AddLocationForm />
        </div>
    )
}

AddLocation.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default AddLocation