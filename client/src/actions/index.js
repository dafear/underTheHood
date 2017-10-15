import axios from 'axios'

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

 export const registerUser = (email, password)=> {
   return (dispatch) => {
   
		const instance = axios.create({ headers: { 'Content-Type': 'application/json' } });
		
		return instance.post('http://localhost:8081/api/auth/register', {

			email, 
			password, 
		})

		.then(response => {
			console.log("It worked the server responded with:", response);
			
		})

		.catch(function (error) {
			console.log(error);

		});

   }

  }

  export const signinUser = (email, password)=> {
   return (dispatch) => {
   
		const instance = axios.create({ headers: { 'Content-Type': 'application/json' } });
		
		return instance.post('http://localhost:8081/api/auth/login', {

			email, 
			password, 
		})

		.then(response => {
			console.log("It worked the server responded with:", response.data);
			localStorage.setItem('apiToken', response.data.token);
			localStorage.setItem('email', this.state.email);

			if (response.data.success) {
				this.goToBoard();
				console.log(response.data.success);
			}
			
		})

		.catch(function (error) {
			console.log(error);

		});

   }

  }

 