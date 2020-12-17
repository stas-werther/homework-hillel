const grades = {
    Junior: 'junior',
    Middle: 'middle',
    Senior: 'senior',
  };
  
  const bonuses = {
    'C++': 100,
    Rust: 150,
    default: 50,
  };
  
  const gradeTax = {
    [grades.Junior]: 0.25,
    [grades.Middle]: 0.5,
    [grades.Senior]: 0.75,
  };

  const fines = {
    lateness: 20,
    missDeadline: 30,
  };

  const listFines = {
    lateness: true,
    missDeadline: false,
  };
  
  
  function User(name, language, grade = grades.Junior) {
    this.name = name;
    this.grade = grade;
    this.salary = 1000;
    this.language = language;
    this.tasks = 0;
    this.finishTasks = 0;
  
    this.addTask = () => {
      this.tasks++;
    };
  
    // Метод upgrade
    this.upgrade = function () {
      if(this.finishTasks >= 5 && this.finishTasks < 10 ) {
        this.grade = grades.Middle;
        console.log('Ваш уровень Middle!');
      } else if (this.finishTasks >= 10) {
        this.grade = grades.Senior;
        console.log('Ваш уровень Senior, самый высокий!)');
      } else {
        this.grade = grades.Junior;
        console.log('Недостаточно выполненных задач, ваш уровень Junior!');
      }
    };

    // Метод fine
    this.fine = function() {
      for (let key in listFines) {
        if (listFines[key]) {
          this.salary -= fines[key];
          console.log(`Ваш штраф ${fines[key]} за ${[key]}`);
        } else if (listFines[key] == false) {
          console.log(`У вас нет штрафов за ${[key]})`);

        }
      }
    };
       

    this.finishTask = () => {
      if (this.tasks > 0) {
        this.tasks--;
        this.finishTasks++;
        this.salary +=
          (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
      }
    };
  }
  
  const user = new User('John', 'C++', grades.Junior);
  const user1 = new User('Vasya', 'Rust', grades.Senior);
  const user2 = new User('Nifertiti', 'Bu', grades.Middle);
  
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();

  
  user.finishTask();
  user.finishTask();
  user.finishTask();
  user.finishTask();
  user.finishTask();
  user.finishTask();
  user.finishTask();
  user.finishTask();
  user.finishTask();
  


  user.upgrade();
  user.fine();