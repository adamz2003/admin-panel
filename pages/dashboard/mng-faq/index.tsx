import { FaqListComponent } from "@/components/dashboard/mng-faqs/FaqListComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const FaqList: NextPageWithLayout = () => {
    return (
        <div>
            <FaqListComponent />
        </div>
    )
}

FaqList.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default FaqList