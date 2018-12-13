import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil } from './utils/operators.js';

const operation = takeUntil(3, () => 
        service
            .sumItems('2143')
            .then(total => console.log(total))
            .catch(console.error)
)



document
    .querySelector('#myButton')
    .onclick = operation;
        