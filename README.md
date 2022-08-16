
## 




-- This project is coded by Angular CLI VERSION 14.1.2
-- To run this project , you must install node.js (https://nodejs.org/en/download/).I used latest version of it.
-- Then you must install vs code (I used 1.70.1)
-- After setup vs code ,open terminal from vs code and run this command for install npm (npm install -g @angular/cli@latest)
-- You must copy  link  from github and clone repository in vs code.
-- Finally in WeatherAppFront folder ,click right and select open integrated terminal.Run  command ng serve.
-- To send request backend , your backend project must be running.If it running , go to adress http://localhost:4200/ and select a city ,click find weather button.
   
   
   If you take an error these libraries below , you can use commands below.
   import {HttpClientModule} from '@angular/common/http';
   import {MatButtonModule} from '@angular/material/button';
   import {MatToolbarModule} from '@angular/material/toolbar';
   import {MatFormFieldModule} from '@angular/material/form-field';
   import {MatTableModule} from '@angular/material/table';
   import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
   
   npm install @angular/common/http
   ng add @angular/material
   npm install @angular/forms --save
   



 











# WeatherAppFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

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
