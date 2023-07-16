import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngRecipient: NextPageWithLayout = () => {
    return (
        <div>
            MngRecipient
        </div>
    )
}

MngRecipient.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngRecipient