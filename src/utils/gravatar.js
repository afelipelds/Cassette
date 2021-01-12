import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';
  const formattedEmail = email.trim().toLowerCase();
  const hash = md5(formattedEmail, { encoding: 'binary' }); // como no podemos enviar símbolos como el '@' debemos convertir el email a formato binario
  return `${base}${hash}`;
};

/*
 * Recursividad : Trampolines: realizan un mejor performance de procesamiento
 * para evitar al Call tail y que éste se bloquee
*/
/* const suma = (number, sum = 0) => {
  console.log('number is: ', number, 'sum is: ', sum);
  return number === 0 ? sum : () => suma(number - 1, sum + number);
};

const trampoline = func => (...args) => {
  let result = func(...args);
  console.log('result', typeof result, result);
  while (typeof result === 'function') {
    result = result();
  };

  return result;
};

const tramp = trampoline(suma);
const res = tramp(10000);
console.log('res ->', res);
 */
export default gravatar;
