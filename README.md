# Travlr Full Stack Web Application

## Overview

The Travlr project is a full stack web application that has both a customer side and an admin side. The customer side allows users to view travel information, while the admin side allows administrators to manage the travel data. In the final version of the project, security was added to the admin login using authentication so that only authorized users can access the admin features.

---

# Architecture

## Frontend Development

The Travlr project uses Express HTML, JavaScript, and an Angular Single Page Application (SPA).

Express HTML works by having the server send complete HTML pages to the browser. This works well for simpler websites because the server handles creating the pages. However, the downside is that every time the user navigates, the browser may need to reload a new page.

JavaScript adds more interaction to a website by allowing the page to respond to user actions without always needing to reload. It can update parts of the page, handle events, and communicate with the backend.

The Angular SPA approach is different because the frontend and backend are separated. Instead of loading a new page every time, Angular updates only the parts of the page that need to change. The Angular application makes requests to the Express backend API to get and update information.

The SPA approach makes the application feel faster and more like a desktop application because the user does not have to constantly reload pages.

## Why MongoDB Was Used

MongoDB was used as the database because it is a NoSQL database that stores information as documents. This works well with JavaScript applications because the data is stored in a format similar to JSON objects.

For Travlr, travel information such as trip names, descriptions, prices, and images can be stored together as documents. MongoDB also allows the structure of the data to change more easily compared to a traditional SQL database.

Because the application uses JavaScript throughout the stack, MongoDB works well with the frontend and backend because the data can easily be transferred using JSON.

---

# Functionality

## JSON and JavaScript

JSON and JavaScript are related but are not the same thing. JavaScript is a programming language used to create the logic of the application. JSON is a format used to store and transfer data.

JSON connects the frontend and backend because the API sends data between them using JSON. When the Angular frontend requests travel information, the Express backend gets the information from MongoDB and sends it back as JSON.

The frontend then uses JavaScript to process that information and display it to the user.

## Refactoring and Reusable Components

During the development of Travlr, code was refactored to make the application easier to manage and more efficient. This included separating parts of the application into different components and organizing backend routes and frontend services.

Reusable UI components are useful because they prevent the same code from being written multiple times. They make the application easier to update because changes only need to be made in one place.

For example, navigation, forms, and displays can be reused instead of creating a new version of the same code for every page.

---

# Testing

## API Testing and Security

API testing was important because the frontend and backend communicate through API endpoints. The endpoints allow the application to request, add, update, or remove information.

Some common API requests include:

- GET requests to retrieve data
- POST requests to add new data
- PUT requests to update data
- DELETE requests to remove data

Testing these endpoints makes sure the frontend is receiving the correct information and that the backend is handling requests correctly.

Adding security created another layer that needed to be tested. The admin section requires authentication before users can access protected features.

Travlr uses JWT authentication for admin login. After logging in, the server creates a token that is sent with future requests. The backend checks this token before allowing access to admin features.

Testing security includes making sure incorrect logins fail, missing tokens are rejected, and protected routes cannot be accessed without authentication.

---

# Reflection

This course helped me understand how full stack applications are built and how the frontend, backend, and database work together.

Before this project, I had experience with programming concepts, but this project helped me understand how those concepts connect in a real application. I gained experience working with Angular, Express, JavaScript, MongoDB, APIs, and authentication.

The biggest skills I developed were understanding how to structure an application, communicate between the frontend and backend, work with databases, and troubleshoot problems.

These skills will help me in my career because modern software development requires being able to work with multiple parts of an application. Completing Travlr gave me experience creating a complete application instead of only working on small individual pieces.

This project also improved my ability to debug issues, organize code, and build applications that are easier to maintain.
