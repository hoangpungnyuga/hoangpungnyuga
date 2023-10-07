let data = {};

if (user && user.lang === 'RUSSIAN') {
  data.welcome = `Хай, кто ты?`} else {
  data.welcome  = `Hei, whoare u?`
};

console.log(data.welcome);
