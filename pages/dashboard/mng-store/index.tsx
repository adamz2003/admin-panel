import { StoreListComponent } from "@/components/dashboard/mng-store/StoreListComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngStore: NextPageWithLayout = () => {
    return (
        <div>
            <StoreListComponent />
        </div>
    )
}

MngStore.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngStore