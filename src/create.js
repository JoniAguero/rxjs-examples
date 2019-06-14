import { displayLog } from './utils';
import { of, interval, zip, Observable } from 'rxjs';

export default () => {
    /** start coding */

    const hello = Observable.create(function(observer){
        observer.next('Hello');
        
        setTimeout(() => {
            observer.next('World');
            observer.complete();
        }, 2000);
    })

    const observer = {
        next: x => displayLog(x),
        error: err => console.error(err),
        complete: () => displayLog('[done]')
    }

    const subscribe = hello.subscribe(observer);
    const subscribe2 = hello.subscribe(observer); // Se ejecuta
    subscribe.unsubscribe(); // No se ejecuta ea operacion asincrona por el unsubscribe

    /* const src1 = interval(300);
    const src2 = "Hello World!";
    zip(src1, src2).subscribe(x =>displayLog(x[1])); */

    /** end coding */
}