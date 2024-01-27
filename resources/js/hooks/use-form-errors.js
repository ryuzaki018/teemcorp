import { useState } from "react";
const useFormErrors = () => {
    const [formErrors, setFormErrors] = useState("");

    const handleFormError = (error) => setFormErrors(error);

    return { formErrors, handleFormError };
};

export default useFormErrors;
