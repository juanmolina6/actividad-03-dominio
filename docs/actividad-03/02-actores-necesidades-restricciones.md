# 2. Actores, necesidades y restricciones

## 2.1 Actores

### Cliente

Es la persona que solicita los productos. Su interacción principal consiste en registrar pedidos y consultar el estado de estos durante el proceso.

### Operador de pedidos

Es responsable de gestionar los pedidos registrados, verificar su información y permitir que avancen cuando se hayan cumplido las condiciones necesarias.

### Responsable de inventario

Se encarga de controlar las existencias de los productos y realizar las reservas necesarias para atender los pedidos.

### Responsable de ruteo

Se encarga de evaluar las rutas disponibles y determinar si una ruta cumple las condiciones necesarias para realizar una entrega.

### Responsable de entregas

Gestiona la programación de las entregas y verifica que se cumplan las condiciones necesarias antes de programarlas.

## 2.2 Necesidades de los actores

| Actor | Necesidades principales |
|---|---|
| Cliente | Registrar pedidos, consultar su estado y conocer información de la entrega |
| Operador de pedidos | Consultar pedidos, verificar información y gestionar su avance |
| Responsable de inventario | Consultar existencias y reservar productos sin superar las unidades disponibles |
| Responsable de ruteo | Evaluar rutas y determinar si son viables |
| Responsable de entregas | Consultar pedidos listos y programar entregas cuando existan las condiciones necesarias |

## 2.3 Restricciones

La solución debe cumplir las siguientes restricciones:

1. Cada contexto debe mantener sus propias reglas de negocio.
2. Un contexto no debe modificar directamente las entidades internas de otro contexto.
3. Los contextos deben comunicarse mediante contratos definidos para ese propósito.
4. Las reglas principales del negocio deben estar protegidas por el modelo de dominio.
5. No se debe utilizar una única entidad que concentre la información de Pedidos, Inventario, Ruteo y Entregas.
6. Las reglas importantes deben poder comprobarse mediante pruebas.
7. La solución debe evitar una complejidad arquitectónica que no sea necesaria para el problema planteado.
8. Los cambios realizados en un contexto deben afectar lo menos posible a los demás contextos.