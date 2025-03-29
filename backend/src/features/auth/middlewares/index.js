import express from 'express';

export function protectRoute() {
  // TODO: Add middleware for authorization
  return (req, res, next) => {
    next();
  };
}
