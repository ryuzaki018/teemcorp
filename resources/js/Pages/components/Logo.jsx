import React from "react";
import classNames from "classnames";

export default function Logo({ className }) {
    const classnames = classNames(
        "flex items-center text-4xl font-semibold m-0",
        className
    );

    return <h1 className={classnames}>Teemcorp</h1>;
}
