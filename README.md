# Blog-Website
![GitHub release](https://img.shields.io/github/release/Heikrana/my-blog-website.svg?style=popout-square)
![GitHub top language](https://img.shields.io/github/languages/top/Heikrana/my-blog-website.svg?style=popout-square) ![GitHub last commit](https://img.shields.io/github/last-commit/Heikrana/my-blog-website.svg?style=popout-square) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


This is my college project for 2nd year. A simple blog website with WYSIWYG editor and card layout for articles and a simple SignIn/SignUp menu.

Check out the [live demo](https://blog-heikrana.herokuapp.com) to see the website in action.
<br><br>

# Introduction

A simple and elegant design with the most basic color pallet (just black and white). Both Frontend and Backend are written in JavaScript. ReactJS for front-end and NodeJS with ExpressJS for backend.

All the articles and User data (credentials) are stored in NoSQL database. I'm using MongoDB for this purpose (more specifically MongoDB atlas).


## In-depth Working

For ***front-end***, I have created different components for every seperate design element (ReactJS) which gives it a modular design.
For instance, the newsletter column (which is not functional just yet) is a different component than the list of articles below it.

For ***back-end***, I have created two different routes for Articles and User. Both these routes use Express Router function.
In the User Route, **I have used BCrypt to create salted hash of the password before sending it to the cloud database**.

# Features

This project includes:

- [x] Featured Post
- [x] Articles list (Card layout)
- [x] Ability to sign up and log in
- [ ] WYSIWYG editor

Future prospects:

- [ ] Cookies to store User data
- [ ] JWTokens for logging in using services like Github
- [ ] Newsletter Signup

# Running the project

> Live version:

[blog-heikrana.herokuapp.com](https://blog-heikrana.herokuapp.com)

> Local machine:

1. Clone the project locally.
2. Run `npm install` on the root level (where you can see `server.js`), it'll install dependencies for back-end.
3. Change directory to `./client`
4. Run `npm install again`, this time it's for front-end.
5. Similarly, run `npm start-dev` in the root folder `/` and run just `npm start` in the `./client` folder. This will start both back-end (at port `5000`) and front-end (at port `3000`).
6. After this, the website will run properly except for one thing, you won't be able to see the articles or use SignIn/SignUp features beacause it's cloudDB dependent. To fix that, you'll have to create a database at MongoDB atlas and put you API keys in `.env` file.

# Dependencies

## Back-end

- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [nodemon](https://www.npmjs.com/package/nodemon) (devDependency)

## Front-end

- [axios](https://www.npmjs.com/package/axios)
- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)

# Reporting

## Vulnerabilities

To report any vulnerability that you found while using the website, please send an email with the details to heikrana@pm.me
. This will help me to assess the risk and take the necessary steps.

## Bugs

You can create an issue in this repository itself, I'll try to look into it as soon as possible.