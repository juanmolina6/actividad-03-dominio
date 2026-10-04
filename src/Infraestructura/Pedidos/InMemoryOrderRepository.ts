import { Order } from "../../Pedidos/Order.js";
import { OrderId } from "../../Pedidos/OrderId.js";
import type { IOrderRepository } from "../../Aplicacion/Pedidos/IOrderRepository.js";

// Implementación en memoria del repositorio de pedidos.
export class InMemoryOrderRepository implements IOrderRepository {

    private orders: Order[] = [];

    async getById(orderId: OrderId): Promise<Order | null> {
        return this.orders.find(
            order => order.getId().getValue() === orderId.getValue()
        ) ?? null;
    }

    async save(order: Order): Promise<void> {
        const index = this.orders.findIndex(
            existingOrder =>
                existingOrder.getId().getValue() === order.getId().getValue()
        );

        if (index >= 0) {
            this.orders[index] = order;
        } else {
            this.orders.push(order);
        }
    }

    add(order: Order): void {
        this.orders.push(order);
    }
}