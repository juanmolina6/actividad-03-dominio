export class DeliveryAddress {
    constructor(public readonly value: string) {
        if (!value.trim()) {
            throw new Error("La dirección de entrega no puede estar vacía");
        }
    }
}