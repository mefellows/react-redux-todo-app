#!/bin/bash
CONTAINER="mefellows/bucky"
BUILD_NUMBER=$(date +%s)

docker build -t "$CONTAINER:$BUILD_NUMBER" .
docker tag -f "$CONTAINER:$BUILD_NUMBER" "$CONTAINER:latest"

if [ "$1" = "push" ]; then
  docker push "$CONTAINER:$BUILD_NUMBER"
  docker push "$CONTAINER:latest"
fi
