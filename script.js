let Yearbirth = Number(prompt('Введите год своего рождения'));
let Experience = prompt('Введите свой опыт работы в сфере IT');

let Age = (2020 - Yearbirth);
if(Age >= 30 && Experience >= 3) {
    alert('Вы приняты на нашу должность!!!')
} else {
    alert('К сожалению, вы нам не подходите(');
}


