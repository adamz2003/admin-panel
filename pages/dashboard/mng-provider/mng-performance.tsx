import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngPerformance: NextPageWithLayout = () => {
    return (
        <div>
            Performance management: You may need to track the performance of each service provider, including metrics such as service quality, response time, and customer satisfaction, and take appropriate actions to address any issues.
        </div>
    )
}

MngPerformance.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngPerformance