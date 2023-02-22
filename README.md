
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## APIs

### user
```
# sign up
$ (POST) /auth/sign-up

# sign in
$ (POST) /auth/sign-in

# auth test
$ (POST) /auth/auth-test

```

### board
```board
# read
$ (GET) /board

# insert
$ (POST) /board

# update status (Private, Public)
$ (PATCH) /board/{board_id}/status

# delete
$ (DELETE) /board/{board_id}
```

every api request can demand JWT token (for Authorization) and DATA in body.

