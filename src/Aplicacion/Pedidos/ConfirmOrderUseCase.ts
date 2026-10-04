import { OrderId } from "../../Pedidos/OrderId.js";
import type { IOrderRepository } from "./IOrderRepository.js";

// Caso de uso encargado de confirmar un pedido.
export class ConfirmOrderUseCase {

    // Repositorio definido mediante un puerto.
    private readonly repository: IOrderRepository;

    // Recibe el repositorio sin depender de una implementación concreta.
    constructor(repository: IOrderRepository) {
        this.repository = repository;
    }

    // Ejecuta la confirmación del pedido.
    async execute(orderId: OrderId): Promise<void> {

        // Buscamos el pedido mediante el puerto.
        const order = await this.repository.getById(orderId);

        // Si no existe, no podemos confirmarlo.
        if (!order) {
            throw new Error("El pedido no existe");
        }

        // La entidad protege la regla del dominio.
        order.confirmar();

        // Guardamos el pedido actualizado mediante el puerto.
        await this.repository.save(order);
    }
}