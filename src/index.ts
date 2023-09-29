import env from "dotenv"
import { resolve } from "path";
import { readFile, writeFileSync } from "fs"

export const dotenv = env.config();

declare type Decode = Record<string, any>

declare interface Encode { key: string, value: any }

export default class Environment {

    private instance: typeof Environment = this.constructor as typeof Environment

    protected constructor() { }

    /**
     * Decode .env file to object
     * @param x string .env file
     * @returns Decode .env file
     */
    private static decode(x: string): Decode {
        const r: Decode = {};
        const ls = x.toString().split('\n');

        for (const l of ls) {
            const s = l.split('=')
            if (s && s.length > 1) {
                const k = s[0].trim();
                const v = s[1].trim();
                r[k] = v;
            } else {
                const k = s[0].trim();
                r[k] = false;
            }
        }
        return r
    }

    /**
     * Encode from object to .env file
     * @param x object from decode .env file
     * @returns .env
     */
    private static encode(x: Decode): string {
        let s = ""
        for (const [k, v] of Object.entries(x)) {
            if (k) {
                const l = v ? `${k}=${String(v)}` : k + "=";
                s += l + '\n';
            }
        }
        return s
    }

    /**
     * Get value from .env file
     * @param key key of .env
     * @returns any
     */
    static get(key: string): any { return process.env[key.toUpperCase()]; }

    /**
     * Get value from .env file
     * @param key key of .env
     * @returns any
     */
    get(key: string): any { return this.instance.get(key); }

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
    static set(e: Encode[], path: string): void {
        const d = resolve(__dirname, path)
        readFile(d, 'utf8', (x, y) => {
            if (x) {
                console.error((<Error>x).message);
                return;
            }
            const p = this.decode(y);
            e.forEach((f: Encode) => {
                if (f.key && f.value) {
                    p[f.key] = f.value;
                }
            });
            writeFileSync(d, this.encode(p));
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
    set(e: Encode[], path: string): void { return this.instance.set(e, path); }
}
