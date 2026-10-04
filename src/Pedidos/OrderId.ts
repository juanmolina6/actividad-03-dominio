// Objeto de valor que representa el identificador de un pedido.
export class OrderId {

    // Guarda el valor del identificador.
    // readonly evita que pueda cambiar después de crear el objeto.
    private readonly value: string;

    // Constructor que recibe el identificador del pedido.
    constructor(value: string) {

        // Regla del dominio:
        // el identificador del pedido no puede estar vacío.
        if (!value || value.trim() === "") {
            throw new Error("El identificador del pedido no puede estar vacío");
        }

        // Guardamos el identificador cuando es válido.
        this.value = value;
    }

    // Permite obtener el valor del identificador.
    getValue(): string {
        return this.value;
    }
}