import Link from "next/link";
import Logo from "../logo";
import styles from "./samplePageHeader.module.scss";
import SamplePageNavbar from "./samplePageNavbar";

function SamplePageHeader() {
    return (
        <>
            <div className={styles.topbar}>
                <Link href="/">
                    <Logo className={styles.logo} />
                </Link>

                <SamplePageNavbar />
            </div>
        </>
    );
}

export default SamplePageHeader;
