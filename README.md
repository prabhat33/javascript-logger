# Typescript and Javascript Logger

Javascript Logger Nodejs package that works with both ES5 and ES6

### Prerequisites

To install and run Storefront on your local system , you will need the following softwares pre-installed on your system

1. Node js


## Getting Started

To use the library into your Modern javascript project , follow these steps.

STEP 1: Install the package by entering the following command inside root of your project

```
npm install typescript-and-javascript-logger --save

```

### Usage

If you are using ES5 for you project, you should use the package in following way

```
var logger = require("typescript-and-javascript-logger").LoggerInstance;

logger.info("logger");
logger.debug("logger");
logger.error("logger");

```

If you are using ES6 for you project, you should use the package in following way

```
import {LoggerInstance} from 'typescript-and-javascript-logger';


 LoggerInstance.info("logger");
 LoggerInstance.debug("logger");
 LoggerInstance.error("logger");

```

## Technologies

* [NPM](https://www.npmjs.com/)
* [NODE JS](https://nodejs.org/en/)

## Author

** PRABHAT GIRI (giri.prabhat33@gmail.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

