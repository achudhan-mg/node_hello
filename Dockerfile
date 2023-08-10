FROM node:14.10.0
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 9953
CMD node app.js