import { fromEvent } from 'rxjs';
import { share, map, tap } from 'rxjs/operators';

export const shareOperators = () => {
    const div = document.getElementById('container-hijo');
    const sourceMap$ = fromEvent(div, 'click').pipe(
        map(evt => [evt.clientX, evt.clientY]),
        tap(evt => console.log(` ****** ESTO SE COMPARTE ****** ${evt}`))
    )

    const subscription = sourceMap$.subscribe(event => {
        console.log(`NOT SHARED (${event})`)
    })
    const subscriptio2 = sourceMap$.subscribe(event => {
        console.log(`NOT SHARED (${event})`)
    })

    const sharedExample = sourceMap$.pipe(share());

    const subscribeThree = sharedExample.subscribe(val => console.log(`SHARED (${val})`));
    const subscribeFour = sharedExample.subscribe(val => console.log(`SHARED (${val})`));
    
}