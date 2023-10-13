import { OPEN_POPUP, CLOSE_POPUP } from '../actions/popUp';

const popupReducer = (state = false, action) => {
  switch (action.type) {
    case OPEN_POPUP:
      return true;
    case CLOSE_POPUP:
      return false;
    default:
      return state;
  }
};

export default popupReducer;
