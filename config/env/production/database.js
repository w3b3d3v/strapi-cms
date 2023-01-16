module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      socketPath: `/cloudsql/${env("INSTANCE_CONNECTION_NAME")}`, // for a PostgreSQL database
      // ⚠️ For a MySQL database, use socketPath: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}` instead
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USER"),
      password: env("DATABASE_PASSWORD"),
    },
  },
});
