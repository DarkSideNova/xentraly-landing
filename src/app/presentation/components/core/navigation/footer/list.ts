export interface IFooterLink {
    title: string;
    to: string;
}

const listOfLinks:IFooterLink[] = [
    {
        title: "Inicio",
        to: "/"
    },
    {
        title: "Soluciones",
        to: "/solutions"
    },
    {
        title: "Productos",
        to: "/products"
    },
    {
        title: "Sobre",
        to: "/about-us"
    },
    {
        title: "Contáctanos",
        to: "/contact-us"
    },
]

export default listOfLinks