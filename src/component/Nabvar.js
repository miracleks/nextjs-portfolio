import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Image src="/images/logo.png" width={86} height={70} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/listing"><a>Listing</a></Link>
        </nav>
    )
}
