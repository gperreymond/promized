#!/bin/bash

export $(cat .env)

# ############################################
# DOCKER SWARM
# ############################################

docker stack deploy -c docker-compose.traefik.yml traefik
docker stack deploy -c docker-compose.brokers.yml brokers
docker stack deploy -c docker-compose.databases.yml databases
