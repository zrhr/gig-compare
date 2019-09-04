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
     export const COMMENT_CREATED = 'COMMENT_CREATED'
     export function createComment({jobId,userId,comment,rating}){
       
        
         return async (dispatch) =>{
             const response = await fetch(`http://localhost:8080/api/v1/reviews/${userId}/${jobId}`, {
                 method: "POST",
                 body:JSON.stringify({"comment":comment, "rating":rating
                 }),
                 headers:{
                     'Content-Type': 'application/json',
                 'Accept': 'application/json'
                 }
             })
         const createdComment = await response.json()
         dispatch({
             type: COMMENT_CREATED,
             payload:{ ...createdComment}
             
         })
         }
     }