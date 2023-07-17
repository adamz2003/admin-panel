import { AppVersionComponent } from "@/components/dashboard/mng-setting/AppVersionComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const AppVersion: NextPageWithLayout = () => {
    return (
        <div>
            <AppVersionComponent />
        </div>
    )
}

AppVersion.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default AppVersion