import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


/*
import * as calculator from './calc';
console.log(calculator);
*/

/* import * as calculator from './calc';
//const add = calculator.add;
const { add } = calculator; */

/* import { add } from './calc';
console.log(add(10,20)); */

/*
import calc from './calc';
console.log(calc);


*/