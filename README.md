#  CRUD App with MongoDB

Simple app to create, read, update and delete data from MongoDB

## Table of Contents

* [About](#crud-app-with-mongodb)
* [Required Features](#required-features)
* [Heroku Deployment](#heroku-deployment)
* [Routes Test with Postman](#routes-test-with-postman)
* [Acknowledgements](#acknowledgements)
* [Author](#author)

## Required Features

* App can connect to the database.
* App can create payload { message: String, data: Objects }. 
* App can get the data created.
* App can update the data created.
* App can delete the created data.

## Heroku Deployment
* [https://crudd-app.herokuapp.com/](https://crudd-app.herokuapp.com/)

## Routes Test with Postman
```shell
    {
        "name": "Alabi Tosin Abiodun",
        "email": "alabitosin58@gmail.com",
        "country": "Nigeria"
    }
```
| METHOD | DESCRIPTION                             | ENDPOINTS
| ------ | --------------------------------------- | -------------------------
| GET    | Get all data in the database            | `https://crudd-app.herokuapp.com/api/v1`
| POST   | Store data in the database              | `https://crudd-app.herokuapp.com/api/v1`
| PATCH  | Update data in the database             | `https://crudd-app.herokuapp.com/api/v1/:id`
| DELETE | Delete data from the database           | `https://crudd-app.herokuapp.com/api/v1/:id`

## Acknowledgements

* [Zuri](https://zuri.com/)

## Author

* [Alabi Tosin](https://github.com/alatos2)

