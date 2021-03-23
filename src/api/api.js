export const apiPost = async (endpoint, postData) => {
  const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}${endpoint}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  const data = await response.json()
  return data
}