#!/bin/bash

# ############################################
# DOCKER SWARM
# ############################################

docker stack deploy -c docker-compose.traefik.yml traefik
docker stack deploy -c docker-compose.brokers.yml brokers
