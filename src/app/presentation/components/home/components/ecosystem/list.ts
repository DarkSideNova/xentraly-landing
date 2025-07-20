import { JSX } from "react";
import { AiFillRobot } from "react-icons/ai";
import { BiBuilding } from "react-icons/bi";
import { FiShield, FiShoppingBag, FiUsers } from "react-icons/fi";

export interface IEcosystemCard {
    id: number;
    title: string;
    description: string;
    backDescription: string;
    icon: JSX.Element | React.FC;
}

const listCards:IEcosystemCard[] = [
    {
        id: 1,
        title: "Apps Clientes",
        description: "Integra a tus clientes personas (B2C) entregándoles servicios de valor para su fidelización.",
        backDescription: "Expediente (salud, mascota, hogar, etc.), planes/membresías, compras, programas, notificaciones y otros servicios.",
        icon: FiUsers
    },
    {
        id: 2,
        title: "Apps Proveedores",
        description: "Impulsa el crecimiento y soporte de tu red de proveedores y servicios.",
        backDescription: "Gestión servicios, agendas, clientes, expedientes, atención, cobro, personal, localidades, promociones, publicaciones, entre otros servicios.",
        icon: FiShield
    },
    {
        id: 3,
        title: "Portal Empresas",
        description: "Integra a tus clientes empresas (B2B) y a sus colaboradores y conéctalos a tu red de servicios.",
        backDescription: "Indicadores de servicios, pagos, personal incluido en el servicio, planes, consumos, indicadores, entre otro servicios.",
        icon: BiBuilding
    },
    {
        id: 4,
        title: "Asistente IA",
        description: "Automatiza la atención de tus clientes y gestiona interacciones inteligentes.",
        backDescription: "Atiende solicitudes de servicio, horarios, localidades, citas, contratación de servicios y pagos.",
        icon: AiFillRobot
    },
    {
        id: 5,
        title: "Marketplace",
        description: "Publica, vende y conecta toda tu oferta desde un solo lugar.",
        backDescription: "Plantillas Marketplace, cotizaciones, pasarelas de pagos, contenidos, atención, calificación, promociones, compras de planes.",
        icon: FiShoppingBag
    },
    {
        id: 6,
        title: "Panel de Control",
        description: "Configura, administra y monitorea  los ingresos, proveedores, clientes, servicios, órdenes de tu comunidad.",
        backDescription: "Gestión de proveedores, planes para clientes y proveedores, KPI´s, publicaciones, programas y mucho más.",
        icon: FiShoppingBag
    },
]

export default listCards