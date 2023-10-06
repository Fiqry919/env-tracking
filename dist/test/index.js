"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
console.log(__1.default.get("SECRET_KEY"));
__1.default.set([
    { key: "SECRET_KEY", value: "YOUR_SECRET_KEY" },
    { key: "SECRET_HASH", value: "YOUR_SECRET_HASH" }
], "./../.env" // path of .env file include filename
);
