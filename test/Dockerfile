FROM cypress/base:16
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
COPY cypress.config.js .
COPY cypress/ ./cypress/

RUN npm install

CMD ["npm", "run", "cypress:run"]