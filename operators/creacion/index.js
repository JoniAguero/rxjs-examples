import { displayLog } from '../../src/utils';
import { from, range, of, interval, timer, fromEvent } from 'rxjs';

export const fromOperator = () => {
    const myArray = [1, 2, 3, 4, 5];
    const myString = 'Hello World';
    const myPromise = new Promise(resolve => {
        setTimeout(() => {
            resolve('Hello world')
        }, 2000);
    })
    const observable = from(myPromise);
    const subscription = observable.subscribe(e => displayLog(e))
    subscription.unsubscribe();
}

export const ofRangeOperator = () => {
    const myArrayNum = range(3, 10);
    const myArrayDiffObjs = of(
        'Hello world',
        {foo: 'bar'},
        function sayHello(){
            return 'Hi'
        }
    );
    const subscription = myArrayDiffObjs.subscribe(e => displayLog(e));
    subscription.unsubscribe();
}

export const intervalTimerOperators = () => {
    const myInterval = interval(400);
    const subscription = myInterval.subscribe(e => displayLog(`Interval - ${e}`));
    timer(3000).subscribe( () => subscription.unsubscribe() );

    const myTimer = timer(4000, 1000);
    const subscription2 = myTimer.subscribe(e => displayLog(`Timer - ${e}`));
    timer(7000).subscribe(() => subscription2.unsubscribe());
}

export const fromEventOperators = () => {
    const myButton = document.getElementById('myMButton');
    const source = fromEvent(myButton, 'click');

    source.subscribe(event => {
        displayLog(`click event at pos (${event.x}, ${event.y})`)
    })
}