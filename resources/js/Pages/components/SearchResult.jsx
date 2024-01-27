import Loading from "./Loading";
import { useSelector } from "react-redux";

export default function SearchResult({
    processing,
    formErrors,
    searchResultType,
}) {
    const result = useSelector((state) => {
        return state.result[searchResultType];
    });

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

    return processing ? (
        <Loading />
    ) : (
        <div className="box-content flex h-[calc(100%_-_300px)] overflow-y-auto px-3 pb-3">
            {formErrors.result
                ? formErrors.result
                : renderedCompanyProfileSearch}
        </div>
    );
}
