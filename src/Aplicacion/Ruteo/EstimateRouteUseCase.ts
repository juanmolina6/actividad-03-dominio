import type { IRouteRepository } from "./IRouteRepository.js";

// Importamos el objeto de valor que representa
// el resultado de la estimación.
import { RouteEstimate } from "../../Dominio/Ruteo/RouteEstimate.js";

// Este caso de uso coordina la solicitud de una
// estimación de ruta.
export class EstimateRouteUseCase {

    // Guardamos el repositorio mediante el puerto.
    private readonly repository: IRouteRepository;

    // Recibimos el puerto desde fuera.
    constructor(repository: IRouteRepository) {
        this.repository = repository;
    }

    // Ejecutamos la estimación de ruta.
    execute(
        origin: string,
        destination: string
    ): RouteEstimate {

        // Delegamos la obtención de la estimación
        // al repositorio.
        return this.repository.getEstimate(
            origin,
            destination
        );
    }
}