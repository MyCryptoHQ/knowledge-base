# MyCrypto Knowledge Base

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

This repository contains the code for the [MyCrypto Knowledge Base](https://support.mycrypto.com). For the Knowledge Base content, see [MyCryptoHQ/knowledge-base-content](https://github.com/MyCryptoHQ/knowledge-base-content).

## Getting Started

In order for the knowledge base to compile locally, you need to make sure the content is fetched too. To do this, run the following command:

```bash
git submodule update --init --remote --recursive
```

### Development

To start a development server, run the following command

```bash
yarn run start
```

The server will be accessible on `localhost:8000`.

### Production

To build a static version of the Knowledge Base for production, run the following command

```bash
yarn run build
```

If you want to deploy the Knowledge Base to Github Pages, you can use the following command instead, which will also build the Knowledge Base

```bash
yarn run deploy
```

## License

The Knowledge Base is [MIT licensed](./LICENSE).
