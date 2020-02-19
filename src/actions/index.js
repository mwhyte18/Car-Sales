export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const buyItem = item => {
  console.log("testing ", item);
  return {
    type: ADD_FEATURE,
    data: item
  };
};

export const removeItem = item => {
  return {
    type: REMOVE_FEATURE,
    data: item
  };
};
