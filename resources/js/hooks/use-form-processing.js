import { useState } from "react";
const useFormProcessing = () => {
    const [processing, setProcessing] = useState(false);

    const handleProcess = (progress) => setProcessing(progress);

    return { processing, handleProcess };
};

export default useFormProcessing;
