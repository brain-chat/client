import SamplePageHeader from "@/components/samplePageHeader/samplePageHeader";
import samplePageStyles from "@/components/samplePageHeader/samplePageHeader.module.scss";
import { Props } from "@/types/react";

export default function SamplePageLayout(props: Props) {
    return (
        <>
            <SamplePageHeader />

            <div className={samplePageStyles.content}>
                <main>{props.children}</main>
            </div>
        </>
    );
}
