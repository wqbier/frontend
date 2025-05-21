const users = [
  {
    name: "Олена",
    age: 20,
    city: "Харків",
    favoriteColors: ["синій", "фіолетовий", "білий"],
    isStudent: true,
    grades: [95, 88, 92, 85],
  },
  {
    name: "Іван",
    age: 25,
    city: "Київ",
    favoriteColors: ["зелений", "чорний"],
    isStudent: false,
    grades: [70, 65, 60, 75],
  },
  {
    name: "Марія",
    age: 19,
    city: "Львів",
    favoriteColors: ["жовтий", "рожевий", "сірий"],
    isStudent: true,
    grades: [58, 62, 55, 40],
  },
];

const greet = (user) => console.log(`Привіт, ${user.name}!`);
const average = (arr) => arr.reduce((s, n) => s + n, 0) / arr.length;
const gradeLevel = (avg) =>
  avg >= 90 ? "Відмінно" : avg >= 70 ? "Добре" : "Задовільно";
const colorsString = (colors) => colors.join(", ");
const needRetake = (grades) => grades.some((g) => g < 60);
/* Стрілочні функції */
const sq = (x) => x ** 2;
const cube = (x) => x ** 3;
const percentOfMax = (v, max = 100) => ((v / max) * 100).toFixed(1);

function processUser(user) {
  greet(user);

  const avg = average(user.grades);
  const level = gradeLevel(avg);
  const colors = colorsString(user.favoriteColors);
  const msg = needRetake(user.grades) ? "Потрібна перездача" : "Хвостів немає";

  console.log(`Ім'я: ${user.name}
    Місто: ${user.city}
    Студент: ${user.isStudent}
    Середній бал: ${avg.toFixed(1)} — ${level}
    Улюблені кольори: ${colors}
    ${msg}`);

  console.log(`  ↳ квадрат віку:           ${sq(user.age)}`);
  console.log(`  ↳ куб першої оцінки:      ${cube(user.grades[0])}`);
  console.log(`  ↳ % середнього від 100:   ${percentOfMax(avg)}%\n`);
}

for (let i = 0; i < users.length; i++) {
  if (users[i].name === "Олена") {
    processUser(users[i]);
    break; 
  }
}

console.log();
for (const user of users) {
  if (user.name === "Іван") {
    processUser(user);
    break;
  }
}

console.log();
users.forEach((user) => {
  if (user.name === "Марія") {
    processUser(user);
  }
});
