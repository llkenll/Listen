export default (playlists = [], action) => {
    switch(action.type){
         case 'FETCH PLAYLIST':
             return action.payload;
         default:
             return playlists;
 
    }
 }