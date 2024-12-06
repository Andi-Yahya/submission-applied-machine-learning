FROM node:18.17.1
WORKDIR /app
ENV PORT 3000
ENV MODEL_PATH 'https://storage.googleapis.com/models-storage1/model.json'
COPY . .
RUN npm install
CMD [ "npm", "run", "start-prod"]

