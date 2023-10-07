const result = document.querySelector('#result');

const validatePalin = () => {
  let text = document.querySelector('#text').value;
  let textCondition = text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '')
    .replace(/[,.\-]/g, '');
  let = reverseTextCondition = textCondition.split('').reverse().join('');
  let = reverseText = text.split('').reverse().join('');

  if (text == '') {
    result.innerHTML = `Digite alguma frase`;
  } else if (textCondition == reverseTextCondition) {
    result.innerHTML = `${text}<br>${reverseText}<br>  é um palindromo`;
  } else {
    result.innerHTML = `${text} <br>${reverseText} <br>  não é um palindromo`;
  }

  console.log(text.value);
};
