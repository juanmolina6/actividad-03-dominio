// Importamos el caso de uso que vamos a probar.
import { EstimateRouteUseCase } from "./EstimateRouteUseCase.js";

// Importamos el adaptador en memoria que utilizaremos
// como implementación del repositorio.
import { InMemoryRouteRepository } from "../../Infraestructura/Ruteo/InMemoryRouteRepository.js";

// Creamos el repositorio en memoria.
const repository = new InMemoryRouteRepository();

// Creamos el caso de uso utilizando el repositorio.
const useCase = new EstimateRouteUseCase(repository);

// Solicitamos una estimación entre un origen y un destino.
const estimate = useCase.execute(
    "Medellín",
    "Envigado"
);

// Verificamos que la estimación tenga una duración válida.
if (estimate.durationMinutes !== 30) {
    throw new Error(
        "La prueba falló: la duración de la ruta no es correcta"
    );
}

// Verificamos que la ruta sea considerada viable.
if (!estimate.viable) {
    throw new Error(
        "La prueba falló: la ruta debería ser viable"
    );
}

// Si llegamos aquí, la prueba fue exitosa.
console.log(
    "Prueba exitosa: Ruteo obtuvo una ruta viable"
);