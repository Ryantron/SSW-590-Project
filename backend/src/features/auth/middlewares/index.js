export function protectRoute() {
  // TODO: Add middleware for authorization
  return (req, res, next) => {
    console.log('Protect Route: Checking if user is logged in...');
    if (req.session.isLoggedIn != true) {
      console.error('User is not logged in');
      res.status(401).send('User not logged in');
      return;
    } else {
      next();
    }
  };
}
