window.computeUsersStats = (users, progress, courses) => {
    for (i = 0; i < users.length; i++) {
      let userId = users[i].id;
      let userProgress = progress[userId];
  
      if (JSON.stringify(userProgress) === '{}') {
        users[i] = {
          ...users[i],
          stats: {
            percent: 0,
            exercises: { percent: 0, },
            reads: { percent: 0, },
            quizzes: {
              percent: 0,
              scoreAvg: 0,
            }
          }
        };
        continue;
      }
      let readsCompleted = 0, readsTotal = 0, scoreSumQuizz = 0, scoreAvg = 0,
        quizzCompleted = 0, quizzTotal = 0, practiceTotal = 0, practiceCompleted = 0, percent = 0;
  
      courses.forEach(element => {
          console.log(userProgress);
          if(userProgress!='undefined'){
            percent = userProgress.percent;
            console.log(userProgress.intro.units);
            const unitsValues = Object.values(userProgress.intro.units);
            unitsValues.forEach(element2 => {
            Object.values(element2.parts).forEach(element3 => {
                if (element3.type === 'read') {
                readsTotal += 1;
                if (element3.completed === 1) {
                    readsCompleted += 1;
                }
                }
                if (element3.type === 'quiz') {
                quizzTotal += 1;
                if (element3.completed === 1) {
                    quizzCompleted += 1;
                    scoreSumQuizz += element3.score;
                }
                }
                if (element3.type === 'practice') {
                practiceTotal += 1;
                if (element3.completed === 1) {
                    practiceCompleted += 1;
                }
                }
            }); // cierre de partes forEach
            });// cierre de units values forEach
        }

        users[i] = {
          ...users[i],
          stats: {
            percent: percent,
            exercises: {
              total: practiceTotal,
              completed: practiceCompleted,
              percent: Math.round((practiceCompleted / practiceTotal) * 100),
            },
  
            reads: {
              total: readsTotal,
              completed: readsCompleted,
              percent: Math.round((readsCompleted / readsTotal) * 100),
            },
            quizzes: {
              total: quizzTotal,
              completed: quizzCompleted,
              percent: Math.round((quizzCompleted / quizzTotal) * 100),
              scoreSum: scoreSumQuizz,
              scoreAvg: Math.round(scoreSumQuizz / quizzCompleted),
            }
          }
        };
      });
    }
    return users;
  };
  
  /*window.sortUsers = (users, orderBy, orderDirection) => {
    let sorted = users;
  
    if (orderBy === 'Nombre') {
      if (orderDirection === 'ASC') {
        sorted = users.sort((one, two) => one.name.localeCompare(two.name));
      }
      if (orderDirection === 'DESC') {
        sorted = users.sort((one, two) => one.name.localeCompare(two.name) * -1);
      }
    }
  
    if (orderBy === 'Porcentaje de completitud total') {
      if (orderDirection === 'ASC') {
        sorted = users.sort((one, two) => one.stats.percent - two.stats.percent);
      }
      if (orderDirection === 'DESC') {
        sorted = (users.sort((one, two) => one.stats.percent - two.stats.percent)).reverse();
      }
    }
  
    if (orderBy === 'Porcentaje de ejercicios autocorregidos completados') {
      if (orderDirection === 'ASC') {
        sorted = users.sort((one, two) => one.stats.exercises.percent - two.stats.exercises.percent);
      }
      if (orderDirection === 'DESC') {
        sorted = (users.sort((one, two) => one.stats.exercises.percent - two.stats.exercises.percent)).reverse();
      }
    }
    if (orderBy === 'Porcentaje de quizzes completados') {
      if (orderDirection === 'ASC') {
        sorted = users.sort((one, two) => one.stats.quizzes.percent - two.stats.quizzes.percent);
      }
      if (orderDirection === 'DESC') {
        sorted = (users.sort((one, two) => one.stats.quizzes.percent - two.stats.quizzes.percent)).reverse();
      }
    }
    if (orderBy === 'Puntuación promedio en quizzes completados') {
      if (orderDirection === 'ASC') {
        sorted = users.sort((one, two) => one.stats.quizzes.scoreAvg - two.stats.quizzes.scoreAvg);
      }
      if (orderDirection === 'DESC') {
        sorted = (users.sort((one, two) => one.stats.quizzes.scoreAvg - two.stats.quizzes.scoreAvg)).reverse();
      }
    }
    if (orderBy === 'Porcentaje de lecturas completadas') {
      if (orderDirection === 'ASC') {
        sorted = users.sort((one, two) => one.stats.reads.percent - two.stats.reads.percent);
      }
      if (orderDirection === 'DESC') {
        sorted = (users.sort((one, two) => one.stats.reads.percent - two.stats.reads.percent)).reverse();
      }
    }
    return sorted;
  };
  window.filterUsers = (users, search) => {
    return users.filter(function(element) { 
      return element.name.toLowerCase().indexOf(search.toLowerCase()) >= 0;
    });
  };
  window.processCohortData = (options) => {
    let coursesCohortSelect = Object.keys(options.cohort.coursesIndex);
    let userNewArray = window.computeUsersStats(options.cohortData.users, options.cohortData.progress, coursesCohortSelect);
    if (options.search !== '') {
      userNewArray = window.filterUsers(userNewArray, options.search);
    }
    userNewArray = window.sortUsers(userNewArray, options.orderBy, options.orderDirection);
    return userNewArray;
  };*/
