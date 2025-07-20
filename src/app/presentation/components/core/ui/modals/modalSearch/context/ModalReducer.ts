/* eslint-disable @typescript-eslint/no-explicit-any */
export const ModalReducer = (state: any, action: any) => {
    switch (action.type) {
        case "GET_POLICIES_LOADING":
            return {
                ...state,
                policies: {
                    ...state.policies,
                    data: [],
                    loading: true,
                    successful: false,
                    error: null,
                },
            };
        case "GET_POLICIES_SUCCESS":
            return {
                ...state,
                policies: {
                    ...state.policies,
                    data: action.payload.data,
                    loading: false,
                    successful: true,
                    error: null,
                },
            }
        case "GET_POLICIES_FAILURE":
            return {
                ...state,
                policies: {
                    ...state.policies,
                    data: [],
                    loading: false,
                    successful: false,
                    error: action.payload.error,
                },
            }
        default:
            return state
    }
}