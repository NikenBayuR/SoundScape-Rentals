const errorHandler = (err, req, res, next) => {
  let status = 500;
  let message = "Internal Server Error";
  console.log(err, "ERROR HANDLER");

  //Handle ErrorSequelize!!
  switch (err.name) {
    case "SequelizeDatabaseError":
      status = 400;
      message = err.errors[0].message;
      break;
    case "SequelizeForeignKeyConstraintError":
      status = 400;
      message = err.errors[0].message;
      break;
    case "SequelizeValidationError":
      status = 400;
      message = err.errors[0].message;
      break;
    case "JsonWebTokenError":
      status = 401;
      message = "Invalid Bearer Token";
      break;
  }

  switch (err.message) {
    case "Unauthorized":
      (status = 401), (message = `Please Login First!!`);
      break;
    case "Email not provided":
      (status = 401), (message = `Email not provided`);
      break;
    case "Password not provided":
      (status = 401), (message = `Password not provided`);
      break;
    case "Login Error":
      (status = 401), (message = `Login Error`);
      break;
    case "RegisterError":
      (status = 401), (message = `RegisterError`);
      break;
    case "AddCategoryError":
      (status = 401), (message = `AddCategoryError`);
      break;
    case "AddPackageError":
      (status = 401), (message = `AddPackageError`);
      break;
    case "Users does not exist":
      (status = 404), (message = `Users does not exist`);
      break;
    case "Categories does not exist":
      (status = 404), (message = `Categories does not exist`);
      break;
    case "Package does not exist":
      (status = 404), (message = `Package does not exist`);
      break;
    case "Not found":
      (status = 404), (message = `Not found`);
      break;

    default:
      break;
  }
  // Package does not exist
  res.status(status).json({ message });
};
module.exports = errorHandler;
