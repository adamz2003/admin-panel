import PostBlogComponent from "@/components/dashboard/mng-blogs/PostBlogComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const PostBlogs: NextPageWithLayout = () => {
    return (
        <div>
            <PostBlogComponent />
        </div>
    )
}

PostBlogs.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default PostBlogs