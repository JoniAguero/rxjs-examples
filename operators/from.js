import { displayLog } from '../src/utils';
import { from } from 'rxjs';

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

}