# Login.gov Dev Docs

[View it live ❯](https://developers.login.gov/)

## Temporary Alert

To add a temporary alert to the developer docs set the `temporary_alert` configuration value in `_config.yml` to a string with the desired alert contents, e.g. `The sandbox will be unavailable from <b>5:30-6:30p ET on Tuesday, August 9th</b>.`. To turn off the alert change the configuration value to `false`.

## Development

### Docker

Build and run the site

```sh
docker-compose build
docker-compose up
open http://localhost:4000
```

Some changes, like `_config.yml` don't get picked up automatically in Docker. You can pick up these changes by stopping/starting the cluster.

Run tests

```sh
docker-compose run web make test
```

You can drop into a bash shell in the container with

```sh
docker-compose run web bash
```

### Locally

Run initial setup:

```sh
make setup
```

Run the server locally:

```sh
make run
```

Run the tests:

```sh
make test
```

This site uses the [U.S. Web Design Standards](https://standards.usa.gov). To update them:

1. Download the [latest release](https://standards.usa.gov/download)
2. Copy contents to `assets/`
3. Rename directory to `uswds`
4. Download latest [anchor.js](https://github.com/bryanbraun/anchorjs) and put in `assets/js/`

#### YAML files

When updating a `yml` file, you only need to update the version in the `/assets` directory. This is symlinked to the `_includes` directory.
