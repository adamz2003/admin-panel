import { PostGigForm } from "@/components/dashboard/mng-gigs/PostGigForm";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const PostGigs: NextPageWithLayout = () => {
    return (
        <div>
            <PostGigForm />
        </div>
    )
}

PostGigs.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default PostGigs