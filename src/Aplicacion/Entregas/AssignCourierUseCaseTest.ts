// Importamos la entidad Delivery que representa una entrega.
import { Delivery } from "../../Dominio/Entregas/Delivery.js";

// Importamos el caso de uso que queremos probar.
import { AssignCourierUseCase } from "./AssignCourierUseCase.js";

// Importamos el adaptador en memoria que utilizaremos
// como implementación del repositorio durante la prueba.
import { InMemoryDeliveryRepository } from "../../Infraestructura/Entregas/InMemoryDeliveryRepository.js";

// Creamos el repositorio en memoria.
const repository = new InMemoryDeliveryRepository();

// Creamos el caso de uso utilizando el repositorio.
const useCase = new AssignCourierUseCase(repository);

// Creamos una entrega para realizar la prueba.
const delivery = new Delivery(
    "delivery-1",
    "Calle 10 # 20-30"
);

// Guardamos la entrega en el repositorio.
repository.save(delivery);

// Asignamos el primer repartidor.
useCase.execute("delivery-1", "courier-1");

// Verificamos que el primer repartidor haya quedado asignado.
if (delivery.getCourierId() !== "courier-1") {
    throw new Error("La prueba falló: el repartidor no fue asignado correctamente");
}

console.log("Prueba exitosa: el repartidor fue asignado correctamente");

// Intentamos asignar un segundo repartidor.
// La entidad Delivery debe impedir esta operación.
try {
    useCase.execute("delivery-1", "courier-2");

    // Si llegamos aquí, significa que la regla de negocio no funcionó.
    throw new Error(
        "La prueba falló: se permitió asignar un segundo repartidor"
    );
} catch (error) {

    // Verificamos que el error corresponda a la regla de negocio esperada.
    if (
        error instanceof Error &&
        error.message === "La entrega ya tiene un repartidor asignado"
    ) {
        console.log(
            "Prueba exitosa: una entrega no puede tener dos repartidores"
        );
    } else {
        // Si fue otro error diferente, lo mostramos.
        throw error;
    }
}