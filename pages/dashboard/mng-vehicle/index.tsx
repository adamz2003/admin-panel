import { AddVehicleComponent } from "@/components/dashboard/mng-vehicle/AddVehicleComponents";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngVehicles: NextPageWithLayout = () => {
    return (
        <div>
            <AddVehicleComponent />
        </div>
    )
}

MngVehicles.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngVehicles