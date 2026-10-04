// Objeto de valor que representa el identificador de un producto.
export class ProductId {

    // Guarda el valor del identificador.
    // readonly significa que no se puede modificar después de asignarlo.
    private readonly value: string;

    // Constructor que recibe el identificador del producto.
    constructor(value: string) {

        // Regla del dominio:
        // el identificador no puede estar vacío ni contener solamente espacios.
        if (!value || value.trim() === "") {
            throw new Error("El identificador del producto no puede estar vacío");
        }

        // Si el identificador es válido, lo guardamos.
        this.value = value;
    }

    // Permite obtener el valor del identificador.
    getValue(): string {
        return this.value;
    }
}