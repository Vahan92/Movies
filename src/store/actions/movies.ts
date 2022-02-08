export const CATEGORY_ACTIONS = {
  SUCCESS_GET_MOVIES: "@CATEGORY/SUCCESS_GET_MOVIES",
  ATTEMPT_TO_GET_MOVIES: "@CATEGORY/ATTEMPT_TO_GET_MOVIES",
};

export const attemptToGetMovies = () => {
  return {
    type: CATEGORY_ACTIONS.ATTEMPT_TO_GET_MOVIES,
  };
};

export const successGetMovies = (payload: any) => {
  return {
    type: CATEGORY_ACTIONS.SUCCESS_GET_MOVIES,
    payload,
  };
};
