

export const useCommentRefresh = (listingId) => {


 const refreshComments = async () => {
 
  const resposne = await fetch(`http://localhost:8001/listings/${listingId}`, {method: "GET"})
  const details = await resposne.json()

  console.log(details)

 }

 refreshComments()

 return { refreshComments }

}