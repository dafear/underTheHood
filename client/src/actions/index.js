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

export const RECIEVED_COMMENTS = 'RECIEVED_COMMENTS';
export const recievedComments = (comments) => ({
  type: RECIEVED_COMMENTS,
  comments
});

export const fetchComments = () => {
 return (dispatch) => {

	const instance = axios.create({ headers: { 'Content-Type': 'application/json' } });

	return instance.get('http://localhost:8080/api/comment')
	.then(response => {
	   dispatch(recievedComments(response.data))
  })

	.catch(function (error) {
		console.log(error);
	});
 }
}

export const saveComment = (lat, lng, comment) => {
 return (dispatch) => {

	const instance = axios.create({ headers: { 'Content-Type': 'application/json' } });

	return instance.post('http://localhost:8080/api/comment', {
    lat,
    lng,
    comment
  })

	.then(comments => {
	   dispatch(recievedComments(comments))
  })

	.catch(function (error) {
		console.log(error);
	});
 }
}

export const ON_MAP_CLICK = 'ON_MAP_CLICK';
export const onMapClick = (lat, lng) => ({
  type: ON_MAP_CLICK,
  lat,
  lng
});
