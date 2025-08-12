import app from "./app.js";
import express from "express";
import { connectDB } from "./config/db.js";
import { createServer } from "http";
import { initializeSocket } from "./socket/socket.server.js";
import path from "path";

const httpServer = createServer(app);

initializeSocket(httpServer);

const PORT = process.env.PORT || 5001;

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

httpServer.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectDB();
});
