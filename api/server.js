
import app from "./app.js";
import { connectDB } from "./config/db.js";
import { createServer } from "http";
import { initializeSocket } from "./socket/socket.server.js";

const httpServer = createServer(app);

initializeSocket(httpServer);

const { DATABASE_URL } = process.env;
const PORT = process.env.PORT || 5001;

httpServer.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectDB();
});
