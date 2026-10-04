# 5. Comparación de alternativas

Las alternativas propuestas se comparan utilizando cuatro criterios: costos, riesgos, calidad y facilidad de cambio. Estos criterios permiten evaluar no solamente la complejidad técnica de cada opción, sino también su impacto sobre el mantenimiento y evolución del sistema.

## 5.1 Comparación general

| Criterio | Monolito modular | Microservicios independientes |
|---|---|---|
| Costos | Menores costos iniciales de desarrollo, infraestructura y operación | Mayores costos debido a múltiples servicios, infraestructura y herramientas de operación |
| Riesgos | Menor riesgo operacional al existir una única aplicación, aunque un fallo puede afectar a varios módulos | Mayor riesgo de fallos de comunicación, problemas de configuración y complejidad distribuida |
| Calidad | Puede ofrecer buena calidad si los límites de los módulos y las reglas de negocio están correctamente protegidos | Permite mayor aislamiento entre contextos, pero requiere controles adicionales para mantener la calidad entre servicios |
| Facilidad de cambio | Los cambios dentro de un módulo pueden ser sencillos, pero el despliegue de la aplicación es conjunto | Cada servicio puede evolucionar y desplegarse de forma independiente, aunque los contratos entre servicios deben mantenerse compatibles |

## 5.2 Costos

### Monolito modular

Presenta menores costos iniciales porque los cuatro contextos forman parte de una misma aplicación. Se necesita una infraestructura más sencilla y el despliegue no requiere administrar varios servicios independientes.

También reduce el costo de operación, ya que no es necesario mantener desde el inicio diferentes mecanismos de comunicación, monitoreo y despliegue para cada contexto.

### Microservicios independientes

Presentan mayores costos iniciales porque cada servicio requiere configuración, despliegue, monitoreo y mantenimiento. También pueden ser necesarios mecanismos adicionales para la comunicación entre servicios y para controlar los fallos de red.

Para el escenario planteado, estos costos podrían representar una complejidad mayor que la necesaria.

## 5.3 Riesgos

### Monolito modular

El principal riesgo es que los límites definidos entre módulos no sean respetados y con el tiempo los módulos terminen dependiendo directamente de las implementaciones internas de otros.

También existe un riesgo operacional: un problema en la aplicación puede afectar a varios módulos al encontrarse dentro del mismo proceso.

Este riesgo puede reducirse manteniendo entidades separadas, contratos claros y pruebas que protejan las reglas de cada contexto.

### Microservicios independientes

Los principales riesgos están relacionados con la distribución. Una operación que involucre varios contextos puede depender de diferentes servicios y de la comunicación entre ellos.

Esto introduce posibles problemas como fallos de comunicación, respuestas tardías, inconsistencias temporales y mayor dificultad para diagnosticar errores.

## 5.4 Calidad

### Monolito modular

La calidad puede mantenerse mediante una separación clara de responsabilidades, modelos de dominio independientes, contratos entre módulos y pruebas de las reglas de negocio.

La arquitectura no garantiza la calidad por sí misma; depende de que los límites definidos sean respetados durante el desarrollo.

### Microservicios independientes

El aislamiento físico de los servicios puede ayudar a mantener separadas las responsabilidades. Sin embargo, la calidad global depende también de que los contratos entre servicios sean claros, compatibles y correctamente probados.

La distribución no elimina la necesidad de proteger las reglas de negocio.

## 5.5 Facilidad de cambio

### Monolito modular

Los cambios relacionados con un contexto pueden realizarse dentro de su propio módulo sin modificar directamente las entidades de los demás. Esto facilita el mantenimiento mientras los contratos se mantengan estables.

Sin embargo, los cambios deben desplegarse como parte de la aplicación completa.

### Microservicios independientes

Permiten que cada contexto pueda evolucionar y desplegarse de forma independiente. Esto puede ser una ventaja cuando existen diferentes necesidades de escalabilidad o ciclos de cambio.

El costo es que los cambios que afectan la comunicación entre servicios requieren mayor coordinación para mantener la compatibilidad de los contratos.

## 5.6 Matriz de valoración

Para facilitar la comparación se utiliza una escala de 1 a 5, donde 1 representa una condición menos favorable y 5 una condición más favorable.

| Criterio | Monolito modular | Microservicios |
|---|---:|---:|
| Costos | 5 | 2 |
| Riesgos operacionales | 4 | 2 |
| Calidad y separación de responsabilidades | 4 | 5 |
| Facilidad de cambio | 4 | 5 |
| **Total orientativo** | **17** | **14** |

La puntuación no representa una medición absoluta. Sirve como apoyo para visualizar cómo las características del escenario afectan la decisión.

El monolito modular obtiene una valoración superior principalmente por sus menores costos y riesgos operacionales para el contexto planteado. Los microservicios presentan ventajas importantes en independencia y facilidad de despliegue, pero requieren una complejidad que no resulta necesaria en esta etapa del sistema.

## 5.7 Resultado de la comparación

La comparación muestra que ambas alternativas pueden resolver el problema, pero presentan diferentes costos y riesgos.

El monolito modular permite mantener separados los contextos y proteger sus reglas sin introducir desde el inicio la complejidad de una arquitectura distribuida.

Los microservicios ofrecen mayor independencia entre contextos, pero su costo operacional y la complejidad de comunicación representan una desventaja para el escenario actual.

La decisión definitiva se establecerá en el siguiente punto, considerando también el trade-off que implica aceptar las limitaciones de la alternativa seleccionada.