FROM node:22-alpine

WORKDIR /app

ENV PORT=3004

COPY package*.json ./

RUN npm cache clean --force
RUN npm install -g npm@latest --force
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3004

CMD [ "npm", "run", "preview" ]