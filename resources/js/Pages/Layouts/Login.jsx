import Logo from "../components/Logo";

export default function Login({ children }) {
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div
                className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen 
            lg:py-0"
            >
                <Logo className="mb-6 text-gray-900 dark:text-white" />
                <div
                    className="w-full rounded-lg bg-gray-500 shadow sm:max-w-md md:mt-0
                 xl:p-0 dark:border"
                >
                    {children}
                </div>
            </div>
        </section>
    );
}
