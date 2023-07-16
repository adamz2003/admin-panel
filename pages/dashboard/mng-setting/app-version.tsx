import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const AppVersion: NextPageWithLayout = () => {
    return (
        <div>
            AppVersion
        </div>
    )
}

AppVersion.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default AppVersion