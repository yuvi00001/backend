const { TestOne } = require("../schema/Transaction");


const createTransaction = async (dataObject) => {
    try {
        const dbInstance = new TestOne(dataObject);
        const response = await dbInstance.save();

        if (response) {
            return response;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}

const getAllTransactionForCompany = async (companyID) => {
    try {
        const filterQuery = {
            companyID: companyID
        }

        console.log("filter query ", filterQuery)

        const response = await TestOne.find(filterQuery).sort({createdAt: -1 }).lean();
        if (response) {
            return response;
        } else {
            return null;
        }
    } catch (error) {
        console.error("error - get 1 ", error)
        return  null;
    }
}

module.exports = {
    createTransaction,
    getAllTransactionForCompany
}