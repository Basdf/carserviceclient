# CarServiceClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Car service 
Este servicio consume dos apis diferentes las cuales son https://thawing-chamber-47973.herokuapp.com/cars y https://thawing-chamber-47973.herokuapp.com/cool-cars. El servicio contiene los siguiente métodos:
-getAll():Este método llama a la api cars y trae todo los registros.
-get(id: string):Este metodo llama a la api cool-cars y trae el registro con el id igual al id buscado
-save(car: any):Este método guarda el objeto car en el servicio cars
-remove(href: string): Este método busca el car con el href indicado y lo borra del servicio cars

## Owner service 
Este servicio consume la api https://thawing-chamber-47973.herokuapp.com/owners el cual trae un método de búsqueda por Dni para consumir. Los metodos del servicio son los siguientes métodos:
 
- getAll():Este método llama a la api owners y trae todo los registros.
- get(dni: string):Este método llama el metodo findByDni de la api owners para buscar el owner con el dni buscado
- save(owner: any):Este método guarda el objeto owner en el servicio owners 
- remove(href: string): Este método busca el car con el href indicado y lo borra del servicio owners


## Cars Component 

Este componente está compuesto por los siguientes componente:
- cars-list:Componente encargado de listar todos los carros registrados en el servicio car,permite eliminar carros e dirigirse a la pantalla para editar o crear carros.
- cars-edit:Componente encargado de editar o crear carros con los campos id, name y owner dni siendo owner dni opcional.

## Owner Component 
Este componente está compuesto por los siguientes componente:
- owner-list:Componente encargado de listar todos los owners registrados en el servicio owner,permite eliminar uno o múltiples owner y eliminar la relación entre los carros y los owners además permite dirigirse a la pantalla para editar o crear owners.
- owner-edit:Componente encargado de editar o crear owners con los campos dni, name y profession.

## Material Component
Componente que importa todo angular material al proyecto.
