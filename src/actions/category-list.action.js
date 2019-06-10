export const GET_CATEGORY_LIST = "[CATEGORY_LIST] GET_CATEGORY_LIST";
export const GET_CATEGORY_LIST_SUCCESS =
  "[CATEGORY_LIST] GET_CATEGORY_LIST_SUCCESS";
export const GET_CATEGORY_LIST_FAILED =
  "[CATEGORY_LIST] GET_CATEGORY_LIST_FAILED";

export const getCategoryList = params => {
  return {
    type: GET_CATEGORY_LIST,
    payload: {
      params
    }
  };
};

export const getCategoryListSuccess = payload => {
  return {
    type: GET_CATEGORY_LIST_SUCCESS,
    payload
  };
};

export const getCategoryListFailed = () => {
  return {
    type: GET_CATEGORY_LIST_FAILED
  };
};
