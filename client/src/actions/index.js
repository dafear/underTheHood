// export const fetchData = () => {
// 	return (dispatch) => {
//       axios.get()
//       .then((res) => {
//           return res.json()
//       }) 
//       .then((data) => {
//       console.log(data)
//       })
// 	}
// }
  
 export const UPDATE_MAP_LOCATION = 'UPDATE_MAP_LOCATION';
 export const upDateMapLocation = (lat, lng) => ({
  type: UPDATE_MAP_LOCATION,
  lat,
  lng

 });

 