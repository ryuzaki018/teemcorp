import { Head, Link, router, useForm, usePage } from "@inertiajs/react";

export default function Login() {
    const {
        props: {
            flash: { success },
        },
    } = usePage();

    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const loginHandler = (e) => {
        e.preventDefault();
        post("/login");
    };

    const setInputValues = (fieldValue, fieldName) => {
        setData(fieldName, fieldValue);
    };

    return (
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1
                className="text-xl font-bold leading-tight tracking-tight text-gray-900 
                        md:text-2xl dark:text-white"
            >
                Sign in to your account
            </h1>
            {errors.email && (
                <div className="rounded border-2 border-red-500 bg-pink-100 p-3 font-medium text-black">
                    {errors.email}
                </div>
            )}

            {success && (
                <div className="border-white-500 rounded border-2 bg-green-500 p-3 font-medium text-white">
                    {success}
                </div>
            )}

            <form className="space-y-4 md:space-y-6" onSubmit={loginHandler}>
                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your email
                    </label>
                    <input
                        value={data.email}
                        onChange={(e) =>
                            setInputValues(e.target.value, "email")
                        }
                        type="email"
                        name="email"
                        id="email"
                        className="focus:ring-primary-600 focus:border-primary-600 block w-full
                                    rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900
                                    sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white
                                    dark:placeholder-gray-400 dark:focus:border-blue-500
                                    dark:focus:ring-blue-500"
                        placeholder="name@company.com"
                        required=""
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Password
                    </label>
                    <input
                        value={data.password}
                        onChange={(e) =>
                            setInputValues(e.target.value, "password")
                        }
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="focus:ring-primary-600 focus:border-primary-600 block w-full 
                                    rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 
                                    sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white 
                                    dark:placeholder-gray-400 dark:focus:border-blue-500 
                                    dark:focus:ring-blue-500"
                        required=""
                    />
                </div>
                <button
                    type="submit"
                    className="focus:ring-primary-300 dark:bg-primary-600
                                dark:hover:bg-primary-700 dark:focus:ring-primary-800 
                                w-full rounded-lg bg-blue-500 px-5 py-2.5 text-center 
                                text-sm font-medium text-white hover:bg-blue-700 
                                focus:outline-none focus:ring-4"
                >
                    Sign in
                </button>
                <p className="text-gray text-sm">
                    Don’t have an account yet?{" "}
                    <Link
                        href="/register"
                        className="text-primary-600 dark:text-primary-500 
                                    font-medium hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </form>
        </div>
    );
}
