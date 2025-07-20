export interface IAutomatizationCard {
    id: number;
    title: string;
    description: string;
}

const listCards:IAutomatizationCard[] = [
    {
        id: 1,
        title: "Configura tu Marketplace",
        description: "Selecciona tu template y configura tu servicios, planes, membresías, métodos de pago y otros elementos de tu comunidad.",
    },
    {
        id: 2,
        title: "Conecta a tus proveedores",
        description: "Invita a tu red para que se registren, tengan una App para gestionar su operación y formen parte de tu Marketplace con su oferta de servicios, y productos.",
    },
    {
        id: 3,
        title: "Publica y automatiza con IA",
        description: "Libera tu Marketplace y entrégale un asistente a cada proveedor para mejorar la atención de sus clientes.",
    },
    {
        id: 4,
        title: "Invita a tus clientes",
        description: "Conecta a los clientes para que tengan acceso a su expediente y accedan a servicios de valor, promociones, servicios personalizados, membresías, entre otros beneficios.",
    },
    {
        id: 5,
        title: "Administra todo desde un solo lugar",
        description: "Monitorea y administra los ingresos, proveedores, clientes, órdenes, suscripciones y otros servicios.",
    },
]

export default listCards