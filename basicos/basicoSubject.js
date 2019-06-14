 // Ejemplo de Subjects
const {interval, Subject} = require('rxjs');
const {map} = require('rxjs/operators');

const observable = interval(1000).pipe(map(x => Math.random(x)));

const subject = new Subject();
observable.subscribe(subject);

// Diferentes observables 
const o1 = observable.subscribe(x => console.log("[obs1]", x));
const o2 = observable.subscribe(x => console.log("[obs1]", x));

// Mismos observables por subscribe
const s1 = subject.subscribe(x => console.log("[subj1]", x));
const s2 = subject.subscribe(x => console.log("[subj2]", x));

setTimeout(() => {
    o1.unsubscribe();
    o2.unsubscribe();
    s1.unsubscribe();
    s2.unsubscribe();
}, 4000);