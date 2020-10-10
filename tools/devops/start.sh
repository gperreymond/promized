#!/bin/bash

# ############################################
# DOCKER SWARM
# ############################################

docker stack deploy -c docker-compose.traefik.yml proxy
docker stack deploy -c docker-compose.portainer.yml portainer
docker stack deploy -c docker-compose.security.yml security
docker stack deploy -c docker-compose.brokers.yml brokers
docker stack deploy -c docker-compose.databases.yml databases
