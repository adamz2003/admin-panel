import { AppLanguageSetComponent } from "@/components/dashboard/mng-setting/AppLanguageSetComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MobileLanguage: NextPageWithLayout = () => {
    return (
        <div>
            <AppLanguageSetComponent />
        </div>
    )
}

MobileLanguage.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MobileLanguage