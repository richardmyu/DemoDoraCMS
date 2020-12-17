FROM mhart/alpine-node

LABEL author="richardminyu@foxmail.com"

ENV PORT=8080

WORKDIR /app
COPY . /app

RUN npm install --registry=https://registry.npm.taobao.org
RUM npm install mammoth node-schedule --registry=https://registry.npm.taobao.org

EXPOSE ${PORT}

CMD BUILD_ENV=docker npm run dev
