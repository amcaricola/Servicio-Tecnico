# LOG DE DESARROLLO

## ACTUALIZACIONES REALIZADAS (DESDE VER. 1.0):

23/09/2022

- mejora en la interface de usuario y diseño
- optimizacion de la base de datos, a servidor constante activo
- fitro por ordernes cerradas y abiertas en servicio tecnico
- agregado de pestaña de "servicio de grabado"

28/09/2022

- Se agrego base de Datos de "grabados" a MongoDB
- se agregaron en servidor las rutas para manejar la base de datos de "grabados"
- correccion menor de componentes (Modal y tables)

29/09/2022

- unificacion de contexto a uno solo, se manejan separadas las ordenes solamente. y accion tiene un titulo en base a la pestaña usada.
- correccion de componentes en base al contexto unificado

04/09/2022

- Agregar localstorage para mantener sesion al menos por 5 minutos

05/09/2022

- Agregar "Loading/cargando" al makeCurd.js mientras trata con servidor
- pagina 404

13/10/2022

- filtro de busqueda - buscador (dinamica) en las tablas
- agregada conclusion "RECHAZADO" en servicio tecnico

01/11/2022

- separar reporte de ordenes para ser publicadas a clientes, (deben tener casillas de control de uso interno para digital y fisico - checks).

17/01/2023

- Corregido error "crash" cuando se hacia click derecho al tener modal abierto.

## HOTFIX NECESARIOS

## MEJORAS PARA TOMAR EN CUENTA:

- encabezado de tablas que se adieran a la parte superior para no perder informacion de ellas
- agregar usuario y contraseña con tokens a traves de servidor ( VERIFICAR MOVERLO A NEXT-JS)
- agregar seguridad previa mediante usuario y contraseña
