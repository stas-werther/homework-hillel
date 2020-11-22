let YearBirthUser = Number(prompt('Введите год своего рождения'));
 let AgeUser = (2020 - YearBirthUser);

 if (AgeUser > 18) {
     alert('Вы допущены к сервису)');
 } else if(AgeUser < 12) {
     alert('Рекомендуем вам воспользоваться другим сервисом!');
 } else if(AgeUser !== AgeUser) {
     alert('Вы ввели не число :)');
 }
