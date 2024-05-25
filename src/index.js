import http from "http";
import chalk from "chalk";
import { faker } from "@faker-js/faker";
import os from "os";
import crypto from "crypto";

import url from "url";
import path from "path";
import fs from "fs/promises";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const users = Array.from({ length: 10 }, (_, index) => {
  return {
    id: index,
    name: faker.person.firstName(),
    email: faker.internet.email(),
    job: faker.company.buzzAdjective(),
  };
});
const port = process.env.PORT || 3333;
const app = http.createServer(async (req, res) => {
  console.log(chalk.white.bgBlue.bold(`[ ${req.method} ]`));
  if (req.method == "POST") userHandler(req, res);
  else {
    if (req.url.includes("user")) {
      const userId = req.url.split("/").slice(-1)[0];
      if (userId) res.writeHead(200, "Content-Type", "text/json");
      res.end(
        JSON.stringify(users.find((user) => user.id == parseInt(userId)))
      );
    } else {
      const htmlFile = path.join(__dirname, "index.html");
      const data = await fs.readFile(htmlFile);
      res.writeHead(200, { "content-type": "text/html" });
      // res.write(data);
      res.end(data);
    }
  }
});

const userHandler = (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    let user = null;
    user = JSON.parse(body);
    console.log("🚀 ~ req.on ~ user:", user);
    res.writeHead(200, "Content-Type", "text/html");
    res.end(`<h1>User ${user?.name} Added</h1>`);
  });
};

app.listen(port, () => {
  console.log(chalk.magenta.bold(`[ RUNNIG ] ${port}`));
});

// const urlObj = new URL("https://www.google.com/query?q=chalk+npm");
// const urlParams = new URLSearchParams(urlObj.search);
// console.log(urlObj.searchParams.get("q"));

// const hash = crypto.createHash("sha256");

// hash.update("123456");
// console.log(hash.digest("hex"));

// crypto.randomBytes(16, (err, buffer) => {
//   if (err) console.error("err", err);
//   console.log(buffer.toString("hex"));
// });

const algo = "aes-256-cbc";

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algo, key, iv);
let encryptedText = cipher.update("Plain Text MSG", "utf-8", "hex");
encryptedText += cipher.final("hex");
console.log("🚀 ~ encryptedText:", encryptedText);

const decipher = crypto.createDecipheriv(algo, key, iv);
let plainText = decipher.update(encryptedText, "hex", "utf-8");
plainText += decipher.final("utf-8");
console.log("🚀 ~ plainText:", plainText);
