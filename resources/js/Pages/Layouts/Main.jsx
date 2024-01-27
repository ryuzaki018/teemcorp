import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Main({ children }) {
    return (
        <main className="bg-white-900 flex h-screen flex-col items-stretch overflow-hidden">
            <Header />

            <section className="flex h-full flex-row">
                <Sidebar />
                {children}
            </section>
        </main>
    );
}
