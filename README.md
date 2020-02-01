## Usage

There is 4 npm packages in this repository:

- eslint-config [Documentation](./packages/eslint-config)
- prettier-config [Documentation](./packages/prettier-config)
- stylelint-config [Documentation](./packages/stylelint-config)
- tslint-config [Documentation](./packages/tslint-config)

## Development

This is a [Lerna](https://github.com/lerna/lerna)-powered monorepo.

If you want to edit, for example, `tslint-config` and try it on your project:

```bash
git clone git@github.com:lukethacoder/lsd-aus
cd packages/tslint-config
yarn install
yarn link
```

In your project do:

```bash
cd my-project
yarn link "@lsd-aus/tslint-config"
```

## Publishing

You can either decide to bump all 4 packages by running:

```bash
yarn pub
```

or if you just want to publish a single package (tslint-config for example):

```bash
yarn pub --scope="@lsd-aus/tslint-config"
```
