import express from "express";
import cors from "cors"
import { env } from "./src/config/env";
import { clerkMiddleware } from '@clerk/express'

const app = express();

app.use(cors())
app.use(clerkMiddleware()); // auth obj will be attached to the req
app.use(express.json()); // parses JSON request bodies.
app.use(express.urlencoded({ extended: true })); // parses form data (like HTML forms).

app.get("/api/health", (req, res) => {
  res.json({
    message: "Welcome to Productify API - Powered by PostgreSQL, Drizzle ORM & Clerk Auth",
    endpoints: {
      users: "/api/users",
      products: "/api/products",
      comments: "/api/comments",
    },
  });
});

app.listen(env.PORT, () => console.log("Sever running on port:", env.PORT));
