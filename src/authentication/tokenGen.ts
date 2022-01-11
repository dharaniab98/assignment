import jwtToken from './jwt';

(async function generateToken() {
  const token = await jwtToken.generateToken();
  console.log({ token: token });
})();
