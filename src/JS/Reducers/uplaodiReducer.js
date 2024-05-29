import {
    UPLOAD_FILE_REQUEST,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_FAILURE
  } from '../ActionTypes/UploadimageType';
   const initialState = {
    loading: false,
    success: false,
    error: null
  };
  
  const uploadReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPLOAD_FILE_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
          error: null
        };
      case UPLOAD_FILE_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          error: null
        };
      case UPLOAD_FILE_FAILURE:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  
  export default uploadReducer ;