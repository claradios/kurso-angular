# KursoAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# ANGULAR
### Por qué angular (lo preguntan en entrevistas)
En el 2014 hubo una especie de revolución. Google saca *Dart* con *Polymer* que fueron muy bien recibidos. Al ser sólo de google había una incompatibilidad ocn los otros navegadores. Al llevarlo a hacer compatible salieron los *webcomponents*. Antes se hacía en Java con *custom tags*. Esto era un infierno porque había que concatenar dentro de java strings. Al ser el estándar los webcomponents es mucho más facil. No se casan con tecnología propietaria.

#### Define 4 apis. 

    - podemos crear nuestras propias etiquetas html (siempre con un guión porque se han comprometido a que los no customs no tengan guión)
    - HTML imports. L tecnología que te permite meter un html dentro de otro html aunque está deprecated ya.
    -templates: Me permite crear el componente offline y hasta que javascript no lo mete en el arbol del DOM el navegador no lo renderiza.
    -Shadow DOM: La tecnología que permite encapsular el web component para que no se va afectado por el DOM general de la página a menos que se lo digamos. 
    - Programación reactiva: RxJS (en ángular es parte del core del framework) es lo que me permite hacer aplicaciones que ante un evento de usuario provoquen un evento en cualquier otro sitio de la aplicación (que no sea estar llamando al servidor para refrescar la página todo el rato). 

    Es un framework que aprovecha todo el estándar de programación reactiva y webcomponents. Vue o React lo usan pero se lo tienes que añadir, angular lo tiene en el core.

#### Simplicidad

Es muy fácil que seas productivo desde el principio en un proyeco montado en angular. La simpmlicidad es respecto a angularJS.

Por qúe cambió de angularJS (que lo usaba todo el mundo) y dejan de darle soporte y pasan a angular2. Es por los webcomponents que salieron en el 2014, angularJS imitaba el comportamiento de los webcomponents nativos pero a costa de que empeoraba mucho el rendimiento. Ya todos los navegadores tienen soporte de webcomponents.
Esto estigmatizó a angularJS y muchos temen que vuelva a pasar que apuesten por algo y le dejen de dar soporte. Pero se entiende que al estar dentro del estándar ya no va a haber un cambio tan sumamente radical.

#### Rendimiento optimo

Como mejora para el rendimiento tiene *ahead of time compilation* . El bundle es lo que genera tu aplicación que es lo que llevas a un servidor web para que se levante tu aplicación. TIene que ser lo más pequeño posible. *ELIMINAR LOS IMPORTS QUE NO SE ESTÉN UTILIZANDO*. Configurar el id para que cuando salves te elimine automáticamente todos los que no estés utilizando.  Con *angular 9* lo que tu tienes en desarrollo es lo que tienes en producción, es una mejora en este aspecto.

#### Lazy Loading
Descarga cosas a medida que vas trabajando con la aplicación. *No caga todo el bundle de golpe*, sino que *carga el principal* y luego está *dividido en chunks* que se van cargando o no si se necesitan.

#### Inyección de dependencias
Los mismos conceptos de front se pueden pasar a ui , a back (con NESTJS)
Estamos trabajando de por si con inyección de dependencias que mejora todo el rendimiento del testing.

#### Mejoras en el SEO
La araña de google no se lleva bien con las SPA, como hay un proceso de carga, cuando llega la araña no se ha cargado la aplicación y no le da buen posicionamiento. Por esto *angular universal*, hace que devuelva html lo primero para poder ser detectado en esa búsqueda.

#### Internet de las cosas y la web física
Se puede usar para mazo cosas 

# CONCLUSIONES
- Está destinada a SPA. (vue es mejor para hacer cosas por encima de cosas, pero para hacer aplicaciones SPA con todo el marco: ANGULAR)
- aprovecha TODOS los estándares de la W3C
- permite tener código único en multidispositivos
- tiene un codigo más simple y rendimiento optimo.
- permite tener todo nuestro código bajo una red de seguridad de test y un marco de integración y despliegue continuo.
- su flexibilidad nos permite interactuar con cualquier tipo de dispositivo.

#### ENTORNO DE DESARROLLO

- git 
- NodeJS y npm
- Angular-cli
- Visual Studio Code
- Chrome

Extensiones intersantes:
- TSLint
- Angular Language Service
- bma-coverage by brunomartens
- Import Cost by wix (opcional)

El Angular Cli es nuestra herramienta para gestigionar nuestros proyectos.
`ng new nobre-proyecto`
`ng serve`
`ng test`
`ng test --browsers ChromeHeadless` (los vemos directamente en la terminal sin que se abra el navegador)
`ng test --code-coverage` (la cobertura)
`ng e2e` (test de aceptación end to end)
`ng g tipo ocpiones`
`ng lint` (ver si cumple con las reglas de estilo, es mejor no tocar las que vivenen por defecto. Como tenemos ts lint se visualiza)

Añadimos esto en *Visual CODE* > SETTINGS > settings-json:
```js
"editor.codeActionsOnSave": {
        "source.organizeImports": true,
        "source.fixAll.tslint": true
        }  
```
`ng update --all` Actualizar las dependencias. Esto te ayuda a no meter la pata. Es impmortante tener la última versión de las cosas para evitar problemas de seguridad.

## evitar conflictos
a través de los scripts de npm que están en el package.json de la aplicación, tenemos los scrpits que se pueen ejecutar:
```js
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  }
```

Si decimos `ng generate component foo` es peor que si decimos
`npm run ng -- generate component foo` (si lo haces de esta manera evitas conflictos entre versiones)

en lugar de `ng serve`, haríamos `npm run ng -- serve`



` npm install -g remove-node-modules` (cuando no los necesites)

*.gitkeep*:fichero que se pone para poder subir al control de versiones la carpeta *assets* pese a que esté vacía.

*index.html* NO ES LA APLICACIÓN. Tu aplicación es app root. el index.html te permite ver tu aplicación (carga el bundle, pero no es el bundle)

*main.ts* es el fichero principal de angular que le permite arrancar la aplicación.
*polyfills.ts* fichero que hace que funcione en navegadores donde no esté intsaurado el standard aún.
*styles.css*: hoja de estilo general de toda la aplicación ( se suele usar para las variables css)
*.editorconfig*: fichero que permite que todos desarrollamos de la misma manera (espacios y tal)

## MÓDULOS

Una aplicación tiene que tener un módulo principal, si no no arranca. 
Los vamos a identificar con el decorador `@NgModule`. Lo podemos definir ocn un objeto json que pueden tener las siguientes propiedades:

- *providers*: donde van a existir las clases o los servicios que vamos a poder inyectar
- *declarations*: los componentes, pipes y directivas que están dentro de este módulo.
- *imports*: son SÓLO para módulos. (NO METAS PIPES NI SERVICIOS NI MIERDA AHÍ, ni cosas que no usas)
- *exports*: directivas, pipes etc que voy a poder usar fuera del módulo.
- *entry components* : tienen que estar ahí los components que vayan a estar en el arranque (con angular9 ya no hace falta)
- *bootstrap* : define la lista del o los componente principales del módulo. Por defecto si está en boostrap está en entry components 
- *schemas*: se utiliza para definir propiedades que no son de Angular, por ejemplo, para incluir web compoents de terceros indicamos la propiedad: `[CUSTOM_ELEMENTS_SCHEMA]`

Tenemos un módulo principal y podemos tener n módulos secundarios organizados por funcionalidad (el módulo de users, el módulo de admins, el módulo de auth....)

## Cómo arranca la aplicación:

Cuando arranca con `ng serve`
Primero llamamos a `main.ts` y ahí llama al compoente de arrance guardado en `boostrap` que por defecto será `AppModule`, el módulo principal. Que sí o sí necesita la declaración de boostrap.
En el `index.html` necesitamos tener la etiqueta `<app-root>` y ahí sustituye esa etiqueta por el html asociado al componente principal.
Si cualquiera de estas piezas no está no funciona la aplicación


## Qué cosas pueden estar dentro de nuestro módulo.
Un componente es una clase.
Está montada con el decorador `@Component`. Siempre tiene:

- *selector*: define el nombre de la etiqueta HTML a la que vamos a hacer referencia
- *template o templateURL*: el código HTML que envuelve

Los componentes tienen un *CICLO DE VIDA* propio (no cumple con el estándar) del cual podemos hacer hook y meter código gracias a estas funciones:

- *OnChanges* (ngOnChanges)
- *OnInit* (ngOnInit) ahí se van hacer las inicializaciones del compoennetes. El constructor no lelvará código. Si hay que hacer algún tipo de inicialización se hace aquí.
- *OnDestroy*(ngOnDestroy): cuando salga del arbol DOM (se ejecuta al dejar de ver el componente)

## DIRECTIVAS DE ATRIBUTO
Son un tipo de directiva sin template que se utiliza para cambiar la apariencia o el compomrtamiento de un elemento del DOM. Angular proporciona varias de serie como: 

*ngClass*:
 `<div [ngClass]="{active: errorCount>0, inactive:ererorCount=0}>Contenido</div>`
 Cuando es una única condición es preferible usar *class Binding* en lugar del json:
 `<div [class.special]="isSpecial"></div>`

*ngStyle*: 
`<h1 [ngStyle]="{'font-style': style, 'font-size': size, 'font-weight': weight}">Contenido</h1>`
Cuando se trata de un único atributo:
`<div [style.fontSize]="isSpecial ? 'x-large' : 'smaller'">Contenido</div>`
*ngModel*:


## DIRECTIVAS ESTRUCTURALES
Son el tipo de directivas que alteran el contenido del componente pudiendo aadir , eliminar o reemplazar elementos del DOM

*ngIf*: muestra o no muestra un elemento del DOM

```js
<div *ngIf="errorCount > 0" class="error">
{{errorCount}} errors detected
</div>
```

Si hay varias condiciones hacemos así:

```js
<div *ngIf="errorCount == 0; then ok else error"></div>
<ng-template #ok>No errors</ng-template>
<ng-template #error>
{{errorCount}} errors
</ng-template>
```

*ngSwitch*

<div [ngSwitch]="value">
<p *ngSwitchCase="'init'">increment to start</p>
<p *ngSwitchCase="0">0, increment again</p>
<p *ngSwitchCase="1">1, increment again</p>
<p *ngSwitchCase="2">2, stop incrementing</p>
<p *ngSwitchDefault>< 2, STOP!</p>
</div>

*ngFor*
bucles
- index: devuelve número de iteración que se esta procesando
- last: devuelve un boolean indicando si es o no el último elemento de la iteración.
- even: devuelve boolean indicando si index tiene valor par
- odd devuelve boolean indicando si index tiene valor impoar.

<ul>
<li *ngFor="let item of items; let i = index; let o = odd;
let l = last; let e = even">
{{i}} {{item}}
</li>
</ul>

## PRÁCTICA 1
- creamos un módulo llamado directivas con 
`npm run ng -- g module directivas`
- dentro creamos el componente "example directive" con 
`npm run ng -- g component directivas/example-directivas`

## PIPES
Sus lógicas aplican a los templates. Se utilizan para hacer transformación de datos dentro del propio template sobre la forma de visualización de los datos en la vista.
por ejemplo tiene pipes par alas fechas. 

### fechas
`DatePipe: date_expression | date[:format[:timezone[:locale]]]`

{{today | date:'medium'}} //Oct 10, 2017, 5:33:09 PM
{{today | date:'yyyy-MM-dd'}} //2017-10-10

No convierte la fecha a string sino que altera su visualización pero no su esencia.


### decimales
`DecimalPipe: number_expression | number[:digitInfo[:locale]]`
{{today | date:'yyyy-MM-dd HH:mm a z':'+0900'}} //2017-12-08 08:20 AM GMT+9
{{today | date:'medium':'+0900':'fr'}}


### currency
`CurrencyPipe: number_expression | currency[:currencyCode[:display[:digitInfo[:locale]]]]`
{{34.68 | currency:'EUR':'code'}} //EUR34.68
{{34.68 | currency:'EUR':'symbol':'1.2-2':'es'}} //34,68€

### porcentaje
`PercentPipe: number_expression | percent[:digitInfo[:locale]]`
{{34.68 | percent}} //3.468%
{{34.68 | percent:'es'}} //3,468%

### uppercase

`UpperCasePipe: string | uppercase`
{{'Texto de prueba' | uppercase}} //TEXTO DE PRUEBA


### messages
`I18nPluralPipe: expression | i18nPlural:mapping[:locale]`
```js
-- En la clase de negocio
messages: string[];
messagesMapping: {[key: string]: string};

ngOnInit() {
this.messages = [];
this.messagesMapping = {'=0': 'No hay mensajes',
'=1': 'Tienes un mensaje',
'other': 'Tienes # mensajes'};
}
-- En el template
{{messages.length | i18nPlural:messagesMapping}} //No hay mensajes
```

### PIPES PROPIOS

creamos una clase con la decoracíon @pipe, donde lo definimos y luego al usarlo en un componente utilizaremos obligatoriamente *name* que lo identifique y un *pure* que será true o false.

```js
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
name: 'decorator', pure: true
})

export class DecoratorPipe implements PipeTransform {
  transform(value: string, dec: string):string{
  return dec + value + dec
  }
}
```
Y para utilizarlo:
```js

@Component({
selector: 'app',
template: `Texto: {{texto | decorator:'**'}}` //**Angular**
})

export class App implements OnInit {

texto: string;

ngOnInit(){
this.texto = 'Angular';
}
}
```
OJO: SI CREAS UN PIPE Y NO ESTÁ DENTRO DEL DECLARATION DE NINGÚN MÓDULO

vamos a creear un módulo pipes
`npm run ng -- g module pipes`
ahora creamos un pipe llamado decorator dentro
`npm run ng -- g pipe pipes/decorator`

vamos a crear un modulo databinding
`npm run ng -- g module databinding`
con dos componentes
`npm run ng -- g component databinding/mother`
`npm run ng -- g component databinding/child`
crear un servicio
`npm run ng -- g service first`

## DATA BINDING
se prefiere un data binding completamente unidireccional: del template a la lógica, de la lógica al template.

Hay varios:

### INTERPOLACIÓN:
```js
@Component({
selector: 'interpolation',
template: `<p>
My favourite number is {{myNumber}}
</p>`
})

export class MyFavouriteNumberComponent{
myNumber:number = 11;
}
```

### PROPERTY BINDING: ELEMENT PROPERTY
```js

@Component({
selector: 'element-property',
template: `<p [innerHTML]="'My favourite number is ' + myNumber"></p>`
})
export class MyFavouriteNumberComponent{
myNumber:number = 11;
}
```
### PROPERTY BINDING: DIRECTIVE PROPERTY

```js
// cuando usamos ngIf sin *
<template [ngIf]="errorCount > 0">
<div class="error">
{{errorCount}} errors detectados
</div>
</template>
// o como hemos visto cuando implementábamos la directiva propia highlight,

<h1 [appHighLight]="'blue'">Se resalta en azul</h1>
// o cuando hacemos ngClass o style binding:

<div [style.fontSize]="isSpecial ?'x-large' : 'smaller'" >
Contenido
</div>
```
### PROPERTY BINDING: COMPONENT PROPERTY
```js
//INFO DE MADRES A HIJAS
```

# SERVICIOS E INYECCIÓN DE DEPENDENCIAS

El *inyector* lo que hace es crear la caja de *providers* que pueden ser inyectados a través del *constructor*.
El constructor se utiliza básicamente para esto.

- Poniéndole en el módulo principal puedo usarlo en todos los otros componentes.

- Si no lo declaro arriba del todo sino dentro de un compomente. Ese elemento inyectado sólo podrá ser utilizado en los elementos que cuelgan de ese arbol.

- los servicios llevan el decorador *@Injectable()*

- La localización siempre es de abajo a arriba. Por eso si los declaro arriba del todo siempmre los va a encontrar. (es decir, se mira desde el componente donde se inyecta, hacia arriba, al padre si no lo encuentra, al padre etc..)

Cómo declaramos un provider: lo más sencillo es con @Injectable()
```js

import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class ExampleService {

constructor() { }

}
```
Además puedo meter a través de este servicio, mediante el constructor, más servicios.

Para crear un servicio: 
`npm run ng -- g service first`


# ROUTER
La configuración del router. Vamos a tener primero un objeto con mi ruta principal y una ruta ** que es cuando no encuentra ninguna ruta. Ahí hace un redirect.
```js
const ROUTES: Routes = [
{ path: '', redirectTo: 'tutoriales', pathMatch: 'full' },
{ path: '**', redirecTo: 'tutoriales'}
];
```
Este objeto se lo pasamos a :
```js
@NgModule({
imports: [
BrowserModule,
TutorialesModule,
RouterModule.forRoot(ROUTES)
]
})
```
### configuración del router en el módulo secundario.
(directivas: /directivas)
```js
const ROUTES: Routes = [
{ path: 'tutoriales', component: TutorialesComponent},
{ path: 'tutoriales/:id', component: TutorialesDetailComponent}
];

@NgModule({
imports: [CommonModule, RouterModule.forChild(ROUTES)]
})
```

## LAZY LOADING
Para poder cargar los módulos por lazy loading, tenemos que entender que los módulos funcionan de forma independiente. 
Los módulos secundarios parten del vacío en lugar de un path específico.
Cargamos el módulo a traves de la propiedad *loadChildren* para esto. 

A través del router que ya es provider de por si podemos inyectarlo en el constructor usando "private" y llmarar a un trozo de código.

Crear un servicio que te lleve de databinding a directivas.
Un botón en databinding que llame a ese servicio y utilice el router para mostarr directivas.


Vas al modulo de databinding y vamos a configurar la ruta para que pueda admitir esa variable dinámica y recuperarla en el hijo para que pueda mostrarla en el template.
