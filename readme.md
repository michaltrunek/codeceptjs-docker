**How to:**

pre: edit package.json docker-node script for the docker id and replace my :)

1. `docker network create grid`

2. ` docker build -t <your-docker-id>/codeceptjs-docker-tutorial .`

3. `docker-compose up -d --scale chrome=3`

4. `npm run docker-node`