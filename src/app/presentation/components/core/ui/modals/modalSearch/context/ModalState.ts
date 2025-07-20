/* eslint-disable @typescript-eslint/no-explicit-any */
import Policy from "@/app/domain/core/entities/policy/policy.interface";
import { AuthFailure } from "@/app/domain/core/failures/auth/auth.failure";

export interface IModalState {
    policies: ISearchPolicyState;
}

interface ISearchPolicyState {
    data: Policy[];
    loading: boolean;
    successful: boolean;
    error: AuthFailure | null;
}

export const initialState: IModalState = {
    policies: {
        data: [],
        loading: false,
        successful: false,
        error: null
    }
}