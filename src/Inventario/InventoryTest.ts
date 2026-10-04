import { ProductId } from "./ProductId.js";
import { InventoryItem } from "./InventoryItem.js";

// Creamos un producto con 10 unidades disponibles.
const productId = new ProductId("PROD-001");
const inventory = new InventoryItem(productId, 10);

console.log("Inventario inicial:", inventory.getAvailableQuantity());

// Reservamos 4 unidades.
inventory.reserve(4);

console.log("Inventario después de reservar 4:",
    inventory.getAvailableQuantity());

// Intentamos reservar 7 unidades.
// Solo quedan 6, por lo tanto la entidad debe impedir la operación.
try {
    inventory.reserve(7);
} catch (error) {
    console.log("Error esperado:", (error as Error).message);
}