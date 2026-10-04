import { OrderId } from "../../Pedidos/OrderId.js";
import { Order } from "../../Pedidos/Order.js";
import { ConfirmOrderUseCase } from "./ConfirmOrderUseCase.js";
import type { IOrderRepository } from "./IOrderRepository.js";

// Repositorio en memoria para probar el caso de uso.
class InMemoryOrderRepository implements IOrderRepository {

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

// Prueba del caso de uso.
async function testConfirmOrderUseCase(): Promise<void> {

    // Creamos el repositorio en memoria.
    const repository = new InMemoryOrderRepository();

    // Creamos el identificador del pedido.
    const orderId = new OrderId("pedido-1");

    // Creamos el pedido.
    const order = new Order(orderId);

    // Guardamos el pedido en memoria.
    repository.add(order);

    // Creamos el caso de uso utilizando el puerto.
    const useCase = new ConfirmOrderUseCase(repository);

    // Ejecutamos la confirmación.
    await useCase.execute(orderId);

    // Recuperamos el pedido después de ejecutar el caso de uso.
    const savedOrder = await repository.getById(orderId);

    // Verificamos que el pedido quedó confirmado.
    if (!savedOrder || savedOrder.getStatus() !== "CONFIRMADO") {
        throw new Error("La prueba falló: el pedido no quedó confirmado");
    }

    console.log("Prueba exitosa: el pedido fue confirmado correctamente");
}

// Ejecutamos la prueba.
testConfirmOrderUseCase();