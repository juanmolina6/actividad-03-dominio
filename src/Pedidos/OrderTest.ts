import { Order } from "./Order.js";
import { OrderId } from "./OrderId.js";

// Creamos un identificador para el pedido.
const orderId = new OrderId("PED-001");

// Creamos el pedido.
const order = new Order(orderId);

// Verificamos que el pedido inicia pendiente.
if (order.getStatus() !== "PENDIENTE") {
    throw new Error("El pedido debe iniciar en estado PENDIENTE");
}

// Confirmamos el pedido.
order.confirmar();

// Verificamos que el pedido quedó confirmado.
if (order.getStatus() !== "CONFIRMADO") {
    throw new Error("El pedido debe quedar en estado CONFIRMADO");
}

// Verificamos que no se pueda confirmar nuevamente.
try {
    order.confirmar();
    throw new Error("El pedido no debería poder confirmarse nuevamente");
} catch (error) {
    if (!(error instanceof Error)) {
        throw error;
    }
}

console.log("Prueba de Order completada correctamente");