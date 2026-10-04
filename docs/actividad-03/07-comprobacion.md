# 7. Comprobación de la decisión

La decisión de utilizar un monolito modular se comprobará mediante pruebas de las reglas de negocio y mediante la revisión de la separación entre los contextos.

La evidencia no se basará solamente en que el proyecto compile. Se comprobará que cada contexto proteja sus propias reglas y que los casos de uso dependan de contratos definidos por la aplicación.

## 7.1 Comprobación de las reglas de negocio

Cada contexto tiene reglas que se encuentran protegidas dentro de sus entidades u objetos de valor.

### Pedidos

Se comprobará que un pedido:

- Inicie en estado `PENDIENTE`.
- Pueda pasar de `PENDIENTE` a `CONFIRMADO`.
- No pueda confirmarse nuevamente cuando ya se encuentra confirmado.

**Resultado esperado:**

La entidad debe permitir la confirmación de un pedido pendiente y rechazar una segunda confirmación.

Esta regla se encuentra protegida dentro de la entidad `Order`.

### Inventario

Se comprobará que:

- La cantidad disponible no pueda ser negativa.
- La cantidad a reservar sea mayor que cero.
- No se puedan reservar más unidades de las disponibles.

**Resultado esperado:**

Una reserva válida debe disminuir la cantidad disponible y una reserva que supere las unidades existentes debe ser rechazada.

Esta regla se encuentra protegida dentro de la entidad `InventoryItem`.

### Ruteo

Se comprobará que una estimación de ruta no pueda tener una duración negativa y que pueda representar si una ruta es viable.

**Resultado esperado:**

Una duración negativa debe ser rechazada y una estimación válida debe conservar la información de duración y viabilidad.

Esta regla se encuentra protegida dentro del objeto de valor `RouteEstimate`.

### Entregas

Se comprobará que una entrega no pueda tener más de un repartidor asignado.

**Resultado esperado:**

La primera asignación debe realizarse correctamente y una segunda asignación debe ser rechazada.

Esta regla se encuentra protegida dentro de la entidad `Delivery`.

## 7.2 Comprobación de los límites entre contextos

Además de las reglas individuales, se comprobará que los contextos mantengan sus propios límites.

Se verificará que:

- Pedidos mantenga su propia entidad `Order`.
- Inventario mantenga su propia entidad `InventoryItem`.
- Ruteo mantenga su propio objeto de valor `RouteEstimate`.
- Entregas mantenga su propia entidad `Delivery`.
- Un contexto no modifique directamente las entidades internas de otro contexto.
- Los casos de uso trabajen mediante los puertos definidos por la aplicación.
- Los adaptadores de infraestructura implementen los puertos sin trasladar las reglas principales del negocio hacia infraestructura.

## 7.3 Evidencias

La decisión estará respaldada mediante las siguientes evidencias:

1. Entidades de dominio con sus propias reglas.
2. Objetos de valor para representar conceptos específicos del dominio.
3. Pruebas de las reglas e invariantes.
4. Casos de uso que coordinen las operaciones.
5. Interfaces que representen los puertos de la aplicación.
6. Adaptadores que implementen dichos puertos.
7. Estructura de `/src` mostrando la separación de los contextos.
8. Dirección de dependencias desde la aplicación hacia los contratos.
9. Ejecución exitosa de la comprobación de TypeScript.
10. Historial de commits que muestre la evolución de la solución.

## 7.4 Condición para considerar válida la decisión

La decisión se considerará válida si las reglas principales de cada contexto permanecen protegidas y si los límites definidos pueden identificarse claramente en el código.

También debe ser posible identificar qué responsabilidad pertenece a Pedidos, Inventario, Ruteo y Entregas.

Si con el crecimiento del sistema los límites dejan de ser suficientes o mantener la separación requiere una complejidad considerablemente mayor, la decisión arquitectónica deberá revisarse.

## 7.5 Evidencia para la sustentación

Durante la sustentación se mostrarán:

- La estructura de los cuatro contextos.
- Una entidad con una regla de negocio protegida.
- Un objeto de valor.
- Un caso de uso.
- Un puerto y su adaptador.
- Una prueba que demuestre una regla de negocio.
- La dirección de las dependencias.
- La ejecución de la comprobación del proyecto.

Con estas evidencias se podrá demostrar que la decisión arquitectónica no solamente fue planteada en la documentación, sino que también fue aplicada en el código.