###
[![NPM Version](https://img.shields.io/npm/v/env-tracking.svg)](https://www.npmjs.org/package/env-tracking)
[![license](https://img.shields.io/npm/l/env-tracking)](https://www.npmjs.org/package/env-tracking)
[![Downloads](https://badgen.net/npm/dt/env-tracking)](https://www.npmjs.com/package/env-tracking)
[![Install Size](https://packagephobia.now.sh/badge?p=env-tracking)](https://packagephobia.now.sh/result?p=env-tracking)

## Installation

```bash
npm install env-tracking
```

## Usage

Create a `.env` file in the root of your project:

```
SECRET_KEY="YOUR_SECRET_KEY"
SECRET_HASH="YOUR_SECRET_HASH"
```

then import and use it in your application.<br/><br/>
CommonJS
```javascript
const env = require("env-tracking").default;
```

ES module

```javascript
import env from "env-tracking";
```

## Example

- `Get` Getting value from .env file

```javascript
const key = env.get("SECRET_KEY");

console.log(key); // YOUR_SECRET_KEY
```

- `Set` Set value to .env file, and you can make more than one

```javascript
env.set(
  [
    { key: "SECRET_KEY", value: "YOUR_SECRET_KEY" },
    { key: "SECRET_HASH", value: "YOUR_SECRET_HASH" }
  ], "./../.env" // path of .env file include filename
);
```