## Development

### Dependencies
Start by installing all dependencies:
```
yarn install
```

### Configure
Create a `.env` file in the root of the application.

```
MAILGUN_API_KEY=XXXX-XXXX-XXXX
MAILGUN_DOMAIN=XXXX-XXXX-XXXX
```

### Run
Start a web server that can be reached by localhost:3000 by default.
```
npm gulp dev
```

### Test

Run unit tests using the cli. Wallaby is also supported.
```
npm test
```

Run smoke tests
```
npm start
// a different shell
npm run co
```

