export default (artists = [], action) => {
   switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        default:
            return artists;

   }
}