const magicBook = {
    recipes: {
        golem: {
            bone: 10,
            stone: 100,
            nail: 100,
            poo: 53
        },
        littleDevil: {
            lava: 10,
            evil: 999
        },
    },
};

const kitchen = {
    bone: 999,
    stone: 999,
    nail: 999,
    poo: 999,
    lava: 999,
    evil: 999,
    kettle: { 
        material: 'metal',
        ingridients: {},
    },
    addIngridientToKettle(nameOfIngridient, amount) {
        this[nameOfIngridient] -= amount;
        this.kettle.ingridients[nameOfIngridient] =
        this.kettle.ingridients[nameOfIngridient || 0] + amount;
    },
    cook(recipe) {
        let couldBeCooked = true;
        for(let key in recipe) {
            const neededAmountOfIngridients = recipe[key];
            if (
                !this.kettle.ingridients[key] ||
                this.kettle.ingridients[key] < neededAmountOfIngridients
            ) {
                couldBeCooked = false;
                break;
            }
        }
        
        if (couldBeCooked) {
            console.log('Could be cooked');
        } else {
            console.log('Not enugh ingridients');
        }
    },
};

kitchen.addIngridientToKettle('bone', 10);
kitchen.addIngridientToKettle('stone', 100);
kitchen.addIngridientToKettle('nail', 100);
kitchen.addIngridientToKettle('poo', 53);

kitchen.cook(magicBook.recipes.golem);