/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, createContext, useReducer } from "react";
import { actions, IModalActions } from "./ModalActions";
import { IModalState, initialState } from "./ModalState";
import { ModalReducer } from "./ModalReducer";

export interface IModalContext {
    state: IModalState;
    actions: IModalActions;
    dispatch: Dispatch<any>;
}

interface IProps {
    children: JSX.Element | JSX.Element[];
}

export const ModalContext = createContext<IModalContext>(
    {} as IModalContext
);

const ModalProvider = ({ children }: IProps) => {
    const [state, dispatch] = useReducer(ModalReducer, initialState);

    return (
        <ModalContext.Provider value={{ state, actions, dispatch }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;