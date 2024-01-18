# TechnicalTest

This project is an order management application developed with Angular. It allows users to create and edit orders, each with an order number and a list of products.

## Features

- **Create orders**: Users can create new orders. Each order must have an order number and can have multiple products.
- **Edit orders**: Users can edit existing orders. They can change the order number and add or remove products.
- **View products**: Users can view a list of all available products. Each product has a name, a quantity, and a unit price.
- **Select products**: Users can select products to add them to an order. Selected products are highlighted in the user interface.

## Project Setup

To set up the project on your local environment, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Create a `src/environments/environment.prod.ts` file with your environment variables. You can use `src/environments/environment.prod.ts.example` as a template.
5. Run `ng serve` to start the development server.

## Contributing

Contributions are welcome. Please open an issue to discuss what you would like to change or submit a pull request.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
