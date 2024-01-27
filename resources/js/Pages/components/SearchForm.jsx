import { Head, useForm } from "@inertiajs/react";
import { useDispatch, useSelector } from "react-redux";
import { setResult, resetResult } from "../../store/slices/resultSlice";
import { setCachedSymbol } from "../../store/slices/cachedSymbolsSlice";
import { useEffect } from "react";
export default function SearchForm({
    isProcessing,
    requestUrl,
    onFormError,
    pageTitle,
    searchFormType,
}) {
    const dispatch = useDispatch();

    const { get, processing, data, setData } = useForm({
        symbol: "",
    });

    useEffect(() => {
        isProcessing(processing);
    }, [processing, isProcessing]);

    useEffect(() => {
        dispatch(resetResult());
    }, []);

    const symbolInput = (e) => {
        dispatch(
            setResult({
                formType: searchFormType,
                data: [],
            })
        );
        onFormError("");
        setData("symbol", e.target.value.toUpperCase());
    };

    const fetchedSymbols = useSelector((state) => {
        return state.symbols[searchFormType];
    });

    const searchHandler = (e) => {
        e.preventDefault();

        const hasCachedSymbol = fetchedSymbols.find(
            ({ symbol }) => symbol === data.symbol
        );

        if (hasCachedSymbol) {
            dispatch(
                setResult({
                    formType: searchFormType,
                    data: [hasCachedSymbol],
                })
            );
        } else {
            get(`/${requestUrl}/${data.symbol}`, {
                preserveState: true,
                replace: false,
                forceFormData: true,
                onSuccess: ({ props }) => {
                    const result = {
                        formType: searchFormType,
                        data: props.flash.result,
                    };

                    dispatch(setCachedSymbol(result));
                    dispatch(setResult(result));
                },
                onError: (error) => {
                    onFormError(error);
                },
            });
        }
    };

    return (
        <>
            <Head
                title={`TeemCorp - ${data.symbol ? data.symbol + " - " : ""} ${pageTitle}`}
            />
            <form
                action=""
                className="mt-3 flex flex-row p-3"
                onSubmit={searchHandler}
            >
                <div className="mr-3 w-full grow">
                    <input
                        value={data.symbol}
                        className="w-full border-2 border-gray-500 p-3"
                        type="text"
                        placeholder="Search company symbol"
                        onChange={symbolInput}
                    />
                </div>
                <div>
                    <button
                        disabled={!!!data.symbol}
                        className="button border-2 border-blue-800 bg-blue-500 p-3 text-white disabled:opacity-25"
                        onClick={searchHandler}
                    >
                        SEARCH
                    </button>
                </div>
            </form>
        </>
    );
}
