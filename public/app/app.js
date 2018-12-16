import { timeoutPromise, retry } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime, partialize, pipe, compose } from './utils/operators.js';


const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
)


const action = operations(() =>
    retry(3, 3000, () => timeoutPromise(1000, service.sumItems('2143')))
        .then(total => console.log(total))
        .catch(console.error)
);


document
    .querySelector('#myButton')
    .onclick = action;
