import axios from 'axios'

 
  
 export const UPDATE_MAP_LOCATION = 'UPDATE_MAP_LOCATION';
 export const upDateMapLocation = (lat, lng) => ({
  type: UPDATE_MAP_LOCATION,
  lat,
  lng

 });

 export const registerUser = (email, password)=> {
   return (dispatch) => {
   
		const instance = axios.create({ headers: { 'Content-Type': 'application/json' } });
		
		return instance.post('http://localhost:8080/api/auth/register', {

			email, 
			password, 
		})

		.then(response => {
			window.location='/signin'
			
		})

		.catch(function (error) {
			console.log(error);

		});

   }

  }

  export const signinUser = (email, password)=> {
   return (dispatch) => {
   
		const instance = axios.create({ headers: { 'Content-Type': 'application/json' } });
		
		return instance.post('http://localhost:8080/api/auth/login', {

			email, 
			password, 
		})

		.then(response => {
			console.log("It worked the server responded with:", response.data);
			localStorage.setItem('apiToken', response.data.token);
			
			window.location='/dashboard';
	
			
		})

		.catch(function (error) {
			console.log(error);

		});

   }

  }

 



 


 