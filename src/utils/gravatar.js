import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';
  const formattedEmail = email.trim().toLowerCase();
  // como no podemos enviar símbolos como el '@' debemos convertir el email a formato binario
  const hash = md5(formattedEmail, { encoding: 'binary' });
  console.log(hash);
  return `${base}${hash}`;
};

export default gravatar;
