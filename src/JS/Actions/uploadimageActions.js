import { UPLOAD_FILE_REQUEST, UPLOAD_FILE_SUCCESS,  UPLOAD_FILE_FAILURE} from '../ActionTypes/UploadimageType';
import axios from 'axios';
   
  export const uploadFileRequest = () => ({
    type: UPLOAD_FILE_REQUEST
  });
  
  export const uploadFileSuccess = (filename) => ({
    type: UPLOAD_FILE_SUCCESS,
    payload: filename
  });
  
  export const uploadFileFailure = (error) => ({
    type: UPLOAD_FILE_FAILURE,
    payload: error
  });
  
 
  export const uploadFile = (file) => {
    return (dispatch) => {
      dispatch(uploadFileRequest());
      
      // Use axios to send a POST request to your server endpoint
      const formData = new FormData();
      formData.append('file', file);
      
      axios.post('/api/upload/', formData)
        .then(response => {
          dispatch(uploadFileSuccess(response.data.filename));
        })
        .catch(error => {
          dispatch(uploadFileFailure(error.message));
        });
    };
  };
