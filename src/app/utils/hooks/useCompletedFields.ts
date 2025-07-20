/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

interface IProps {
    object: Record<string, any>;
    list: string[];
}

/**
 * Hook to check if all specified fields in an object are completed.
 * 
 * @param props - An object containing the target object and the list of fields to check.
 * @returns A boolean indicating whether all fields are completed.
 */
const useCompletedFields = ({ object, list }: IProps): boolean => {
    const [isAllCompleted, setIsAllCompleted] = useState<boolean>(false);

    useEffect(() => {
        const incompleteFields = list.filter((field) => !object[field] || object[field] === "");
        setIsAllCompleted(incompleteFields.length === 0);
    }, [object, list]);

    return isAllCompleted;
};

export default useCompletedFields;