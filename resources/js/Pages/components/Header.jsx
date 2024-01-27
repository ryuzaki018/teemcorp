import { usePage, Link } from "@inertiajs/react";
import Logo from "./Logo";

export default function Header() {
    return (
        <header className="align-center flex justify-between bg-gray-500 px-3 py-10">
            <Logo className="font-bold text-white" />
            <div>
                <Link href="/logout" className="pl-1 font-bold text-white">
                    Log-out
                </Link>
            </div>
        </header>
    );
}
