const express = require("express");


const {
    createNewTransaction,
    getAllTransactionsForCompany
} = require("../controller");

const appRoutes = (router) => {
    router.post("/create", createNewTransaction);

    router.get("/get-all", getAllTransactionsForCompany);
}

module.exports = { appRoutes }