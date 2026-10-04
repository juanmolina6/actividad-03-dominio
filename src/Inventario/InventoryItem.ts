// Importamos el objeto de valor que identifica al producto.
import { ProductId } from "./ProductId.js";

// Entidad principal del contexto de Inventario.
export class InventoryItem {

    // Identificador único del producto.
    private readonly productId: ProductId;

    // Cantidad de unidades disponibles actualmente.
    private availableQuantity: number;

    // Constructor de la entidad.
    constructor(
        productId: ProductId,
        availableQuantity: number
    ) {

        // La cantidad disponible no puede ser negativa.
        if (availableQuantity < 0) {
            throw new Error("La cantidad disponible no puede ser negativa");
        }

        // Guardamos el identificador del producto.
        this.productId = productId;

        // Guardamos la cantidad disponible.
        this.availableQuantity = availableQuantity;
    }

    // Regla de dominio:
    // permite reservar unidades solamente si existen suficientes disponibles.
    reserve(quantity: number): void {

        // La cantidad a reservar debe ser mayor que cero.
        if (quantity <= 0) {
            throw new Error("La cantidad a reservar debe ser mayor que cero");
        }

        // Invariante principal del contexto:
        // no se pueden reservar más unidades de las disponibles.
        if (quantity > this.availableQuantity) {
            throw new Error("No hay suficiente inventario disponible");
        }

        // Si la reserva es válida, descontamos las unidades.
        this.availableQuantity -= quantity;
    }

    // Permite consultar el identificador del producto.
    getProductId(): ProductId {
        return this.productId;
    }

    // Permite consultar la cantidad disponible.
    getAvailableQuantity(): number {
        return this.availableQuantity;
    }
}