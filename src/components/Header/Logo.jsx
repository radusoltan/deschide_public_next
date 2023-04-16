import logo from './../../../public/logo.png'
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {

  return <Link href="/">
    <Image src={logo} alt={'Deschide.MD'} width={150} />
  </Link>
}