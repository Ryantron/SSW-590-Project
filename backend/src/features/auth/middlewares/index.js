export function protectRoute() {
  // TODO: Add middleware for authorization
  return (req, res, next) => {
    next();
  };
}
