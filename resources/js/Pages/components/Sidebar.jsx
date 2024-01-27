import { Link, usePage } from "@inertiajs/react";
import classNames from "classnames";

export default function Sidebar() {
    const { url } = usePage();

    const isActive = (route) => {
        return url === route;
    };

    const linkClasses = classNames("block", "py-3");

    const links = [
        { route: "/", label: "Dashboard" },
        { route: "/company-profile", label: "Company Profile" },
        { route: "/company-quote", label: "Company Quote" },
    ];

    return (
        <aside className="h-full w-full max-w-52 border-r-4 border-gray-500 px-3 pt-3">
            <nav>
                <ul className="flex w-full flex-col">
                    {links.map(({ route, label }) => (
                        <li
                            key={route}
                            className={classNames(
                                "mb-3 border-b-2 border-gray-700",
                                "hover:rounded hover:border-b-0 hover:bg-blue-500 hover:pl-3 hover:font-bold hover:text-white",
                                {
                                    "rounded border-b-0 bg-blue-500 pl-3 font-bold text-white":
                                        isActive(route),
                                }
                            )}
                        >
                            <Link href={route} className={linkClasses}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
