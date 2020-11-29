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
| GET | /customers/id | Get customer by id |
| POST | /customers | Add customer (all fields required) |
| PUT | /customers/id | Update customer with specified id |
| DELETE | /customers/id | Delete customer by id |

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
|GET| /appointments | Gets all appointments from DB |
|GET| /appointments?boiler=id&building=id | Gets all appointments by boiler or building id |
|GET| /appointments/:id | Get appointment by id |
|DELETE| /appointments/:id | Delete appointment by id |

### Boilers
| Method | Endpoint | Description
|---|---|---|
|GET| /boilers | Gets all boiles from DB |
|GET| /boilers?typeId=id&warehouse=id | Filter all boilers by boiler typeId and warehouse_id |
|GET| /boilers/:id | Get boiler by id |
|DELETE| /boilers/:id | Delete boiler by id |
