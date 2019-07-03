FROM node:10.16.0
COPY ./ ./source
WORKDIR ./source
RUN npm install
CMD [ "npm", "run", "test:insidedocker" ]