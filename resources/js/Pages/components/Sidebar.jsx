import { Link } from "@inertiajs/react";

export default function Sidebar() {
    return (
        <aside className="h-full w-full max-w-52 border-r-4 border-gray-500 px-3 pt-3">
            <nav>
                <ul className="flex w-full flex-col">
                    <li className="mb-3 w-full border-b-2 border-gray-700">
                        <Link href="/" className="block pb-3">
                            Dashboard
                        </Link>
                    </li>
                    <li className="mb-3 border-b-2 border-gray-700">
                        <Link href="/company-profile" className="block pb-3">
                            Company Profile
                        </Link>
                    </li>
                    <li className="mb-3 border-b-2 border-gray-700">
                        <Link href="/company-quote" className="block pb-3">
                            Company Quote
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
