# @lsd-aus/tslint-config

[![npm](https://img.shields.io/npm/v/@lsd-aus/tslint-config.svg)](https://www.npmjs.com/package/@lsd-aus/tslint-config)

## Installation

```bash
yarn add @lsd-aus/tslint-config
```

## Usage

### TSLint

We have 2 configs to extend to your `tslint.json` file.

**For React**

```json
{
  "extends": "@lsd-aus/tslint-config/react"
}
```

**For React Native**

```json
{
  "extends": "@lsd-aus/tslint-config/react-native"
}
```

### TSConfig

We have 2 differents `tsconfig.json` that you can extends to your `tsconfig.json` file.

**For React**

```json
{
  "extends": "./node_modules/@lsd-aus/tslint-config/tsconfig-react",
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
```

**For React Native**

```json
{
  "extends": "./node_modules/@lsd-aus/tslint-config/tsconfig-react-native",
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
```

## License

MIT &copy; [lsd-aus.](http://lsd-aus.co)
