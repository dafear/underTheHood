export const fetchData = () => {
	return (dispatch) => {
      axios.get()
      .then((res) => {
          return res.json()
      }) 
      .then((data) => {
      console.log(data)
      })
	}
}


