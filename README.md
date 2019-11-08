# Musical Instruments Inventory System

### Prerequisites
* Java 11
* Gradle v5.6.1
* PostgreSQL Tool (pgAdmin)
* Node.js (v12.13.0)
* Angular 8

### Configuring Server app
* Create a database in Postgres with the following details:
- database name: `inv`
- username: `postgres`
- password: `postgres`

### Running Server app using Gradle
* Go to server folder via Terminal `cd server`.
* Run gradle command `gradle bootRun`.
* If the command is successful, server app should be runnning on port 8080.

### Running Client app
* Go to client folder via Terminal `cd client`.
* Install dependencies by running `npm install`.
* Run angular app `ng serve`.
* If the command is successful, client app should be runnning on port 4200.
* Go to `localhost:4200` on your browser.
