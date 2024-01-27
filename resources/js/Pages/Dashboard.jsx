import { usePage } from "@inertiajs/react";

export default function Dashboard() {
    const { props } = usePage();

    return (
        <section className="px-3 pt-3">
            <h1>
                Welcome,
                <span className="dark:text-blue pl-1 font-bold">
                    {props.auth.user.email}
                </span>
                .
            </h1>
        </section>
    );
}
