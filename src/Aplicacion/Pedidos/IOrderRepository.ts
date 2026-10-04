import { Order } from "../../Pedidos/Order.js";
import { OrderId } from "../../Pedidos/OrderId.js";

// Puerto que define las operaciones necesarias para guardar y consultar pedidos.
export interface IOrderRepository {

    // Busca un pedido por su identificador.
    getById(id: OrderId): Promise<Order | null>;

    // Guarda los cambios realizados en un pedido.
    save(order: Order): Promise<void>;
}