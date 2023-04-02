const express = require("express");
const {editProduct,deleteProduct,deleteUser} = require("../controllers/admin.controller");

const adminRouter = express.Router();

adminRouter.patch("/product/:prodID", editProduct);
adminRouter.delete("/product/:prodID",deleteProduct);
adminRouter.delete("/user/:userID",deleteUser);


module.exports = {adminRouter}