
import app from "./app.js";
import { connectDB } from "./config/db.js";

const { DATABASE_URL } = process.env;
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectDB();
});
