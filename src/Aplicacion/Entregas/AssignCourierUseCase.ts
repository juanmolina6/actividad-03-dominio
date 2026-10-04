// Importamos el puerto del repositorio.
// El caso de uso trabaja con esta interfaz y no con una base de datos directamente.
import type { IDeliveryRepository } from "./IDeliveryRepository.js";

// Caso de uso encargado de asignar un repartidor a una entrega.
export class AssignCourierUseCase {

    // Guardamos una referencia al repositorio que recibimos.
    private readonly repository: IDeliveryRepository;

    // Recibimos el repositorio mediante el constructor.
    // Esto permite cambiar la implementación del repositorio
    // sin modificar este caso de uso.
    constructor(repository: IDeliveryRepository) {
        this.repository = repository;
    }

    // Ejecuta la operación de asignar un repartidor.
    execute(deliveryId: string, courierId: string): void {

        // Buscamos la entrega utilizando el puerto del repositorio.
        const delivery = this.repository.getById(deliveryId);

        // Si la entrega no existe, no podemos continuar.
        if (delivery === null) {
            throw new Error("Entrega no encontrada");
        }

        // Le pedimos a la entidad Delivery que asigne el repartidor.
        // La entidad es la responsable de proteger la regla de negocio:
        // una entrega no puede tener dos repartidores.
        delivery.assignCourier(courierId);

        // Guardamos la entrega después de realizar el cambio.
        this.repository.save(delivery);
    }
}