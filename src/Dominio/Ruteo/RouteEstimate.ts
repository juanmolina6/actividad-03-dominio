// Representa el resultado de una estimación de ruta.
export class RouteEstimate {

    // Tiempo estimado de la ruta en minutos.
    public readonly durationMinutes: number;

    // Indica si la ruta es viable para realizar la entrega.
    public readonly viable: boolean;

    // Constructor del objeto de valor.
    constructor(
        durationMinutes: number,
        viable: boolean
    ) {

        // Una duración negativa no tiene sentido para una ruta.
        if (durationMinutes < 0) {
            throw new Error(
                "La duración de la ruta no puede ser negativa"
            );
        }

        // Guardamos la duración estimada.
        this.durationMinutes = durationMinutes;

        // Guardamos si la ruta es viable.
        this.viable = viable;
    }
}