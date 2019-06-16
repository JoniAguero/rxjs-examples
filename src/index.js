//import stuff
import example from './create';
import {
    fromOperator,
    ofRangeOperator, 
    intervalTimerOperators,
    fromEventOperators
} from '../operators/creacion';

import {
    mapFilterOperators,
    reduceScanOperators
} from '../operators/funcionales';

import {
    shareOperators
} from '../operators/share';

//run stuff
shareOperators();