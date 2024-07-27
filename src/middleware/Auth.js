import { decode } from "jsonwebtoken";
function isAdmin(req, res, next) {
  const token = req.headers.authorization.replace("Bearer ", "");
  if (!token) return res.status(401).send({ error: "not authorized" });
  const decoded = decode(token);
  if (decoded.IsAdmin == false)
    return res.status(401).send({ error: "not authorized for admin access" });
  next();
}
export { isAdmin };
