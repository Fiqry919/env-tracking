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
import { Environment as env } 'env-tracking'
```

## Example

[Get] Getting value from .env file

```javascript
const key = env.get("SECRET_KEY");

console.log(key);
```

[Set] Set value to .env file, you can add many in one execution

```javascript
env.set(
  [
    { key: "SECRET_KEY", value: "YOURSECRETKEYGOESHERE" },
    { key: "SECRET_HASH", value: "YOURSECRETHASHGOESHERE" }
  ],
  "./../.env" // path of .env file include filename
);
```
