const express = require('express')
const app = express()

app.use(express.json());

// const port = 3000
require("dotenv").config();
const env = process.env;
const port = env.PORT;

// import {callback} from "./src/callback.js";
const callback = require('./src/callback.js');
const promise = require('./src/promise.js');

// console.log(callback);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];

app.get("/users", (req, res) => res.json(users));

app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(port, () => {
    console.log("Server running on port:", process.env.PORT);
    console.log(`Example app listening on port ${env.PORT}`);
    console.log(`Example app listening on port ${port}`);
    console.log(`Example app listening on port http://localhost:3000`);
});

const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 60 }); // TTL 60 วินาที

app.get("/cache", (req, res) => {
    const key = cache.get("key");// ดึงค่าจากแคช
    res.status(200).json(`cache name key value is : ${key}`);
});

app.get("/setcache", (req, res) => {
    console.log(req.query.a);
    cache.set("key", req.query.a);// ตั้งค่าแคช

    const key = cache.get("key");// ดึงค่าจากแคช
    res.status(200).json(`cache name key value is : ${key}`);
});

app.get("/cache_reset", (req, res) => {
    console.log(req.query.a);

    const key_del = cache.del("key");// ลบค่า
    // res.status(200).json(`cache name key value is : ${key_del}`);
    const key = typeof cache.get("key") === 'undefined' ? "no cache" : cache.get("key");// ดึงค่าจากแคช
    res.status(200).json(`cache name key value is : ${key}`);
});