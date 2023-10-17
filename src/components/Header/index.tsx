import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 p-10 z-50">
        <Link href={'https://avicii.com/'} target="_blank" className="flex justify-center group">
            <Image src={"/logo.svg"} width={50} height={23} alt="Avicii logo" />
            <div className="">
                <Image src={"/avicii.svg"} width={100} height={23} alt="Avicii logo" />
            </div>
        </Link>
    </div>
  )
}

export default Header