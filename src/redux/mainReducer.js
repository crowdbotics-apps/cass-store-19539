import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2791845Reducer from '../features/SignIn2791845/redux/reducers'
import SignUp2891844Reducer from '../features/SignUp2891844/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2791845: SignIn2791845Reducer,
SignUp2891844: SignUp2891844Reducer,

});