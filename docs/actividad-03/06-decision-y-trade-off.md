# 6. Decisión arquitectónica y trade-off

## 6.1 Decisión

Después de comparar las alternativas propuestas, se decide utilizar un **monolito modular** como arquitectura para la solución.

La aplicación estará organizada en cuatro contextos principales:

- Pedidos.
- Inventario.
- Ruteo.
- Entregas.

Aunque los contextos estarán dentro de una misma aplicación, cada uno mantendrá sus propias entidades, objetos de valor, reglas de negocio y casos de uso.

La comunicación entre los contextos se realizará mediante contratos definidos por la aplicación. Un contexto no podrá modificar directamente las entidades internas de otro contexto.

La decisión busca mantener una separación clara de las responsabilidades del dominio sin introducir desde el inicio la complejidad operacional propia de una arquitectura distribuida.

## 6.2 Razones de la decisión

La decisión se basa principalmente en las características del escenario actual.

El sistema necesita separar las reglas de negocio de Pedidos, Inventario, Ruteo y Entregas, pero no presenta actualmente una necesidad que justifique administrar cuatro servicios independientes.

El monolito modular permite establecer límites claros entre los contextos y mantener sus reglas separadas, mientras conserva una infraestructura y un proceso de despliegue más sencillo.

También permite que la solución pueda evolucionar posteriormente. Si alguno de los contextos adquiere necesidades que justifiquen una separación física, los límites y contratos definidos desde el inicio pueden facilitar una futura extracción del módulo.

## 6.3 Trade-off

La decisión implica aceptar una menor independencia de despliegue y escalabilidad individual a cambio de reducir la complejidad, los costos y los riesgos operacionales.

### Lo que se obtiene

- Menor complejidad de infraestructura.
- Menores costos iniciales.
- Despliegue más sencillo.
- Comunicación más sencilla entre los contextos.
- Menor complejidad operacional.
- Separación de las reglas de negocio mediante límites modulares.

### Lo que se sacrifica

- Los contextos no pueden desplegarse de forma independiente.
- La aplicación se escala como una unidad inicialmente.
- Un problema grave en la aplicación puede afectar a varios contextos.
- La separación física entre contextos no existe en esta etapa.

## 6.4 Condición que podría hacer cambiar la decisión

La decisión deberá revisarse si las necesidades del sistema cambian significativamente.

Algunas condiciones que podrían justificar evaluar nuevamente una arquitectura distribuida son:

- Un contexto necesita escalar de manera muy diferente a los demás.
- Un contexto requiere un ciclo de despliegue independiente.
- Los equipos de desarrollo necesitan trabajar con una independencia mayor.
- Los requisitos de disponibilidad de un contexto son diferentes a los del resto.
- El crecimiento del sistema hace que la infraestructura compartida se convierta en una limitación.

Por lo tanto, la decisión no se considera permanente. Se considera adecuada para las condiciones actuales del problema y podrá revisarse cuando aparezcan evidencias que justifiquen asumir la complejidad adicional.

## 6.5 Principio de diseño adoptado

La decisión se resume en el siguiente principio:

> Mantener separados los modelos y reglas de cada contexto dentro de una misma aplicación, comunicándolos mediante contratos y evitando dependencias directas sobre las entidades internas de otros contextos.

De esta manera, la arquitectura busca proteger el dominio antes que introducir complejidad tecnológica innecesaria.