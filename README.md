## Installation

[npm](https://www.npmjs.com/):

```bash
npm install env-tracking
```

## Usage

Create a `.env` file in the root of your project:

```dosini
SECRET_KEY="YOURSECRETKEYGOESHERE"
SECRET_HASH="YOURSECRETHASHGOESHERE"
```

then import and use it in your application

```javascript
import { Environment as env } from "env-tracking";
```

## Example

[Get] Getting value from .env file

```javascript
const key = env.get("SECRET_KEY");

console.log(key);
```

[Set] Set value to .env file, and you can make more than one

```javascript
env.set(
  [
    { key: "SECRET_KEY", value: "YOURSECRETKEYGOESHERE" },
    { key: "SECRET_HASH", value: "YOURSECRETHASHGOESHERE" }
  ],
  "./../.env" // path of .env file include filename
);
```

## Quote

Special Thanks to [`motdotla`](https://github.com/motdotla)
At first I made this just to meet my needs, but I thought again if this can help make it easier for someone why not