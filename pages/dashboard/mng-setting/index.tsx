import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngSetting: NextPageWithLayout = () => {
    return (
        <div>
            MngSetting
        </div>
    )
}

MngSetting.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngSetting