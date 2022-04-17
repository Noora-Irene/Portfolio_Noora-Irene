FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

ENV PORT=port
ENV DB_URI=uri

CMD ["npm", "start"]