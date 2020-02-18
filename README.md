# Project Title

Restful Api Node js Payment Gateway

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Clone the Repositorie to local machine

```
git clone git@github.com:andrewagathocleous/paymentGateway.git
```
 
Run Npm

```
npm install
```

### Installing

Create .env file


Add your mongo credentials:
```
MONGODB_URL=mongodb+srv://username:pass@cluster0-sctfy.mongodb.net/test?
```
Add JWT_KEY:

```
JWT_KEY=andrew
```
Choose port:

```
PORT=3000
```


Run the program:

```
npm start
```

Execute the api request you prefer for payments:

* GET '/payments'  -> Fetch Payments list
* GET '/payments/{id}'  -> Fetch Payment by Id
* POST '/payments'  -> Create Payment
* PUT payments/{id}/approve' -> Approve Payment
* PUT payments/{id}/cancel' -> Cancel Payment

Execute the api request you prefer for users:

* POST '/users' -> Create new Users (Body : "name","email","password")
* GET '/users/me' -> View Users Info

## Built With

* [Visual Studio Code] The web framework used
* [Postman] Api Requests

## Versioning

We use [Github] for versioning.

## Authors

* **Andrew Agathocleous**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
