import { resolve } from "path";
import { readFile, writeFileSync } from "fs"
import dotenv from "dotenv"

export const env = dotenv.config()

declare type Decode = Record<string, any>

declare interface Encode { key: string, value: any }

export class Environment {

    private instance: typeof Environment = this.constructor as typeof Environment

    constructor() { }

    /**
     * Decode .env file to object
     * @param x string .env file
     * @returns Decode .env file
     */
    static decode(x: string): Decode {
        const r: Decode = {}
        const ls = x.toString().split('\n')

        for (const l of ls) {
            const s = l.split('=')
            if (s && s.length > 1) {
                const k = s[0].trim()
                const v = s[1].trim()
                r[k] = v
            } else {
                const k = s[0].trim()
                r[k] = false
            }
        }
        return r
    }

    /**
     * Decode .env file to object
     * @param x string .env file
     * @returns Decode .env file
     */
    decode(x: string): Decode { return this.instance.decode(x) }

    /**
     * Encode from object to .env file
     * @param x object from decode .env file
     * @returns .env
     */
    static encode(x: Decode): string {
        let s = ""
        for (const [k, v] of Object.entries(x)) {
            if (k) {
                const l = v ? `${k}=${String(v)}` : k
                s += l + '\n'
            }
        }
        return s
    }

    /**
     * Encode from object to .env file
     * @param x object from decode .env file
     * @returns .env
     */
    encdoe(x: Decode): string { return this.instance.encode(x) }

    /**
     * Get value from .env file
     * @param key key of .env
     * @returns any
     */
    static get(key: string): any { return process.env[key.toUpperCase()] }

    /**
     * Get value from .env file
     * @param key key of .env
     * @returns any
     */
    get(key: string): any { return this.instance.get(key) }

    /**
     * Set value .env file, create new if nothing key
     * @param e array object
     * @param path directory wtih filename of .env file
     * @example 
     * ```js
     * Environment.set([
     *      { key: "ANY_KEY1", value: "ANY VALUE 1" },
     *      { key: "ANY_KEY2", value: "ANY VALUE 2" },
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
     * Set value .env file, create new if nothing key
     * @param e array object
     * @param path directory wtih filename of .env file
     * @example 
     * ```js
     * Environment.set([
     *      { key: "ANY_KEY1", value: "ANY VALUE 1" },
     *      { key: "ANY_KEY2", value: "ANY VALUE 2" },
     * ], "../.env")
     * ```
     */
    set(e: Encode[], path: string): void { return this.instance.set(e, path) }
}
