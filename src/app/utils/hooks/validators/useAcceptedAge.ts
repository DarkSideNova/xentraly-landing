import { useMemo } from "react";

/**
 * Hook to validate if a given date string meets the accepted age criteria.
 * 
 * @param birthdate - The birthdate as a date string to validate.
 * @param acceptedAge - The minimum accepted age (default is 18).
 * @returns A boolean indicating whether the age is accepted.
 */
const useAcceptedAge = (birthdate: string | undefined | null, acceptedAge: number = 18): boolean => {
    const isAccepted = useMemo(() => {
        if (!birthdate) {
            return false;
        }

        const birthDateObj = new Date(birthdate);
        if (isNaN(birthDateObj.getTime())) {
            console.warn("Invalid date string provided to useAcceptedAge:", birthdate);
            return false;
        }

        const today = new Date();
        const age = today.getFullYear() - birthDateObj.getFullYear();
        const hasReachedBirthdayThisYear =
            today.getMonth() > birthDateObj.getMonth() ||
            (today.getMonth() === birthDateObj.getMonth() && today.getDate() >= birthDateObj.getDate());

        const calculatedAge = hasReachedBirthdayThisYear ? age : age - 1;

        return calculatedAge >= acceptedAge;
    }, [birthdate, acceptedAge]);

    return isAccepted;
};

export default useAcceptedAge;