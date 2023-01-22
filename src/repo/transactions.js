const postgreDb = require("../config/db");

const create = (body) => {
  return new Promise((resolve, reject) => {
    const { product, userid } = body;
    const queryInsert = "insert into transactions(userid,total) values($1,$2)";
    const productArray = new Function("return" + product + "")();
    productArray.forEach((listProduct) => {
      postgreDb.query(
        queryInsert,
        [userid, listProduct.total],
        (err, result) => {
          if (err) {
            console.log(err);
            reject({ code: 400, msg: "Internal Server Error" });
          }
          resolve({ code: 200, msg: "Transaction Success" });
        }
      );
    });
  });
};

const listTransactions = () => {
  return new Promise((resolve, reject) => {
    const queryList =
      'select t.id, u."name"as name, t.total , t."date" as date from users u left join transactions t on t.userid = u.id order by t."date" desc';
    postgreDb.query(queryList, (err, result) => {
      if (err) {
        console.log(err.message);
        reject({ code: 400, msg: "Internal Server Error" });
      }
      if (result.rowCount === 0) {
        reject({ code: 404, msg: "Transactions Not Found" });
      }
      resolve({ code: 200, data: result.rows });
    });
  });
};

const listTransactionsUser = (params) => {
  return new Promise((resolve, reject) => {
    const queryList =
      'select t.id, u."name"as name, t.total , t."date" as date from users u left join transactions t on t.userid = u.id where u.id = $1 order by t."date" desc';
    postgreDb.query(queryList, [params.id], (err, result) => {
      if (err) {
        console.log(err.message);
        reject({ code: 400, msg: "Internal Server Error" });
      }
      if (result.rowCount === 0) {
        reject({ code: 404, msg: "Transactions Not Found" });
      }
      resolve({ code: 200, data: result.rows });
    });
  });
};

module.exports = { create, listTransactions, listTransactionsUser };
