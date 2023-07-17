import { MainSettingWebsite } from "@/components/dashboard/mng-setting/MainSettingWebsite";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngSetting: NextPageWithLayout = () => {
    return (
        <div>
            <MainSettingWebsite />
        </div>
    )
}

MngSetting.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngSetting