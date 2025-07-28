import { JSX } from "react";
import { FiUsers } from "react-icons/fi";

export interface IBusinessModelCard {
    id: number;
    title: string;
    description: string;
    icon: JSX.Element | React.FC;
}

const listCards:IBusinessModelCard[] = [
    {
        id: 1,
        title: "B2C",
        description: "Conecta a tus clientes de forma directa y flexible. Haz que formen parte de tu ecosistema digital, accedan fácilmente a tus servicios y productos y vivan una experiencia completa y personalizada.",
        icon: FiUsers
    },
    {
        id: 2,
        title: "B2B2C",
        description: "Crea conexiones de valor entre aliados y clientes. Impulsa un modelo colaborativo que integra redes, proveedores y usuarios finales en un entorno conectado, adaptable y eficiente.",
        icon: FiUsers
    },
    {
        id: 3,
        title: "Proyectos",
        description: "Integra soluciones a la medida de tu operación. Activa solo los servicios y componentes que necesitas para reducir costos, optimizar procesos y escalar sin complicaciones.",
        icon: FiUsers
    }
]

export default listCards