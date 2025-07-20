import { JSX } from "react";

export default interface IRoutes {
    path: string;
    element: any;
    children?: IRoutes[];
}
