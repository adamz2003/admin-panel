import { ServiceListComponent } from "@/components/dashboard/mng-service/ServiceListComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngServices: NextPageWithLayout = () => {
    return (
        <div>
            <ServiceListComponent />
        </div>
    )
}

MngServices.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngServices