import Link from "next/link";
import styles from "./samplePageHeader.module.scss";

function SamplePageNavbar() {
    return (
        <div className={styles.navbar}>
            <Link href="/signin">Signin</Link>
        </div>
    );
}

export default SamplePageNavbar;
