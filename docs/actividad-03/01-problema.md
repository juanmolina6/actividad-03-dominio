# 1. Definición del problema

Una empresa necesita gestionar el proceso de sus pedidos desde que son registrados hasta que pueden ser entregados al cliente. En este proceso participan diferentes responsabilidades relacionadas con los pedidos, las existencias de productos, la planificación de rutas y la gestión de entregas.

El problema aparece cuando estas responsabilidades se mezclan y conceptos similares se interpretan de la misma manera en todos los procesos. Por ejemplo, que un producto esté disponible para Inventario significa que existen unidades que pueden reservarse, mientras que una ruta disponible para Ruteo depende de que pueda realizarse bajo determinadas condiciones. De la misma manera, una entrega puede estar en condiciones de programarse solamente cuando se cumplen las condiciones necesarias del pedido y de la ruta.

Si todos estos conceptos se manejan como si fueran parte de una misma regla, pueden producirse inconsistencias, como confirmar pedidos sin unidades suficientes, programar entregas para rutas que no son viables o permitir que un proceso modifique directamente información que pertenece a otra responsabilidad.

Por lo tanto, el problema consiste en organizar el proceso de pedidos, inventario, ruteo y entregas de manera que cada responsabilidad pueda mantener sus propias reglas de negocio y que la coordinación entre ellas no genere dependencias innecesarias.