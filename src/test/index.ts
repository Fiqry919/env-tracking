import { Environment as env } from "..";

console.log(env.get("SECRET_KEY"));

env.set(
    [
        { key: "SECRET_KEY", value: "YOURSECRETKEYGOESHERE" },
        { key: "SECRET_HASH", value: "YOURSECRETHASHGOESHERE" }
    ],
    "./../.env" // path of .env file include filename
);
