import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngCompany: NextPageWithLayout = () => {
    return (
        <div>
            MngCompany
        </div>
    )
}

MngCompany.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngCompany