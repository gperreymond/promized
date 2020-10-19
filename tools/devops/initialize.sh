#!/bin/bash

# ############################################
# RABBITMQ
# ############################################

NEW_EXCHANGE=moleculer.deadletter.exchange
curl -k -i -u "admin:infra" -H "content-type:application/json" -X PUT -d'{"type":"direct","durable":true}' https://rabbitmq.docker.localhost/api/exchanges/%2f/$NEW_EXCHANGE

NEW_EXCHANGE=moleculer.exchange
curl -k -i -u "admin:infra" -H "content-type:application/json" -X PUT -d'{"type":"direct","durable":true}' https://rabbitmq.docker.localhost/api/exchanges/%2f/$NEW_EXCHANGE

# ############################################
# POSTGRES
# ############################################

export PGHOST=localhost
export PGPORT=5432
export PGUSER=admin
export PGPASSWORD=infra

NEW_DATABASE=promized
psql -c "SELECT 1 FROM pg_database WHERE datname = '$NEW_DATABASE';" | grep -q 1 || psql -c "CREATE DATABASE \"$NEW_DATABASE\";";
