<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## nest.js-bullmq

A simple NestJS application demonstrating the implementation of BullMQ for job and queue management. This project showcases the integration of BullMQ with NestJS to efficiently handle background tasks. It includes examples of setting up workers, as well as creating and managing queues. This application serves as a practical guide to leveraging BullMQ’s powerful features, ensuring scalability and reliability in task execution within a NestJS framework architecture.

## Table of Content

- [nest.js-bullmq](#nestjs-bullmq)
- [Table of Content](#table-of-content)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
- [Compile and run the project](#compile-and-run-the-project)
- [Accessing Swagger UI](#accessing-swagger-ui)
- [License](#license)
- [Contributors](#contributors)

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)

## Installation and Setup

In order to get this application up and running on your local machine, follow the
steps below.

1. Clone the repository from GitHub:

   ```shell
   git clone https://github.com/saeedNW/nest.js-bullmq.git
   ```

2. Navigate to the project directory:

   ```shell
   cd nest.js-bullmq
   ```

3. Install project dependencies:

   ```shell
   npm install
   ```

Note that the application default Listing port is `3000`.

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# build production
$ npm run build

# production mode
$ npm run start:prod
```

## Accessing Swagger UI

This application provides interactive API documentation through Swagger UI.

To access the Swagger UI:

1. Start the application in either development or production mode.
2. Open your web browser and navigate to:

   ```bash
   http://localhost:3000/api-doc
   ```

3. Use the Swagger interface to explore and interact with the available APIs.
4. After invoking any endpoint, check the terminal to view the processes occurring behind the scenes.
5. The response body will include the time each request takes to receive a response.

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

## Contributors

We would like to thank the following individuals who have contributed to the development of this application:

![avatar](https://images.weserv.nl/?url=https://github.com/erfanyousefi.png?h=150&w=150&fit=cover&mask=circle&maxage=5d)
‎ ‎ ‎ ![avatar](https://images.weserv.nl/?url=https://github.com/saeedNW.png?h=150&w=150&fit=cover&mask=circle&maxage=5d)

[**Erfan Yousefi - Supervisor and instructor of the nest.js programming course**](https://github.com/erfanyousefi/)

[**Saeed Norouzi - Back-end Developer**](https://github.com/saeedNW)
