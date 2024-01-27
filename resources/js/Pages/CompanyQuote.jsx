import { useForm, Head } from "@inertiajs/react";
import Loading from "./components/Loading";
import { useState } from "react";

export default function CompanyQuote() {
    const { get, processing, errors, data, setData } = useForm({
        symbol: "",
    });

    const [fetchedSymbols, setFetchedSymbols] = useState([]);
    const [result, setResult] = useState([]);

    const searchHandler = (e) => {
        e.preventDefault();

        const hasCachedSymbol = fetchedSymbols.find(
            ([{ symbol }]) => symbol === data.symbol
        );

        if (hasCachedSymbol) {
            setResult(hasCachedSymbol);
        } else {
            visit(`/company-quote/${data.symbol}`, {
                preserveState: true,
                replace: false,
                onSuccess: ({ props }) => {
                    setFetchedSymbols((prevSymbols) => [
                        ...prevSymbols,
                        props.flash.result,
                    ]);
                    setResult(props.flash.result);
                },
            });
        }
    };

    const symbolInput = (e) => {
        setResult([]);
        setData("symbol", e.target.value.toUpperCase());
    };

    const renderedCompanyProfileSearch = result?.map((result, index) => {
        if (typeof result === "object" && result !== null) {
            return (
                <table
                    className="border-collapse-fixed mt-3 bg-white shadow-lg"
                    key={index}
                >
                    <tbody>
                        {Object.entries(result).map(([key, value], index) => (
                            <tr key={index} className="p-3">
                                <td className="border-b-2 border-gray-500 bg-yellow-100 px-8 py-4 text-left">
                                    {key}
                                </td>
                                <td className="border-white-500 border-b-2 bg-cyan-950 px-8 py-4 text-left text-white">
                                    {value}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            );
        }
    });

    return (
        <>
            <Head title={`TeemCorp - ${data.symbol} - Company Quote`} />
            <section className="flex w-full flex-col ">
                <h1 className="border-black-500 border-b-2 p-3 text-3xl text-gray-500">
                    Company Quote
                </h1>

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
                            placeholder="Search company quote"
                            onChange={symbolInput}
                        />
                    </div>
                    <div>
                        <button
                            disabled={!!!data.symbol}
                            className="button border-2 border-blue-800 bg-blue-500 p-3 text-white disabled:opacity-25"
                            onClick={searchHandler} // Only initiate API call on button click
                        >
                            SEARCH
                        </button>
                    </div>
                </form>

                {processing ? (
                    <Loading />
                ) : (
                    <div className="box-content flex h-[calc(100%_-_300px)] overflow-y-auto px-3 pb-3">
                        {errors.result ? (
                            <h1>No Result</h1>
                        ) : (
                            renderedCompanyProfileSearch
                        )}
                    </div>
                )}
            </section>
        </>
    );
}
