import jwt from "jsonwebtoken";

const secret = process.env.NEXT_JWT_SECRET || "secret";

const decodeJWT = (token: string) => {
  try {
    const payload = jwt.verify(token, secret);
    return payload;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default decodeJWT;
