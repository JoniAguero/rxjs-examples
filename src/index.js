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

//run stuff
reduceScanOperators();