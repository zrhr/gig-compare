export const RECEIVE_GIGS = 'RECEIVE_GIGS'
export function receivePosts() {
    return async (dispatch) => {
         const response = await fetch(`http://localhost:8080/api/v1/gigs`)
         const json = await response.json()
         console.log(json)
         dispatch({
           type:RECEIVE_GIGS,
           payload: json
         })
       }
     }
export const ADD_RATING ='ADD_RATING'
     export function addRatings(id) {
        return async (dispatch) => {
             const response = await fetch(`http://localhost:8080/api/v1/rating/${id}`)
             const json = await response.text()
             console.log(json)
             dispatch({
               type:ADD_RATING,
               payload: json,
               id:id
             })
           }
         }
export const ADD_COMPARE='ADD_COMPARE'
         export function addToCompare(id){
           return (dispatch)=>{
             dispatch({
               type: ADD_COMPARE,
               id:id
             })
           }
         }
