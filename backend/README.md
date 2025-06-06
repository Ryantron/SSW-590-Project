# Backend
API Server for handling blogs

To run dev:
- Get inside: `cd backend`
- `npm ci`
- Copy `.env.example` and rename it to `.env`
- Run mongodb either natively or through docker (using the `docker-compose.yml` file in `backend/`)
  - For ease of testing, set username to `admin` and password to `password`. 
    - If you want to use a different username and password, make sure you change the values in `.env` accordingly.
- `npm run dev`


## Project Structure
- `src/`
  -  `app/`
     -  `index.js` - entry file
     -  `app.js` - expose ExpressJS app here
     -  `routing.js` - may be needed if there is too many middleware and routing code to be left in `app.js`
  -  `helpers/` - code that is executed before tests
  -  `features/` - main part of the app
     -  `(featureA)/` - a specific feature, e.g. authorization
        -  `configs/` - featureA-specific configuration
        -  `data/` - featureA-specific logic code
        -  `middlewares` - featureA-specific middleware code
        -  `routes/` - featureA-specific routes
        -  `validations/` - featureA-specific validations
        -  `utils/` - featureA-specific utilities
  -  `shared/` - code shared between all of the features
     -  `configs/` - shared configurations like API Key, version numbers, URI for AWS and MongoDB Atlas, etc.
     -  `data/` - shared logic-focused code
     -  `middlewares` - shared middleware code
     -  `validations/` - shared validation code
     -  `utils/` - shared utility code / helper functions
  -  `testing/` - directory used for storing code related to testing
     -  TBC
-  `tasks/` - tasks that are run outside of the server code
   -  `seed/` - seed database and other services
      -  TBC
   -  `test/` - run tests
      -  TBC

### Additional Rules
- `app/` can access `features/` and `shared/`.
- `helpers` can access `app/`, `features/`, and `shared/`
- `features/` can only access `shared/`.
- `shared/` can not access any other directories/folders.
- `int.test` files can access `app.js`