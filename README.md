This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with tailwindcss

This is a Checkout process of an online store using node.js as backend and next.js as frontend. It encompasses connecting to stripe api and storing all payed orders in a MongoDB database. This includes a simple checkout page and with the Stripe integration, every confirmed payed order is stored in the database with the order history of the user. Click on signup to register and use pm_card_mastercard as Payment method ID to create a mock order.
Here is the [link](https://github.com/uferekalu/swipepay_backend) to the backend repo.

## Getting Started

Clone the project
```
git clone git@github.com:uferekalu/swipepay-frontend.git
```
Then change the directory to swipepay-frontend
```
cd swipepay-frontend
```

Install the dependencies by running npm install in the root directory:
```
npm install
```

To start the project, run this at the root of the project:
```
npm run dev
``
