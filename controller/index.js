const { response } = require("express");
const {
    createTransaction,
    getAllTransactionForCompany
} = require("../model/controller/Transaction");

const { v4 } = require("uuid");

const createNewTransaction = async (req, res) => {
    if (req && req.body) {
        const { companyID, companyName, description, credit, debit, balance } = req.body;

        const dateNow = new Date();
        const transactionID = v4()

        const newTransactionObject = {
            transactionID: transactionID,
            companyID: companyID,
            companyName: companyName,
            description: description,
            createdAt: dateNow.toISOString(),
            credit: credit,
            debit: debit,
            runningBalance: balance
        };

        const createDocument = await createTransaction(newTransactionObject).then((resp) => {
            return resp
        }).catch((error) => {
            return null;
        });

        if (createDocument) {
            res.send({ response: true, transactionID: transactionID });
        } else {
            res.send({ error: true, response: false });
        }


    } else {
        res.send({ error: true, response: false });
    }
}

const getAllTransactionsForCompany = async (req, res) => {
    const companyID = req.query.companyID || "123456";

    const allTransactions = await getAllTransactionForCompany(companyID).then((resp) => {
        return resp
    }).catch((error) => {
        console.error("error - get ", error)
        return []
    });

    console.log("all transactions ", allTransactions);

    res.send({ response: true, transactions: allTransactions })


};

module.exports = {
    createNewTransaction,
    getAllTransactionsForCompany
}