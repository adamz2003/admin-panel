import { BlogListComponent } from "@/components/dashboard/mng-blogs/BlogListComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const BlogsList: NextPageWithLayout = () => {
    return (
        <div>
            <BlogListComponent />
        </div>
    )
}

BlogsList.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default BlogsList