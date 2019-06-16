import { fromEvent } from 'rxjs';
import { map, tap, mapTo, filter, reduce, scan } from 'rxjs/operators';

export const mapFilterOperators = () => {
    const myDivPadre = document.getElementById('container-padre');
    const sourceMap$ = fromEvent(myDivPadre, 'click').pipe(
        map(evt => [evt.clientX, evt.clientY]),
        tap(evt => console.log(evt)),
        filter(evt => evt[0] > 300)
    )

    const sourceMapTo$ = fromEvent(myDivPadre, 'click').pipe(
        mapTo('Click')
    )

    const subscription = sourceMap$.subscribe(event => {
        console.log(`click event Map (${event})`)
    })

    const subscription2 = sourceMapTo$.subscribe(event => {
        console.log(`click event MapTo (${event})`)
    })
    setTimeout(() => {
        console.log(`SetTimeout > 3000`)
        subscription2.unsubscribe();
    }, 3000);
    
}

export const reduceScanOperators = () => {
    const myDivPadre = document.getElementById('container-padre');
    /* const sourceReduce$ = fromEvent(myDivPadre, 'click').pipe(
        map(evt => evt.clientX),
        tap(evt => console.log('tap:', evt)),
        reduce((acc, val) => {
            console.log('acc', acc);
            console.log('val', val); 
            return acc + val;
        })
    )
    const subscription = sourceReduce$.subscribe(event => {
        console.log(`click event Map (${event})`)
    }) */
    const sourceScan$ = fromEvent(myDivPadre, 'click').pipe(
        map(evt => evt.clientX),
        tap(evt => console.log('tap:', evt)),
        scan((acc, val) => {
            console.log('acc', acc);
            console.log('val', val);
            return acc + val;
        })
    )
    const subscription = sourceScan$.subscribe(event => {
        console.log(`click event Map (${event})`)
    })
}