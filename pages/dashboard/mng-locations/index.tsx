import { LocationListComponent } from "@/components/dashboard/mng-location/LocationListComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngLocation: NextPageWithLayout = () => {
    return (
        <div>
            <LocationListComponent />
        </div>
    )
}

MngLocation.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngLocation