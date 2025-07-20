/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const useCustomer = (): string => {

    const storage = localStorage.getItem("dm.customer.id");

    const [customerId, setCustomerId] = useState<string>('');

    useEffect(() => {

        const checkCustomerExistence = () => {
            if(!storage){
                setCustomerId("");
            }else{
                const parsed = JSON.parse(storage);
                setCustomerId(parsed)
            }
        };

        checkCustomerExistence();
    }, []);

    return customerId;
};

export default useCustomer;