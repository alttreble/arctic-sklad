FROM node:16-alpine as builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install

COPY . ./

RUN npm run build

FROM node:16-alpine

WORKDIR /app
COPY --from=builder /app/package*.json ./

RUN npm i --omit=dev

COPY --from=builder /app/dist ./
RUN npx prisma generate

EXPOSE 4000
CMD node .
