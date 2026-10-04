import { OrderId } from "../../Pedidos/OrderId.js";
import { Order } from "../../Pedidos/Order.js";
import { ConfirmOrderUseCase } from "./ConfirmOrderUseCase.js";
import { InMemoryOrderRepository } from "../../Infraestructura/Pedidos/InMemoryOrderRepository.js";

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

// Prueba que un pedido confirmado no pueda confirmarse nuevamente.
async function testCannotConfirmAlreadyConfirmedOrder(): Promise<void> {

    // Creamos el repositorio en memoria.
    const repository = new InMemoryOrderRepository();

    // Creamos el identificador y el pedido.
    const orderId = new OrderId("pedido-2");
    const order = new Order(orderId);

    // Guardamos el pedido.
    repository.add(order);

    // Creamos el caso de uso.
    const useCase = new ConfirmOrderUseCase(repository);

    // Primera confirmación.
    await useCase.execute(orderId);

    // Variable para comprobar si la segunda confirmación fue rechazada.
    let errorCaught = false;

    // Intentamos confirmar nuevamente el mismo pedido.
    try {
        await useCase.execute(orderId);
    } catch (error) {

        // Comprobamos que el error corresponda a la regla del dominio.
        if (
            error instanceof Error &&
            error.message ===
                "El pedido no puede ser confirmado en su estado actual"
        ) {
            errorCaught = true;
        } else {
            throw error;
        }
    }

    // Si no se produjo el error esperado, la prueba falla.
    if (!errorCaught) {
        throw new Error(
            "La prueba falló: el pedido pudo confirmarse dos veces"
        );
    }

    console.log(
        "Prueba exitosa: un pedido confirmado no puede confirmarse nuevamente"
    );
}

// Ejecutamos las pruebas.
testConfirmOrderUseCase();
testCannotConfirmAlreadyConfirmedOrder();