/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

interface IProps {
    value: number;
    min: number;
    max: number;
}

const useValidVehicleValue = ({value, min, max}:IProps):boolean => {
    const [validValue, setValidValue] = useState(false);

    useEffect(()=>{
        if(!value){
            setValidValue(false);
        }

        if(value > max || value < min){
            setValidValue(false)
        }else{
            setValidValue(true)
        }
    },[value])

    return validValue
} 

export default useValidVehicleValue