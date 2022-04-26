# React-directus-surveyjs.io

This project uses Surveyjs.io, React, and Directus. 

## Surveyjs.io

This is a library created in JavaSctipt that makes it easy for users to create various forms without having to write the code themselves. 


## ReactJs

A fast and open source JavaScript library that was used to render the form from Survey.js.

To create a new react project.

`npx create-react-app react-directus-surveyjs.io`

## Directus


This is a Content Management system that is created using Node.js. 

The software was used to store the form's boiler plate code and the data from the user who fills in the form. 


## Docker

Docker is a software used to containerize application into images that makes it easy for their deployment to the cloud ie. AWS service.

It was used to containerize React, MySQL for the database, and Directus.


## Setup Process

Visit Surveyjs.io and create an account. From the account, create a form of your choice and you will be issued with its code.

Create your React application and Dockerize it.

Go to the root of the project and create Directus, Nodejs, and MySQL images inside docker-compose.yml.

The Node.js image represents the dockerized react application.

Install docker and docker-cli on your machine and build both the React Dockerized file and the docker-compose.yml file. 

After the images build, create a directus account and use `https://localhost:8055/admin/#/login` to log into your CMS in the browser.








