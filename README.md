# Product Dashboard Application 🎁

A Product Dashboard App made with NextJs, TailwindCSS, Redux, & MongoDB

[screen-capture.webm](https://user-images.githubusercontent.com/50259107/201120731-0f64592c-6f76-49c6-96d0-6a93753f4f75.webm)

## Overview

In the project directory, you can run:

## Getting Started

1. Clone the repository and `cd` into its root directory.
2. `cd` to the project directory and run `npm i` to install dependencies.
3. Get your API Keys from NextAuth, MongoDB Atlas, and AWS S3.
4. Create `.env.local` file and place all your activated API Keys.
5. Run `npm run dev` from the project directory to run in development mode


This application is served at [http://localhost:3000](http://localhost:3000) by default.

---
## 💻 Technologies `</>`
[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
[![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)


## Usages
- In every pages of the app, users can toggle either `light` or `dark` color mode from [next-theme](https://www.npmjs.com/package/next-themes) based on your preferences.
- Users will need to be authenticated by either `Sign in` or `Sign up` from [next-auth](https://www.npmjs.com/package/next-auth) in order to access the Product page.
- Users will be prompted to key in correct credentials to be safely authenticated.
- Successfully registered users will be stored in MongoDB
- In Product Page, products are queried from the database based on the authenticated users.
- In Product page, users can: 
  - create new products.
  - edit or delete any product.
  - select multiple products and delete.
  - search and filter product.
- Products data are stored in MongoDB.
- Users are able to log out from their account and re-authenticate.
- Pages are responsive on both Desktop and Mobile.
