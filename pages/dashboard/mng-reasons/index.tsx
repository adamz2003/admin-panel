import { ReasonListComponent } from "@/components/dashboard/mng-reason/ReasonListComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngReasons: NextPageWithLayout = () => {
    return (
        <div>
            <ReasonListComponent />
        </div>
    )
}

MngReasons.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngReasons