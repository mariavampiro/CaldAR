# CaldAR
A trainee backend project for Radium Rocket.

## Development
The command `npm run dev` runs [nodemon](https://www.npmjs.com/package/nodemon).

## Endpoints
### Buildings API
| Method | Endpoint | Description
|---|---|---|
| GET | /buildings | Get all buildings |
| GET | /buildings/id | Get building by id |
| POST | /buildings | Add building (all fields required) |
| PUT | /buildings/id | Update building with specific id |
| DELETE | /buildings/id | Delete building by id |

### Customers API
| Method | Endpoint | Description
|---|---|---|
| GET | /customers | Get all customers |
| GET | /customers/id | Get customer by id |
| POST | /customers | Add customer (all fields required) |
| PUT | /customers/id | Update customer with specific id |
| DELETE | /customers/id | Delete customer by id |

### Technicians
| Method | Endpoint | Description
|---|---|---|
|GET| /technicians?type=id | Gets all technicians or filter by type ID |
|POST| /technicians | Create new technician |
|GET| /technicians/:id | Get technician by id |
|PUT| /technicians/:id | Update technician by id |
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
|GET| /boilers?typeId=id&warehouse=id | Gets all boilers, able to filter by boiler typeId or warehouse_id |
|POST| /boilers | Create a boiler |
|GET| /boilers/:id | Get boiler by id |
|PUT| /boilers/:id | Update boiler by id |
|DELETE| /boilers/:id | Delete boiler by id |

### Boilers-types
| Method | Endpoint | Description
|---|---|---|
| GET | /boilersTypes | Get all boilers-types |
| GET | /boilersTypes/typeId | Get boilers-types by typeId |
| POST | /boilersTypes | Add boilersType (all fields required) |
| PUT | /boilersTypes/typeId | Update boilers-type with specific typeId |
| DELETE | /boilersTypes/typeId | Delete building by typeId |