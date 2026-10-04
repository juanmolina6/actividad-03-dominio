import { OrderId } from "./OrderId.js";

// Entidad que representa un pedido dentro del dominio.
export class Order {

    // Identificador único del pedido.
    private readonly id: OrderId;

    // Estado actual del pedido.
    private status: string;

    // Constructor de la entidad.
    constructor(id: OrderId) {
        this.id = id;
        this.status = "PENDIENTE";
    }

    // Permite obtener el identificador del pedido.
    getId(): OrderId {
        return this.id;
    }

    // Permite consultar el estado actual del pedido.
    getStatus(): string {
        return this.status;
    }

    // Regla del dominio:
    // un pedido puede pasar de pendiente a confirmado.
    confirmar(): void {
        if (this.status !== "PENDIENTE") {
            throw new Error("El pedido no puede ser confirmado en su estado actual");
        }

        this.status = "CONFIRMADO";
    }
}