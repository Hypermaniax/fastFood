const apiError = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  if (message === "jwt expired")
    return res.status(400).json({ message: "logout" });
  
  return res.status(statusCode).json({
    succes: false,
    message,
  });
};

module.exports = apiError;
