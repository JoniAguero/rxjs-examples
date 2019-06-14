import { displayLog } from './utils';
import { of, interval, zip, Observable } from 'rxjs';

export default () => {
    /** start coding */

    const hello = Observable.create(function(observer){
        observer.next('Hello');
        observer.next('World');
    })

    const subscribe = hello.subscribe( e => displayLog(e) )

    /* const src1 = interval(300);
    const src2 = "Hello World!";
    zip(src1, src2).subscribe(x =>displayLog(x[1])); */

    /** end coding */
}