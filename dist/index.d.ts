import env from "dotenv";
export declare const dotenv: env.DotenvConfigOutput;
declare interface Encode {
    key: string;
    value: any;
}
export default class Environment {
    private instance;
    protected constructor();
    /**
     * Decode .env file to object
     * @param x string .env file
     * @returns Decode .env file
     */
    private static decode;
    /**
     * Encode from object to .env file
     * @param x object from decode .env file
     * @returns .env
     */
    private static encode;
    /**
     * Get value from .env file
     * @param key key of .env
     * @returns any
     */
    static get(key: string): any;
    /**
     * Get value from .env file
     * @param key key of .env
     * @returns any
     */
    get(key: string): any;
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
    static set(e: Encode[], path: string): void;
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
    set(e: Encode[], path: string): void;
}
export {};
