// import express from "express";
const express = require("express");
import userRoutes from "./routes/user";

const app = express();
app.use(userRoutes);
app.listen(3000, () => console.log("Vida longa e próspera"));
