# pull official base image
FROM node:14.17.3-buster

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent


# add app
#copying all files into WORKDIR
COPY . ./

# Make port 3001 available to the world outside this container
EXPOSE 3002

# start app
CMD ["npm", "start"]