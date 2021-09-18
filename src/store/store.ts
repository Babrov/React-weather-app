import { applyMiddleware, createStore } from "redux";
import createRootReducer from "./index.reducer";
import { combineEpics, createEpicMiddleware, Epic } from "redux-observable";
import { cardListEpics } from "../card-list";
import { catchError } from "rxjs";
import { composeWithDevTools } from "redux-devtools-extension";

const epicMiddleware = createEpicMiddleware();
const epics: Epic[] = [
  ...cardListEpics
];

const rootEpic = (action$: any, store$: any, dependencies: any) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error: any, source) => {
      console.log(error);

      return source;
    })
  );

export default function _createStore(initialState = {}) {

  const middlewares = applyMiddleware(epicMiddleware);
  const reducer = createRootReducer();
  const store = createStore(reducer, initialState, composeWithDevTools(middlewares));

  epicMiddleware.run(rootEpic);

  return store;
}

