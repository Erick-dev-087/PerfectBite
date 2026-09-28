import { CartItem, CheckoutFormData } from "@/types";
import { formatPrice } from "./formatting";
import { DELIVERY_FEE, WHATSAPP_NUMBER } from "@/data/products";

/**
 * Build a formatted WhatsApp order message from cart and customer details.
 */
export function buildOrderMessage(
  items: CartItem[],
  formData: CheckoutFormData
): string {
  const itemLines = items
    .map(
      (item) =>
        `• ${item.product.name} (${item.product.packSize}) × ${item.quantity} — ${formatPrice(item.product.price * item.quantity)}`
    )
    .join("\n");

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const total = subtotal + DELIVERY_FEE;

  const message = `🍖 *New Perfect Bite Order*

*Order Items:*
${itemLines}

*Subtotal:* ${formatPrice(subtotal)}
*Delivery:* ${formatPrice(DELIVERY_FEE)}
*Total:* ${formatPrice(total)}

*Delivery Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.area}
Address: ${formData.address}${formData.notes ? `\n\n*Notes:* ${formData.notes}` : ""}`;

  return message;
}

/**
 * Generate a WhatsApp URL with the pre-filled order message.
 */
export function getWhatsAppOrderUrl(
  items: CartItem[],
  formData: CheckoutFormData
): string {
  const message = buildOrderMessage(items, formData);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a simple WhatsApp contact URL (for the floating button).
 */
export function getWhatsAppContactUrl(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to place an order from Perfect Bite 🍖")}`;
}
