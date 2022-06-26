import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { ModalReducers } from "./reducers/ModalReducers";
import ProjectsReducers from "./reducers/ProjectsReducers";
import parralxReducers from "./reducers/parralxReducer";
const reducers = combineReducers({
    modals: ModalReducers,
    projects: ProjectsReducers,
    parralx: parralxReducers
})

const initialState = {
    modals: { open: false },
   
}

const middleware = [thunk];

const Store = () => {
    const browserHasDevTools =
        typeof window === "object" &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined";
    return createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(...middleware),
            browserHasDevTools ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
        )
    );
};

export default Store;