import { displayLog } from '../src/utils';
import { from, range, of } from 'rxjs';

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