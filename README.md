# CaldAR

grupo-t2

## Development
Se agrego `nodemon` para el desarrollo. Para usarlo, ejecutar `npm run dev`.  
  
### Customers API
Request must be made by URL query params  
* Get all customers url: http://localhost:3000/customers
* Get customers by ID url: http://localhost:3000/customers?id=# (example: http://localhost:3000/customers?id=3 returns customer with id=3 or an error)
* Get customers by type url: http://localhost:3000/customers?type='business/particular'
Note: filters cannot be combined. http://localhost:3000/customers?id=2&type='particular' will return an error  
* Delete customer url: http://localhost:3000/customers?id=#
