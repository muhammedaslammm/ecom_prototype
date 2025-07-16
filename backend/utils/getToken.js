import jwt from "jsonwebtoken";
const getToken = (userid) => {
  const secretkey = process.env.JWT_SECRET;
  return jwt.sign({ userid }, secretkey);
};

export default getToken;
