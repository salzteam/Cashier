const postgreDb = require("../config/db");

const listUser = () => {
  return new Promise((resolve, reject) => {
    const query = "select * from users";
    postgreDb.query(query, (err, response) => {
      if (err) {
        console.log(err);
        reject({ code: "400", msg: "Internal Server Error" });
      }
      console.log(response.rows);
      resolve({ code: 200, msg: response.rows });
    });
  });
};

module.exports = { listUser };
