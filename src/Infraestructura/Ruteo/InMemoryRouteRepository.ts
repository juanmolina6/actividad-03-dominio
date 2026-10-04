// Importamos el puerto que debemos implementar.
import type { IRouteRepository } from "../../Aplicacion/Ruteo/IRouteRepository.js";

// Importamos el objeto de valor utilizado
// para representar una estimación de ruta.
import { RouteEstimate } from "../../Dominio/Ruteo/RouteEstimate.js";

// Este adaptador simula la obtención de rutas
// sin depender de una API externa.
export class InMemoryRouteRepository implements IRouteRepository {

    // Obtenemos una estimación de ruta.
    getEstimate(
        origin: string,
        destination: string
    ): RouteEstimate {

        // Por ahora utilizamos una estimación fija
        // para poder probar el comportamiento del contexto.
        return new RouteEstimate(
            30,
            true
        );
    }
}