# 3. Límites del sistema

## 3.1 Alcance general

El sistema comprende la gestión de los procesos relacionados con un pedido desde su registro hasta la programación de su entrega. Para evitar que diferentes responsabilidades se mezclen, el dominio se divide en cuatro contextos: Pedidos, Inventario, Ruteo y Entregas.

Cada contexto tiene una responsabilidad específica y mantiene sus propias reglas de negocio. La información interna de un contexto no debe ser modificada directamente por otro.

## 3.2 Contexto de Pedidos

### Dentro del contexto

- Creación y registro de pedidos.
- Información general del pedido.
- Productos incluidos en el pedido.
- Estado del pedido.
- Validación de las condiciones necesarias para avanzar el pedido.

### Fuera del contexto

- Control de las cantidades disponibles en inventario.
- Reserva física de productos.
- Cálculo o evaluación de rutas.
- Programación de la entrega.

Pedidos puede solicitar información o acciones de otros contextos mediante contratos, pero no debe acceder directamente a sus entidades internas.

## 3.3 Contexto de Inventario

### Dentro del contexto

- Productos disponibles.
- Cantidades existentes.
- Reservas de productos.
- Validación de disponibilidad para realizar una reserva.
- Liberación o actualización de reservas.

### Fuera del contexto

- Gestión completa de los pedidos.
- Decisión sobre el estado general de un pedido.
- Cálculo de rutas.
- Programación de entregas.

Inventario es responsable de determinar si puede reservar las unidades solicitadas de un producto.

## 3.4 Contexto de Ruteo

### Dentro del contexto

- Evaluación de rutas.
- Estimación de distancia y tiempo.
- Determinación de viabilidad de una ruta.
- Información necesaria para planificar una entrega.

### Fuera del contexto

- Gestión de pedidos.
- Control de existencias.
- Reserva de productos.
- Programación definitiva de una entrega.

Ruteo proporciona información relacionada con la viabilidad de una ruta, pero no modifica directamente los demás contextos.

## 3.5 Contexto de Entregas

### Dentro del contexto

- Registro de entregas.
- Información necesaria para programar una entrega.
- Estado de la entrega.
- Validación de las condiciones necesarias para programarla.

### Fuera del contexto

- Control de inventario.
- Reserva de productos.
- Modificación directa de pedidos.
- Cálculo interno de rutas.

Entregas puede consultar mediante contratos si un pedido cumple las condiciones necesarias y si existe una ruta viable, pero mantiene su propia lógica para programar y gestionar la entrega.

## 3.6 Elementos externos al sistema

Los siguientes elementos no forman parte de los cuatro contextos principales:

- Cliente que utiliza el sistema para registrar o consultar pedidos.
- Servicios externos de mapas o cálculo de rutas que podrían utilizarse para obtener información geográfica.
- Servicios externos de notificaciones.
- Infraestructura utilizada para ejecutar la aplicación.

Estos elementos pueden interactuar con el sistema mediante adaptadores, pero no deben contener las reglas principales del dominio.

## 3.7 Regla general de los límites

Cada contexto es responsable de proteger sus propias reglas de negocio. La comunicación entre contextos debe realizarse mediante contratos definidos para ese propósito, evitando compartir directamente sus entidades internas.

De esta manera, un cambio en la forma en que Inventario administra las reservas no debería obligar a modificar directamente las entidades internas de Pedidos, Ruteo o Entregas.