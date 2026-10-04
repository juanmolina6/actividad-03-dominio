// Importamos el objeto de valor que representa
// el resultado de una estimación de ruta.
import { RouteEstimate } from "../../Dominio/Ruteo/RouteEstimate.js";

// Este puerto define lo que la aplicación necesita
// para obtener una estimación de ruta.
//
// La aplicación conoce esta interfaz,
// pero no conoce cómo se obtiene realmente la ruta.
export interface IRouteRepository {

    // Busca una estimación entre un origen y un destino.
    getEstimate(
        origin: string,
        destination: string
    ): RouteEstimate;
}