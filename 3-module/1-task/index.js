/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let user = data.filter(item => item.age <= age);
  alert(user.map(item => `${item.name} ${item.balance}, \n`));
}

showSalary(data, 21);
