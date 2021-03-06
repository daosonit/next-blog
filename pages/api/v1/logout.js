import auth from '../../../utils/auth0';
import auth0 from '../../../utils/auth0';

const logout = async (req, res) => {
  try {
    await auth0.handleLogout(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}

export default logout;