import { CatBlogCategoryComponent } from "@/components/dashboard/mng-category/catBlogCategoryComponent";
import { CatJobsCategoryComponent } from "@/components/dashboard/mng-category/catJobsCategoryComponent";
import { CatSkillsCategoryComponent } from "@/components/dashboard/mng-category/catSkillsCategoryComponent";
import { CatSubJobsCategoryComponent } from "@/components/dashboard/mng-category/catSubJobsCategoryComponent";
import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const CategoryList: NextPageWithLayout = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <CatSkillsCategoryComponent />
            <CatBlogCategoryComponent />
            <CatJobsCategoryComponent />
            <CatSubJobsCategoryComponent />
        </div>
    )
}

CategoryList.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default CategoryList