# 4. Alternativas de solución

A partir del problema identificado y de los límites definidos para Pedidos, Inventario, Ruteo y Entregas, se consideran dos alternativas principales para organizar la solución.

## 4.1 Alternativa A: Monolito modular

La primera alternativa consiste en construir una única aplicación organizada internamente mediante módulos independientes para cada contexto del dominio.

La estructura conceptual sería:

- Módulo de Pedidos.
- Módulo de Inventario.
- Módulo de Ruteo.
- Módulo de Entregas.

Aunque los módulos se ejecuten dentro de la misma aplicación, cada uno mantendría sus propias entidades, reglas de negocio y contratos. La comunicación entre módulos se realizaría mediante interfaces o contratos definidos por la aplicación, evitando que un módulo acceda directamente a las entidades internas de otro.

Esta alternativa busca mantener separados los límites del dominio sin introducir desde el inicio la complejidad de una arquitectura distribuida.

### Características

- Una única aplicación.
- Módulos separados por responsabilidad.
- Modelos de dominio propios para cada contexto.
- Contratos para la comunicación entre módulos.
- Una infraestructura común para la aplicación.
- Posibilidad de evolucionar los módulos de manera independiente dentro de la misma aplicación.

### Principal ventaja

Permite establecer límites claros entre los contextos manteniendo una solución relativamente sencilla de desarrollar, probar, desplegar y operar.

### Principal desventaja

Los módulos continúan formando parte de una misma aplicación, por lo que existe una dependencia operacional entre ellos y su despliegue se realiza de manera conjunta.

---

## 4.2 Alternativa B: Microservicios independientes

La segunda alternativa consiste en convertir cada contexto en un servicio independiente.

La estructura conceptual sería:

- Servicio de Pedidos.
- Servicio de Inventario.
- Servicio de Ruteo.
- Servicio de Entregas.

Cada servicio tendría su propio modelo, reglas de negocio e infraestructura. La comunicación entre los servicios se realizaría mediante contratos de comunicación definidos para cada interacción.

Esta alternativa busca conseguir un mayor nivel de independencia entre los contextos y permitir que cada servicio pueda evolucionar y desplegarse de forma separada.

### Características

- Servicios independientes por contexto.
- Modelos de dominio separados.
- Contratos de comunicación entre servicios.
- Despliegue independiente.
- Infraestructura potencialmente independiente para cada servicio.
- Mayor aislamiento entre los contextos.

### Principal ventaja

Permite que cada contexto pueda evolucionar, desplegarse y escalarse de manera independiente cuando las necesidades del sistema lo justifiquen.

### Principal desventaja

Introduce mayor complejidad técnica y operacional debido a la comunicación entre servicios, el despliegue distribuido, el monitoreo y el manejo de posibles fallos de comunicación.

---

## 4.3 Resumen de las alternativas

| Aspecto | Monolito modular | Microservicios |
|---|---|---|
| Organización | Módulos dentro de una aplicación | Servicios independientes |
| Separación de contextos | Interna mediante módulos | Física mediante servicios |
| Despliegue | Conjunto | Independiente |
| Comunicación | Contratos entre módulos | Comunicación entre servicios |
| Complejidad operacional | Menor | Mayor |
| Independencia de los contextos | Moderada | Alta |
| Escalabilidad independiente | Limitada | Alta |
| Complejidad inicial | Menor | Mayor |