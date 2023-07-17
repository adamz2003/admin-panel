import { PromoListComponent } from "@/components/dashboard/mng-wallet-promo/PromoListComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const PromoInfo: NextPageWithLayout = () => {
    return (
        <div>
            <PromoListComponent />
        </div>
    )
}

PromoInfo.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default PromoInfo