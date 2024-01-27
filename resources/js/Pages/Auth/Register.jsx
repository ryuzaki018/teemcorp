import { Head, Link, router, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const registerHandler = (e) => {
        e.preventDefault();
        post("/register");
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
                Sign up
            </h1>

            <form className="space-y-4 md:space-y-6" onSubmit={registerHandler}>
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your name
                    </label>
                    <input
                        value={data.name}
                        onChange={(e) => setInputValues(e.target.value, "name")}
                        type="text"
                        name="name"
                        id="name"
                        className="focus:ring-primary-600 focus:border-primary-600 block w-full
                                    rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900
                                    sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white
                                    dark:placeholder-gray-400 dark:focus:border-blue-500
                                    dark:focus:ring-blue-500"
                        placeholder="name"
                        required=""
                    />
                    {errors.name && <span className="pt-2">{errors.name}</span>}
                </div>
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
                    {errors.email && (
                        <span className="pt-2">{errors.email}</span>
                    )}
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your password
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
                    {errors.password && (
                        <span className="pt-2">{errors.password}</span>
                    )}
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Confirm password
                    </label>
                    <input
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setInputValues(
                                e.target.value,
                                "password_confirmation"
                            )
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
                    Sign up
                </button>
            </form>
        </div>
    );
}
