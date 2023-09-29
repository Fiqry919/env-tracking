import env from "..";

console.log(env.get("SECRET_KEY"));

env.set(
    [
        { key: "SECRET_KEY", value: "YOUR_SECRET_KEY" },
        { key: "SECRET_HASH", value: "YOUR_SECRET_HASH" }
    ], "./../.env" // path of .env file include filename
);
