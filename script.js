let calculations = {
    salarySum: function() {
      return this.reduce(function(acc, next) {
        return acc + next;
      }, 0);
    },
    logName: function() {
      this.forEach(function(user) {
        console.log(user.name);
      });
    },
    findUsersByIds: function(ids) {
      return this.filter(function(user) {
        return ids.find(function(id) {
            return user.id === id;
        })
      });
    }
  };
  
  let users = [
    {
      id: 1,
      name: "User 2",
      salary: 200
    },
    {
      id: 2,
      name: "User 3",
      salary: 200
    },
    {
      id: 3,
      name: "User 4",
      salary: 200
    }
  ];
 calculations.logName.call(users);
 
 let salaryUsers = users.map((element) => element.salary);
 console.log(calculations.salarySum.call(salaryUsers));

 console.log(calculations.findUsersByIds.call(users, [1,2,3]));