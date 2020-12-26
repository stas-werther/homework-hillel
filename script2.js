'use strict';

const weapon = {
	modifications: ['total power', 'giant bullet'],
    type: ['boom', 'boom','boom'],
    [Symbol.iterator]() {
        const values = Object.values(weapon);
        return {
            next() {
                const done = !values.length;
                const nextValue = values.shift();

                return {
                    value: nextValue,
                    done,
                };
            },
        };
    },
};

function unique(arr) {
    return Array.from(new Set(arr));
}

for (let v of weapon) {
    console.log(unique(v));
};








