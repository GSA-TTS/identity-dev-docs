# Login.gov Dev Docs

[View it live ❯](https://developers.login.gov/)

## Development

### Docker

Build and run the site

```sh
docker-compose build
docker-compose up
open http://localhost:4000
```

Run tests

```sh
docker-compose run web bundle exec rspec spec
```

Some changes, like `_config.yml` don't get picked up automatically in Docker. You can force a re-build of the site without re-building the whole container:

```sh
docker-compose run web bundle exec jekyll build
```

You can drop into a bash shell in the container with 

```sh
docker-compose run web bash
```

### Locally

Run the server locally: 

```sh
make run
```

Run the tests:

```sh
make test
```

This site uses the [U.S. Web Design Standards](https://standards.usa.gov). Use `npm` to update them:

```sh
npm install
npm run build-uswds
```
