

const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  companyID: {
    type: String,
    required: true
  },
  transactionID: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: String,
  },
  description: {
    type: String,
  },
  credit: {
    type: Number
  },
  debit: {
    type: Number
  },
  runningBalance: {
    type: Number
  }
});

module.exports = {
  TestOne: mongoose.model("testone", transactionSchema),
};
