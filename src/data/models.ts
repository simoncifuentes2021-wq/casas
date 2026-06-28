import type { Model } from "@/types";

export const projectIncludes = [
  "Radier según modelo",
  "Base estabilizada compactada",
  "Cadenas de fierro de 15 x 20",
  "Malla ACMA",
  "Salidas de desagüe",
  "Polietileno",
  "Losa de 8 cm",
  "Paneles exteriores forrados con metal siding, color a elección",
  "Pie derecho en madera 2 x 3",
  "Paneles interiores sin forrar",
  "Cerchas en 1 x 4",
  "Costaneras en 2 x 2",
  "Planchas de zinc 0.35",
  "Membrana hidrófuga en techo",
  "Caballetes y esquineros",
  "Puertas con cerradura",
  "Ventanas en aluminio línea L20",
];

export const valueNotice =
  "Valores referenciales. Proyecto personalizable según requerimientos, terreno y terminaciones.";

export const models: Model[] = [
  {
    slug: "casa-36m2",
    name: "Casa 36 m²",
    shortName: "36 m²",
    area: 36,
    price: "$5.790.000",
    description:
      "Proyecto compacto y funcional para quienes buscan una vivienda inicial bien resuelta, con espacios esenciales y posibilidad de personalización.",
    features: [
      "2 dormitorios",
      "1 baño",
      "Cocina",
      "Living",
      "Radier 36 m²",
      "Ventanas aluminio línea L20",
      "Proyecto personalizable",
    ],
    image: "/images/modelos/casa-36.png",
    planImage: "/images/planos/plano-36.webp",
  },
  {
    slug: "casa-42m2",
    name: "Casa 42 m²",
    shortName: "42 m²",
    area: 42,
    price: "$6.590.000",
    description:
      "Una alternativa equilibrada para familias que necesitan una distribución práctica, living-comedor integrado y una base adaptable al terreno.",
    features: [
      "2 dormitorios",
      "1 baño",
      "Living-comedor",
      "Cocina",
      "Radier 42 m²",
      "Ventanas aluminio línea L20",
      "Proyecto personalizable",
    ],
    image: "/images/modelos/casa-42.webp",
    planImage: "/images/planos/plano-42.webp",
  },
  {
    slug: "casa-54m2",
    name: "Casa 54 m²",
    shortName: "54 m²",
    area: 54,
    price: "$8.790.000",
    modelName: "Malalcahuello 54 A",
    description:
      "Modelo con identidad sureña y superficie versátil, pensado para una vida cotidiana cómoda y un exterior resistente con metal siding.",
    features: [
      "2 dormitorios",
      "1 baño",
      "Living-comedor",
      "Radier 54 m²",
      "Paneles exteriores con metal siding",
      "Ventanas aluminio línea L20",
      "Proyecto personalizable",
    ],
    image: "/images/modelos/casa-54.webp",
    planImage: "/images/planos/plano-54.webp",
  },
  {
    slug: "casa-71m2",
    name: "Casa 71 m²",
    shortName: "71 m²",
    area: 71,
    price: "$11.290.000",
    description:
      "Proyecto familiar con tres dormitorios, dos baños y terraza de madera para ampliar la vida hacia el exterior.",
    features: [
      "3 dormitorios",
      "2 baños",
      "Cocina",
      "Comedor",
      "Estar",
      "Terraza madera",
      "Proyecto personalizable",
    ],
    image: "/images/modelos/casa-71.webp",
    planImage: "/images/planos/plano-71.webp",
  },
  {
    slug: "casa-90m2",
    name: "Casa 90 m²",
    shortName: "90 m²",
    area: 90,
    price: "$13.490.000",
    description:
      "Vivienda amplia con suite principal, lavandería y cocina americana, diseñada para familias que buscan mayor independencia interior.",
    features: [
      "3 dormitorios",
      "Baño común",
      "Baño en suite",
      "Cocina americana",
      "Living-comedor",
      "Lavandería",
      "Proyecto personalizable",
    ],
    image: "/images/modelos/casa-90.webp",
    planImage: "/images/planos/plano-90.webp",
  },
  {
    slug: "casa-110m2",
    name: "Casa 110 m²",
    shortName: "110 m²",
    area: 110,
    price: "$16.490.000",
    description:
      "El modelo de mayor superficie de la línea, con programa completo para una familia que necesita amplitud, suite y áreas comunes conectadas.",
    features: [
      "Dormitorio principal",
      "Walk-in closet",
      "Baño en suite",
      "Dormitorio 2",
      "Dormitorio 3",
      "Baño",
      "Lavandería",
      "Cocina americana",
      "Living-comedor",
      "Proyecto personalizable",
    ],
    image: "/images/modelos/casa-110.webp",
    planImage: "/images/planos/plano-110.webp",
  },
];

export function getModelBySlug(slug: string) {
  return models.find((model) => model.slug === slug);
}

export function getRelatedModels(slug: string) {
  return models.filter((model) => model.slug !== slug).slice(0, 3);
}
