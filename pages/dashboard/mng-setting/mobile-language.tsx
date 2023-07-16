import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MobileLanguage: NextPageWithLayout = () => {
    return (
        <div>
            MobileLanguage
        </div>
    )
}

MobileLanguage.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MobileLanguage