import React from "react";
import classNames from "classnames";
import { Link } from "@inertiajs/react";

export default function Logo({ className }) {
    const classnames = classNames(
        "flex items-center text-4xl font-semibold m-0",
        className
    );

    return (
        <h1 className={classnames}>
            <Link href="/">Teemcorp</Link>
        </h1>
    );
}
