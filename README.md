# Actividad 03 - Diseño de dominio

## Propósito

Esta actividad busca proteger reglas del negocio mediante entidades, objetos de valor, invariantes, casos de uso y contratos de aplicación.

El proyecto trabaja con cuatro contextos relacionados:

- Pedidos
- Inventario
- Ruteo
- Entregas

La solución busca mantener las reglas de cada contexto separadas y evitar que un modelo o una infraestructura externa controle directamente las reglas del negocio.

## Problema de dominio

Los diferentes contextos utilizan conceptos relacionados con la disponibilidad, pero cada uno tiene una responsabilidad diferente:

- **Pedidos:** confirma una compra.
- **Inventario:** controla y reserva unidades disponibles.
- **Ruteo:** estima y determina la viabilidad de una ruta.
- **Entregas:** asigna un repartidor a una entrega.

Por esta razón, no se utiliza una única entidad compartida para representar todos estos conceptos.

## Decisión arquitectónica

Se decidió utilizar un **monolito modular con modelos separados por contexto**.

Cada contexto mantiene sus propias reglas de negocio y utiliza contratos para comunicarse con la aplicación.

La infraestructura implementa los puertos definidos por la aplicación.

Esta decisión permite mantener las reglas de negocio independientes de los detalles de infraestructura y facilita futuros cambios.

## Principales elementos implementados

### Pedidos

- Entidad `Order`
- Identificador `OrderId`
- Caso de uso `ConfirmOrderUseCase`
- Puerto `IOrderRepository`
- Adaptador `InMemoryOrderRepository`

Regla comprobada:

- Un pedido puede pasar de `PENDIENTE` a `CONFIRMADO`.
- Un pedido confirmado no puede confirmarse nuevamente.

### Inventario

- Entidad `InventoryItem`
- Identificador `ProductId`

Reglas comprobadas:

- La cantidad disponible no puede ser negativa.
- No se pueden reservar más unidades de las disponibles.
- La cantidad reservada debe ser mayor que cero.

### Ruteo

- Objeto de valor `RouteEstimate`
- Caso de uso `EstimateRouteUseCase`
- Puerto `IRouteRepository`
- Adaptador `InMemoryRouteRepository`

Reglas comprobadas:

- Una duración negativa no es válida.
- `RouteEstimate` representa si una ruta es viable.

### Entregas

- Entidad `Delivery`
- Objeto de valor `DeliveryAddress`
- Caso de uso `AssignCourierUseCase`
- Puerto `IDeliveryRepository`
- Adaptador `InMemoryDeliveryRepository`

Regla comprobada:

- Una entrega no puede tener dos repartidores asignados.

## Evidencia

La documentación de la decisión se encuentra en:

1. [Problema](docs/actividad-03/01-problema.md)
2. [Actores, necesidades y restricciones](docs/actividad-03/02-actores-necesidades-restricciones.md)
3. [Límites del sistema](docs/actividad-03/03-limites-del-sistema.md)
4. [Alternativas](docs/actividad-03/04-alternativas.md)
5. [Comparación de alternativas](docs/actividad-03/05-comparacion-alternativas.md)
6. [Decisión y trade-off](docs/actividad-03/06-decision-y-trade-off.md)
7. [Comprobación](docs/actividad-03/07-comprobacion.md)

## Pruebas

Las pruebas automatizadas verifican las principales reglas del dominio.

Para ejecutarlas:

```bash
npm test