import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const EditJobs: NextPageWithLayout = () => {
    return (
        <div>
            EditJobs
        </div>
    )
}

EditJobs.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default EditJobs