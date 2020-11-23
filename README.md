# CaldAR

grupo-t2

## Development
Se agrego `nodemon` para el desarrollo. Para usarlo, ejecutar `npm run dev`.

### Buildings API
Request must be made by URL query params  
* Get all buildings url: http://localhost:3000/buildings
* Get customers by ID url: http://localhost:3000/buildings?id=# (example: http://localhost:3000/buildings?id=3 returns building with id=3 or an error)
* Delete building url: http://localhost:3000/buildings?id=#