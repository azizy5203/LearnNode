import { decode } from "jsonwebtoken";
function isAdmin(req, res, next) {
  const token = req.headers.authorization.replace("Bearer ", "");
  if (!token) return res.status(401).send({ error: "not authorized" });
  const decoded = decode(token);
  if (!decoded?.IsAdmin)
    return res.status(401).send({ error: "not authorized" });
  next();
}
export { isAdmin };
