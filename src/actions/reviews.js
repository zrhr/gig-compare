export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export function receiveReviews(id) {
    return async dispatch => {
         const response = await fetch(`http://localhost:8080/api/v1/reviews/job/${id}`)
         const json = await response.json()
         console.log(json)
         dispatch({
           type:'RECEIVE_REVIEWS',
           payload: json
         })
       }
     }