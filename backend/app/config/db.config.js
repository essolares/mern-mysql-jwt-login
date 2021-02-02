module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "edgar123gt",
    DB: "vincheck_dev",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };