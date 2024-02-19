import mysql from "mysql2";
import config from "../config";

// four config info pieces here to connect from .env
const connection = mysql.createPool(config.mysql);

/**
 * 
 * @param {string} qryString SQL query or the database
 * @param {array} values parameters needed for the SQL
 * @returns Asynch returns either an error, or the response from database
 */
//return an asynch promise
function query(qryString, values) 
  {
   return new Promise((resolve, reject) => {
     connection.query(qryString, values, (err, results) => {
       if (err) reject(err);
       resolve(results);
     });
   });
  }

export default query;