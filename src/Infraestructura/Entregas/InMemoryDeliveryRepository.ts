// Importamos la entidad Delivery porque el repositorio
// almacenará objetos de este tipo.
import { Delivery } from "../../Dominio/Entregas/Delivery.js";

// Importamos el puerto que este adaptador debe implementar.
// "type" se utiliza porque IDeliveryRepository es una interfaz.
import type { IDeliveryRepository } from "../../Aplicacion/Entregas/IDeliveryRepository.js";

// Adaptador de infraestructura que guarda las entregas en memoria.
// Se utiliza para las pruebas sin necesitar una base de datos.
export class InMemoryDeliveryRepository implements IDeliveryRepository {

    // Map permite almacenar las entregas utilizando su ID como clave.
    private readonly deliveries = new Map<string, Delivery>();

    // Busca una entrega por su ID.
    // Si no existe, devuelve null.
    getById(id: string): Delivery | null {
        return this.deliveries.get(id) ?? null;
    }

    // Guarda una entrega en memoria.
    // Si ya existe una entrega con ese ID, la reemplaza.
    save(delivery: Delivery): void {
        this.deliveries.set(delivery.id, delivery);
    }
}