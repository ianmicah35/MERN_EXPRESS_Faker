const express = require ("express");
const app = express();
const port = 8000;
var faker = require("faker");

class User{
    constructor(){
        this.name = `${faker.name.firstName()}, ${faker.name.lastName()}`;
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this.name = faker.company.companyName();
        this.address = `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}, ${faker.address.country()}`
    }
}

app.get("/api", (req, res) => {
    res.json({message: "Hello World"});
});

app.get("/api/users/new", (req,res) => {
    const empi = new User();
    res.json({
        "firstName": empi.name.firstName,
        "lastName": empi.name.lastName,
        "phoneNumber": empi.phone.phoneNumber,
        "email": empi.internet.email,
        "password": empi.internet.password
    });
})

app.get("/api/companies/new", (req,res) => {
    const company = new Company();
    res.json({company: company})
})

app.get("/api/user/company", (req,res) => {
    const user = new User();
    const company = new Company();
    res.json({user: user});
    res.json({company: company})
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );

