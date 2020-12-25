'use strict';

const weapon = {
	modifications: ['total power', 'giant bullet'],
    type: ['boom'],
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

for (let key of weapon) {
    console.log(key);
}
