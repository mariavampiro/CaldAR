# CaldAR
A trainee backend project for Radium Rocket.

## Development
The command `npm run dev` runs [nodemon](https://www.npmjs.com/package/nodemon).

## Endpoints
### Buildings API
Request must be made by URL query params.
| Method | Endpoint | Description
|---|---|---|
| GET | /buildings | Get all buildings |
| GET | /buildings?id=# | Get building by ID |
| DELETE | /buildings?id=# | Delete building by ID |


### Customers API
Request must be made by URL query params  
| Method | Endpoint | Description
|---|---|---|
| GET | /customers | Get all customers |
| GET | /customers?id=# | Get customer by ID, if not found returns an error |
| GET | /customers?type='business/particular' | Get customers by type |
| DELETE | /customers?id=# | Delete customer by ID |

**Note**: filters cannot be combined. `http://localhost:3000/customers?id=2&type='particular'` will return an error.

### Technicians
| Method | Endpoint | Description
|---|---|---|
|GET| /technicians | Gets all technicians from DB |
|GET| /technicians?type=id | Gets all tecnicians that includes type id |
|GET| /technicians/:id | Get technician by id |
|DELETE| /technicians/:id | Delete technician by id |

### Appointments
| Method | Endpoint | Description
|---|---|---|
|GET| /appointments?boiler=id&building=id | Gets all appointments, able to filter by boiler or building id |
|POST| /appointments | Create an appointments |
|GET| /appointments/:id | Get appointment by id |
|PUT| /appointments/:id | Update appointment by id |
|DELETE| /appointments/:id | Delete appointment by id |

### Boilers
| Method | Endpoint | Description
|---|---|---|
|GET| /boilers | Gets all boiles from DB |
|GET| /boilers?typeId=id&warehouse=id | Filter all boilers by boiler typeId and warehouse_id |
|GET| /boilers/:id | Get boiler by id |
|DELETE| /boilers/:id | Delete boiler by id |
