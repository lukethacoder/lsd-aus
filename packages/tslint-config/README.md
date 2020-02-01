# @lsd-aus/tslint-config

[![npm](https://img.shields.io/npm/v/@lsd-aus/tslint-config.svg)](https://www.npmjs.com/package/@lsd-aus/tslint-config)

## Installation

```bash
yarn add @lsd-aus/tslint-config
```

## Usage

### TSLint

For now there is only one main config.

**For React**

```json
{
  "extends": "@lsd-aus/tslint-config/react"
}
```

In the future we may add additional tslint configs.

### TSConfig

For now there is only one main config.

**For React**

```json
{
  "extends": "./node_modules/@lsd-aus/tslint-config/tsconfig-react",
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
```

In the future we may add additional tsconfigs.

## License

MIT &copy; [Luke Secomb.](http://lukesecomb.digital)
