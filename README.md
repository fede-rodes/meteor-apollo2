# Patch for [https://github.com/apollographql/meteor-integration](https://github.com/apollographql/meteor-integration) until the official version is released.

> **Note: This package supports Apollo Client 2.x, to use Apollo Client 1.x, check out on the version `1.0.0`**

> A great alternative to this package is [ddp-apollo](https://github.com/Swydo/ddp-apollo)

> We are actively looking for a new maintainer: https://github.com/apollographql/meteor-integration/issues/109

Create an Apollo client & an Apollo server quickly:

### Client
```js
import { createApolloClient } from 'meteor/orcprogramming:meteor-apollo2';

const client = createApolloClient({});
```

### Server
```js
import { createApolloServer } from 'meteor/orcprogramming:meteor-apollo2';

const schema = /* your schema instance */

createApolloServer({ schema });
```

```sh
meteor add apollo
yarn add apollo-client apollo-link apollo-link-http apollo-cache-inmemory apollo-server-express express graphql graphql-tools body-parser
```

Read **[the docs](http://dev.apollodata.com/core/meteor.html)**

### Example usage
See the following project for example usage: [https://github.com/fede-rodes/meteor-apollo-starter-kit](https://github.com/fede-rodes/meteor-apollo-starter-kit)

# Package dev

## Tests

```bash
git clone https://github.com/apollostack/meteor-integration.git
cd meteor-integration
npm install
npm run test
open http://localhost:3000
```

Ignore the npm peer requirements warning that appears on client and server consoles.

## Credits

[Contributors](https://github.com/apollostack/meteor-integration/graphs/contributors)
