import { WalletListComponent } from "@/components/dashboard/mng-wallet-promo/WalletListComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngWalletPromo: NextPageWithLayout = () => {
    return (
        <div>
            <WalletListComponent />
        </div>
    )
}

MngWalletPromo.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngWalletPromo