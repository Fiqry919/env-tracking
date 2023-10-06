"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dotenv = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = require("path");
const fs_1 = require("fs");
exports.dotenv = dotenv_1.default.config();
class Environment {
    constructor() {
        this.instance = this.constructor;
    }
    /**
     * Decode .env file to object
     * @param x string .env file
     * @returns Decode .env file
     */
    static decode(x) {
        const r = {};
        const ls = x.toString().split('\n');
        for (const l of ls) {
            const s = l.split('=');
            if (s && s.length > 1) {
                const k = s[0].trim();
                const v = s[1].trim();
                r[k] = v;
            }
            else {
                const k = s[0].trim();
                r[k] = false;
            }
        }
        return r;
    }
    /**
     * Encode from object to .env file
     * @param x object from decode .env file
     * @returns .env
     */
    static encode(x) {
        let s = "";
        for (const [k, v] of Object.entries(x)) {
            if (k) {
                const l = v ? `${k}=${String(v)}` : k + "=";
                s += l + '\n';
            }
        }
        return s;
    }
    /**
     * Get value from .env file
     * @param key key of .env
     * @returns any
     */
    static get(key) { return process.env[key.toUpperCase()]; }
    /**
     * Get value from .env file
     * @param key key of .env
     * @returns any
     */
    get(key) { return this.instance.get(key); }
    /**
     * Create or update value from .env
     * @param e array object
     * @param path directory with filename of .env file
     * @example
     * ```js
     * Environment.set([
     *      { key: "KEY", value: "VALUE" },
     *      { key: "KEY_2", value: "VALUE_2" },
     * ], "../.env")
     * ```
     */
    static set(e, path) {
        const d = (0, path_1.resolve)(__dirname, path);
        (0, fs_1.readFile)(d, 'utf8', (x, y) => {
            if (x) {
                console.error(x.message);
                return;
            }
            const p = this.decode(y);
            e.forEach((f) => {
                if (f.key && f.value) {
                    p[f.key] = f.value;
                }
            });
            (0, fs_1.writeFileSync)(d, this.encode(p));
        });
    }
    /**
     * Create or update value from .env
     * @param e array object
     * @param path directory with filename of .env file
     * @example
     * ```js
     * Environment.set([
     *      { key: "KEY", value: "VALUE" },
     *      { key: "KEY_2", value: "VALUE_2" },
     * ], "../.env")
     * ```
     */
    set(e, path) { return this.instance.set(e, path); }
}
exports.default = Environment;
