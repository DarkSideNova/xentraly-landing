/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Policy from "@/app/domain/core/entities/policy/policy.interface";
import { IGetPoliciesQuery } from "@/app/domain/core/querys/policies/getPolicies.query";
import PoliciesUseCase from "@/app/domain/useCases/policies/policies.uc";
import { Dispatch } from "react";

export interface IModalActions {
    searchPolicy: (obj:IGetPoliciesQuery) => (dispatch: Dispatch<any>) => {};
}

const searchPolicy = (obj:IGetPoliciesQuery) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({ type: "GET_POLICIES_LOADING" });

        const res:Policy[] = await new PoliciesUseCase().getPolicies(obj)

        dispatch({ type: "GET_POLICIES_SUCCESS", payload: { data: res } });
    } catch (err) {
        dispatch({ type: "GET_POLICIES_FAILURE", payload: { error: err } });
    }
}

export const actions: IModalActions = {
    searchPolicy
}
