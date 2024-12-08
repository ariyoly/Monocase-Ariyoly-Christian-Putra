// import link from 'next/link'
import { Link } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
    return (
    <nav className="sticky z-[100] h-14 inset-0 top-0 w-full border-b
    border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <MaxWidthWrapper>
            <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                <Link href='/' className="flex z-40 font-semibold">
                    Mono<span className="text-gray-900">case</span>
                </Link>
            </div>
        </MaxWidthWrapper>
    </nav>
    )
}

export default Navbar;