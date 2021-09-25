const express = require("express");
const app = express();
const port = 8000;
const faker = require("faker");


// req is short for request. deals with all info relating to request sent form client
// res is short for response. deals with sending clienet back response
app.get("/api", (req, res) => {
  res.json({ message: "hello world" });
});

const createtUser = () => ({
  id: faker.datatype.uuid(),
  fistName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phoneNumber: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

const createCompany = () => ({
  id: faker.datatype.uuid(),
  conpamyName: faker.company.companyName(),
  address: {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipcode: faker.address.zipCode(),
    country: faker.address.country(),
  }
});

app.get("/api/users/new", (req, res) => {
  const newUser = createtUser();
  res.json(newUser);
  
});

app.get("/api/companies/new", (req, res) => {
  const newCompany = createCompany();
  res.json(newCompany);
  
});

app.get("/api/user/company", (req, res) => {
  const newUser = createtUser();
  const newCompany = createCompany();
  const userCompany = {
    user: newUser,
    company: newCompany,
  }
  res.json(userCompany);
});

app.listen(port, () => console.log("listening on port", port));
