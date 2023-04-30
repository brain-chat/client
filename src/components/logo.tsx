import Image from "next/image";
import LogoImage from "../assets/logo-transparent.png";

function Logo(props: { className: string; }) {
    return (
        <>
            <Image src={LogoImage} alt="Logo" className={props.className} />
        </>
    );
}

export default Logo;
