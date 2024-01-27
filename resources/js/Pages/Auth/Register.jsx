import { Head, Link, router, useForm } from "@inertiajs/react";
import classNames from "classnames";
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

    const inputClass =
        "appearance-none outline-none focus:outline-white block w-full rounded-lg bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 ";

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
                        className={classNames(inputClass, {
                            "border-2 border-red-500": errors.name,
                        })}
                        placeholder="name"
                        required=""
                    />
                    {errors.name && (
                        <span className="block rounded p-1 text-sm text-red-200">
                            {errors.name}
                        </span>
                    )}
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
                        className={classNames(inputClass, {
                            "border-2 border-red-500": errors.email,
                        })}
                        placeholder="name@company.com"
                        required=""
                    />
                    {errors.email && (
                        <span className="block rounded p-1 text-sm text-red-200">
                            {errors.email}
                        </span>
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
                        className={classNames(inputClass, {
                            "border-2 border-red-500": errors.password,
                        })}
                        required=""
                    />
                    {errors.password && (
                        <span className="block rounded p-1 text-sm text-red-200">
                            {errors.password}
                        </span>
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
                        className={classNames(inputClass, {
                            "border-2 border-red-500":
                                errors.password_confirmation,
                        })}
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
