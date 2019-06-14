 // Ejemplo de Observers
const {interval} = require('rxjs');
const {map} = require('rxjs/operators');

const observable = interval(1000);
const observable2 = observable.pipe(map(x => Math.random(x)));
const subscription = observable2.subscribe(x => console.log(x));

setTimeout(() => {
    subscription.unsubscribe();
}, 4000);