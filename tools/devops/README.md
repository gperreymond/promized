# DevOps Tools

## Helpers

```sh
# Use the following command to generate a hash for the password:
$ docker run --rm httpd:2.4-alpine htpasswd -nbB infra 'infra' | cut -d ":" -f 2
```

## Prepare https localhost

```sh
$ export MKCERT_VERSION=1.4.1
$ sudo wget -O /usr/local/bin/mkcert https://github.com/FiloSottile/mkcert/releases/download/v$MKCERT_VERSION/mkcert-v$MKCERT_VERSION-linux-amd64
$ sudo chmod +x /usr/local/bin/mkcert
$ mkcert docker.localhost "*.docker.localhost"
```

Then move the two files generated in __devcerts__

## How to use traefik labels

```yaml
# GLOBAL
- traefik.enable=true
- traefik.http.middlewares.https-redirect.redirectscheme.scheme=https
- traefik.http.middlewares.https-redirect.redirectscheme.permanent=true
# PORT
- traefik.http.services.<NAME>.loadbalancer.server.port=<PORT>
# HTTP
- traefik.http.routers.<NAME>-http.entrypoints=insecure
- traefik.http.routers.<NAME>-http.rule=Host(`<HOSTNAME>.docker.localhost`)
- traefik.http.routers.<NAME>-http.middlewares=https-redirect@docker
# HTTPS
- traefik.http.routers.<NAME>-https.entrypoints=secure
- traefik.http.routers.<NAME>-https.rule=Host(`<HOSTNAME>.docker.localhost`)
- traefik.http.routers.<NAME>-https.tls=true
```

## Start / Stop the stack

To start the infrastructure on localhost:

```sh
$ ./start.sh
```

To stop the infrastructure on localhost:

```sh
$ ./stop.sh
```

To initialize the infrastructure, after starting:

```sh
$ ./initialize.sh
```

### Keycloak

https://keycloak.docker.localhost

![Keycloak setup](./keycloak_user_federation.png)

### OpenLDAP WebUI

https://ldap-manager.docker.localhost

Firt setup go to: https://ldap-manager.docker.localhost/setup

### Others WebUI

* https://nats.docker.localhost
* https://rabbitmq.docker.localhost
* https://pgadmin.docker.localhost
