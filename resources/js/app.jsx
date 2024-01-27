import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import Main from "./Pages/Layouts/Main";
import Login from "./Pages/Layouts/Login";
import { Provider } from "react-redux";
import store from "./store";
// import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

createInertiaApp({
    // Below you can see that we are going to get all React components from resources/js/Pages folder
    resolve: (name) => {
        // resolvePageComponent(
        //     `./Pages/${name}.jsx`,
        //     import.meta.glob("./Pages/**/*.jsx")
        // ),
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];
        page.default.layout = name.startsWith("Auth/")
            ? (page) => <Login children={page} />
            : (page) => <Main children={page} />;
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <Provider store={store}>
                <App {...props} />
            </Provider>
        );
    },
});
