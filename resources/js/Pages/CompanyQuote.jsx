import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import useFormProcessing from "../hooks/use-form-processing";
import useFormErrors from "../hooks/use-form-errors";

export default function CompanyQuote() {
    const { processing, handleProcess } = useFormProcessing();
    const { formErrors, handleFormError } = useFormErrors();

    return (
        <section className="flex w-full flex-col ">
            <h1 className="border-black-500 border-b-2 p-3 text-3xl text-gray-500">
                Company Quote
            </h1>
            <SearchForm
                pageTitle="Company Quote"
                requestUrl="company-quote"
                isProcessing={handleProcess}
                onFormError={handleFormError}
                searchFormType="companyQuote"
            />
            <SearchResult
                processing={processing}
                formErrors={formErrors}
                searchResultType="companyQuote"
            />
        </section>
    );
}
