import { PenaltyListComponent } from "@/components/dashboard/mng-penalty/PenaltyListComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngPenalty: NextPageWithLayout = () => {
    return (
        <div>
            <PenaltyListComponent />
        </div>
    )
}

MngPenalty.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngPenalty