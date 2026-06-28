import { siteConfig } from "@/config/site";

const generalMessage =
  "Hola Casas BAE, quiero cotizar una casa personalizada. ¿Me pueden ayudar?";

export function whatsappUrl(message = generalMessage) {
  return `https://wa.me/${siteConfig.phoneWa}?text=${encodeURIComponent(message)}`;
}

export function modelWhatsappUrl(modelName: string) {
  return whatsappUrl(
    `Hola Casas BAE, quiero cotizar el modelo ${modelName}. ¿Me pueden entregar más información?`,
  );
}

export function contactWhatsappUrl(values: {
  name?: string;
  phone?: string;
  model?: string;
  message?: string;
}) {
  const parts = [
    "Hola Casas BAE, quiero cotizar un proyecto.",
    values.name ? `Nombre: ${values.name}` : null,
    values.phone ? `Teléfono: ${values.phone}` : null,
    values.model ? `Modelo de interés: ${values.model}` : null,
    values.message ? `Mensaje: ${values.message}` : null,
  ].filter(Boolean);

  return whatsappUrl(parts.join("\n"));
}
