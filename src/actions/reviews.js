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
     export function createComment({jobId,userId,comment,rating,jobName}){
       
        
         return async (dispatch) =>{
             const response = await fetch(`http://localhost:8080/api/v1/reviews/${userId}/${jobId}`, {
                 method: "POST",
                 body:JSON.stringify({"comment":comment, "rating":rating, "jobName":jobName
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
export const ALL_REVIEWS = 'ALL_REVIEWS'
export function receiveAllReviews() {
    return async dispatch => {
         const response = await fetch(`http://localhost:8080/api/v1/reviews`)
         const json = await response.json()
         console.log(json)
         dispatch({
           type:'ALL_REVIEWS',
           payload: json
         })
       }
     }
     
     export const DELETE_REVIEW = 'DELETE_REVIEW'
     export function deleteReview(userId){
       
        
         return async (dispatch) =>{
             const response = await fetch(`http://localhost:8080/api/v1/reviews/${userId}`, {
                 method: "DELETE"
             })
         if(response.ok)
         console.log("deleted")
         dispatch({
             type: DELETE_REVIEW,
             payload:userId
             
         })
         }
     }