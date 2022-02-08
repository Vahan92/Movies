/* eslint-disable import/no-anonymous-default-export */
import { ACTION_STATUSES } from '../../utils/constants';
import { CATEGORY_ACTIONS } from '../actions/movies';

const ATTEMPT_TO_GET_MOVIES = (state: any) => {
  return {
    ...state,
    status: ACTION_STATUSES.PENDING
  }
};

const SUCCESS_TO_GET_MOVIES = (state: any, { payload }: any) => {
  return {
    ...state,
    status: ACTION_STATUSES.SUCCEED,
    response: payload
  }
};

export default (state: any = [], action: any) => {
  switch (action.type) {
    case CATEGORY_ACTIONS.ATTEMPT_TO_GET_MOVIES:
      return ATTEMPT_TO_GET_MOVIES(state);
    case CATEGORY_ACTIONS.SUCCESS_GET_MOVIES:
      return SUCCESS_TO_GET_MOVIES(state, action);   
    default:
      return state;
  }
};