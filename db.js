const { Pool } = require("pg");

// PostgreSQL Connection Pool
const marya = new Pool({
  user: "postgres", // Change this
  host: "localhost",
  password: "marya2005", // Change this
  database: "test1", // Change this
  port: 5432, // Default PostgreSQL port
});

marya
  .connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch((err) => console.error("❌ Connection error", err));

module.exports = marya; // Export the pool for use in other files
