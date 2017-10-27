# Angular2Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
Note: project is currently supporting pug files so, this command will make all the component scaffold but pug file.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Trade-offs

There are a few tradeoffs using this approach.

1. No auto watching for new files
When adding any new pug file after npm start, the new file is not watched. You need to restart dev server (stop and rerun npm start).

2. Fail silently when hitting pug syntax error
Since we start pug watch and dev-server concurrently, when there’s pug syntax error happens during development, you will see errors in terminal, but not on screen or browser console. Please beware of this, sometimes you got syntax error without knowing it, and spend hours to debug other area (you know what I mean).

3. Need to manually create pug file if you use ng generate
By default, angular-cli ng generate will generate HTML file for component. You need to rename or delete/create the HTML to pug file.

# Pug implementation source
pug implementation source [pug guide](https://hackernoon.com/using-pug-jade-with-angular-with-cli-5592b7ee24e6)