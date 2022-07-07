
const defaultStatus = {
    "READY": "True"
}


export default (state = defaultStatus, action) => {
    switch(action.type){
         case 'FETCH PROFILE':
             return action.payload;
         default:
             return state;
 
    }
 }