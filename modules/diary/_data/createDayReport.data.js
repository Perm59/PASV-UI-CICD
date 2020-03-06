const createDayReport = {
    h1: 'Create day report',
    checkMarksTitle: 'Marks to your daily report'
};

const instructionsToCheckMarks= {
    instructionToNeedHelp: 'Describe what difficulties you have, we will contact you and help',
    instructionToUnderstoodEverything: 'It means that you are not experiencing difficulties and understand',
    instructionToHelpedClassmates: 'Specify to whom and on what topic you helped'
};

const howWasYourDayInputs = [
    '&-+=87900-=%$#@!&*((((((((((()',
    'орплорпвылыплпфрвпфровпофпрфпрфпыр',
    'QWERTYUIOPASDFGHJKLZXCVBNMQWERT',
    'Khaskjfhajkdhajdhsajhjahjahjkhjkahfjkahkjahsjkhjkfhfjkdhjkahdkjahjkf' +
'hajfhadjkhfjhafjhakjfhadjhfjkahdfjkhjksncknsjvajnhfjahshaldhlafhlakhdlfaafl;huohrfdjkkkkkkkkkkkkk' +
'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk kjKhaskjfhajkdhajdhsajhjahjahjkhjkahfjkahkjahsjkhjkfhfjkdhj' +
'kahdkjahjkfhajfhadjkhfjhafjhakjfhadjhfjkahdfjkhjksncknsjvajnhfjahshaldhlafhlakhdlfaafl;huohrfdjkk' +
'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkKhaskjfhajkdhajdhsajhjahjahjkhjkahfjkahkjahsjkhjk' +
'fhfjkdhjkahdkjahjkfhajfhadjkhfjhafjhakjfhadjhfjkahdfjkhjksncknsjvajnhfjahshaldhlafhlakhdlfaafl;huo' +
'hrfdjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkKhaskjfhajkdhajdhsajhjahjahjkhjkahfjkahkjahsjk' +
'hjkfhfjkdhjkahdkjahjkfhajfhadjkhfjhafjhakjfhadjhfjkahdfjkhjksncknsjvajnhfjahshaldhlafhlakhdlfaafl;' +
'huohrfdjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk', 'practiced code, read documentation', 'qwertyuiopasdfghjklzxcvbnmqwer'
 ]; //5 scenarios: symbols &numbers, Russian alphabet text, capital letters, large text, 30-character text

const hoursStudiedInputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    //all positive scenarios: any number from 0 to 10;

const hoursStudiedInputsInvalid = ['восемь', '11', '111'];
// 3 negative scenarios: number entered as a word; two-digit number greater than 10; three digit number;


const howWasYourDayInputsInvalid = ['qwertyuiopasdfghjklzxcvbnmqwe']; //1 scenarion for now: 29-character text entered


export { createDayReport, instructionsToCheckMarks, howWasYourDayInputs, hoursStudiedInputs, hoursStudiedInputsInvalid, howWasYourDayInputsInvalid };