import menuRoutes from "@/app/presentation/routes/navbar/menu.routes";

export interface ILinkMenu {
    title: string;
    to: string;
}

const linksMenu:ILinkMenu[] = [
    {
        title: "Inicio",
        to: menuRoutes.home
    },
    {
        title: "Productos",
        to: menuRoutes.products
    },
    {
        title: "Sobre",
        to: menuRoutes.aboutUs
    },
    {
        title: "Contáctanos",
        to: menuRoutes.contactUs
    },
]

export default linksMenu