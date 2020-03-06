const challengeRandom999 = Math.trunc(Math.random() * 1000);

const challengeData = {
  name: `${challengeRandom999} Количество приседаний`,
  description:
    'Каждый день Вася утром делает ровно 50 приседаний, и это количество он никогда не изменяет.\n' +
    'Сколько приседаний сделает Вася за `days` дней?',
  instruction:
    // 'Создайте константу именем `sitUps` (количество приседаний в день) и присвойте ей значение 50.\n' +
    // 'Создайте переменную с именем `days` (количество дней) и присвойте ей произвольное число от 1 до 365.\n' +
    // 'Создайте переменную `numberOfSitUps` (общее количество приседаний) и присвойте ей значение произведения\n' +
    // 'переменных `sitUps` и `days`.\n' +
    // '\n' +
    // 'Приведем пример, который принципиально похож на то что нужно сделать,\n' +
    // 'но адаптируйте его к требованиям задачи:\n' +
    // '```\n' +
    'const pencil = 10;\n' + 'const boxes = 140;\n' + 'const amount = pencil * boxes;' + '```',
  solution: 'const sitUps = 50;\n' + 'const days = 15;\n' + 'const numberOfSitUps = sitUps * days;',
  testsQuantity: 9,
  openTest:
    "it('Переменная `sitUps` существует и имеет значение', () => {\n" +
    '  expect(sitUps).not.undefined;\n' +
    '});\n' +
    '\n' +
    "it('Переменная `sitUps` является числом', () => {\n" +
    "  expect(sitUps).a('number');\n" +
    '});',
  hiddenTest:
    "it('Значение переменной `sitUps` равно 50', () => {\n" +
    '  expect(sitUps).equal(50);\n' +
    //   '});\n' +
    //   '\n' +
    // //   "it('Переменная `days` существует и имеет значение', () => {\n" +
    //   '  expect(days).not.undefined;\n' +
    //  '});\n' +
    //  '\n' +
    //  "it('Переменная `days` является числом', () => {\n" +
    //  "  expect(days).a('number');\n" +
    // '});\n' +
    //  '\n' +
    // "it('Значение переменной `days` находится в диапазоне от 1 до 365', () => {\n" +
    //  '  expect(days >= 1 && days <= 365).true;\n' +
    // '});\n' +
    // '\n' +
    // "it('Переменная `numberOfSitUps` существует и имеет значение', () => {\n" +
    //  '  expect(numberOfSitUps).not.undefined;\n' +
    // '});\n' +
    //  '\n' +
    // "it('Переменная `numberOfSitUps` является числом', () => {\n" +
    //  "  expect(numberOfSitUps).a('number');\n" +
    // '});\n' +
    // '\n' +
    // "it('Значение переменной `numberOfSitUps` вычислено верно', () => {\n" +
    // '  expect(numberOfSitUps).equal(sitUps * days);\n' +
    '});',
  language: 'JavaScript',
  level: 'Easy',
  checker: 'Unit',
};

export { challengeData };
