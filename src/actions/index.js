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
 