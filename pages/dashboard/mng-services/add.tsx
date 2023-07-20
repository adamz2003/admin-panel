import { CreateServiceComponent } from "@/components/dashboard/mng-service/CreateServiceComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngServices: NextPageWithLayout = () => {
    return (
        <div>
            <CreateServiceComponent />
        </div>
    )
}

MngServices.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngServices