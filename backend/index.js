
/*
* Auto generated Codehooks (c) example
* Install: npm i codehooks-js codehooks-crudlify
*/
import {app, Datastore} from 'codehooks-js'
import {crudlify} from 'codehooks-crudlify'
import {object, string, boolean, date} from 'yup';
import jwtDecode from 'jwt-decode';

const TodoYup = object({
  userId: string().required(),
  item: string().required(),
  category: string().required(),
  content: string().required(),
  created: date().default(() => new Date),
  done: boolean().default(false),
})

const userAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const token = authorization.replace('Bearer ','');
      const token_parsed = jwtDecode(token);
      req.user_token = token_parsed;
    }
    next();
  } catch (error) {
    next(error);
  } 
}
app.use(userAuth)

// Use Crudlify to create a REST API for any collection
crudlify(app, {todos: TodoYup})

// bind to serverless runtime
export default app.init();
