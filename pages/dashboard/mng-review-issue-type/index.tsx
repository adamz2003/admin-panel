import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngReviewIssueType: NextPageWithLayout = () => {
    return (
        <div>
            MngReviewIssueType
        </div>
    )
}

MngReviewIssueType.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngReviewIssueType