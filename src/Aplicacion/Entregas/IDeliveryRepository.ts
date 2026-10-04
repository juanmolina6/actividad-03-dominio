import { Delivery } from "../../Dominio/Entregas/Delivery.js";

export interface IDeliveryRepository {
    getById(id: string): Delivery | null;
    save(delivery: Delivery): void;
}