//controller between mysql and the express routes

import query from "./utility";

//prevent SQL injection through the ? feature - native protection in the ? process
async function findAll() {
    //get all employees and must consume the promise
    return await query("SELECT * FROM products", []);
}

// this is the short notation
async function findOne(id) {
    return await query(
        `SELECT * FROM products WHERE ProductID = ?`,
        [id]);
};

// this is the short notation
async function addOne(productsData) {
    return await query(
        `INSERT INTO products SET ?`,
        [productsData]);
};

// this is the short notation
async function updateOne(id, productsData) {
    return await query(
        `UPDATE products SET ? WHERE ProductID = ?`,
        [productsData, id]);
};

// this is the short notation
async function removeOne(id) {
    return await query(
        `DELETE FROM products WHERE ProductID = ?`,
        [id]);
};

export { findAll, findOne, addOne, updateOne, removeOne };