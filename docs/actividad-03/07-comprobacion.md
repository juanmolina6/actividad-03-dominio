# 7. Comprobación de la decisión

La decisión de utilizar un monolito modular se comprobará mediante pruebas de las reglas de negocio y verificaciones de los límites definidos entre los contextos.

La evidencia no se basará solamente en que la aplicación pueda ejecutarse. Se comprobará que cada contexto protege sus propias reglas y que la comunicación entre ellos respeta los contratos establecidos.

## 7.1 Comprobación de las reglas de negocio

Cada contexto tendrá reglas que deberán cumplirse independientemente de la forma en que sea utilizado el sistema.

### Inventario

Se comprobará que una reserva no pueda superar la cantidad disponible de un producto.

**Resultado esperado:**

Una solicitud de reserva que supere las unidades disponibles debe ser rechazada.

### Pedidos

Se comprobará que un pedido no pueda avanzar a preparación mientras existan productos pendientes de reserva.

**Resultado esperado:**

El cambio de estado debe ser rechazado mientras no se hayan cumplido las condiciones necesarias.

### Ruteo

Se comprobará que una ruta que supere el tiempo máximo permitido no pueda ser considerada viable.

**Resultado esperado:**

La ruta debe ser rechazada como no viable.

### Entregas

Se comprobará que una entrega solamente pueda programarse cuando el pedido se encuentre listo y exista una ruta viable.

**Resultado esperado:**

La programación debe ser rechazada cuando alguna de estas condiciones no se cumpla.

## 7.2 Comprobación de los límites entre contextos

Además de las reglas individuales, se comprobará que los contextos mantengan sus límites.

Se verificará que:

- Pedidos no acceda directamente a las entidades internas de Inventario.
- Inventario no modifique directamente las entidades internas de Pedidos.
- Ruteo no modifique directamente las entidades internas de Entregas.
- Entregas utilice contratos para obtener la información necesaria de otros contextos.
- Los casos de uso coordinen las operaciones sin contener directamente las reglas internas de otros contextos.

## 7.3 Evidencias

La decisión será respaldada mediante las siguientes evidencias:

1. Entidades de dominio con sus propias reglas.
2. Objetos de valor para representar conceptos específicos del dominio.
3. Pruebas de las invariantes.
4. Casos de uso que coordinen las operaciones.
5. Interfaces que representen los puertos de la aplicación.
6. Adaptadores que implementen dichos puertos.
7. Estructura de `/src` mostrando la separación de los contextos.
8. Diagrama de dependencias entre las capas y contextos.
9. Ejecución exitosa de las pruebas.
10. Historial de commits que muestre la evolución de la solución.

## 7.4 Condición para considerar válida la decisión

La decisión se considerará válida si las pruebas demuestran que las reglas de negocio se mantienen protegidas y que los contextos pueden evolucionar sin acceder directamente a las entidades internas de los demás.

También deberá ser posible identificar claramente qué responsabilidad pertenece a Pedidos, Inventario, Ruteo y Entregas.

Si las pruebas muestran que los contextos dependen directamente de las implementaciones internas de otros o que mantener los límites genera una complejidad que impide evolucionar el sistema, la decisión arquitectónica deberá revisarse.

## 7.5 Evidencia para la sustentación

Durante la sustentación se mostrarán:

- La estructura de los contextos.
- Una entidad con una regla de negocio protegida.
- Un objeto de valor.
- Un caso de uso.
- Un puerto y su adaptador.
- Una prueba que demuestre una invariante.
- El diagrama de dependencias.
- La ejecución de las pruebas.

Con estas evidencias se podrá demostrar que la decisión arquitectónica no solamente fue planteada en la documentación, sino que también fue aplicada y comprobada en el código.