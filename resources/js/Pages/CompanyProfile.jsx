import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import useFormProcessing from "../hooks/use-form-processing";
import useFormErrors from "../hooks/use-form-errors";

export default function CompanyProfile() {
    const { processing, handleProcess } = useFormProcessing();
    const { formErrors, handleFormError } = useFormErrors();

    return (
        <section className="flex w-full flex-col ">
            <h1 className="border-black-500 border-b-2 p-3 text-3xl text-gray-500">
                Company Profile
            </h1>
            <SearchForm
                pageTitle="Company Profile"
                requestUrl="company-profile"
                isProcessing={handleProcess}
                onFormError={handleFormError}
                searchFormType="companyProfile"
            />
            <SearchResult
                processing={processing}
                formErrors={formErrors}
                searchResultType="companyProfile"
            />
        </section>
    );
}
