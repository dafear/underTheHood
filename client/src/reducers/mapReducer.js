
const initialState = {
	lat: 40.758896,
	lng: -73.985130
}

const map = (state=initialState, action) => {
 switch(action.type) {
 	case 'UPDATE_MAP_LOCATION': 
 		return {
 			...state,
 			lat: action.lat,
 			lng: action.lng
 		}
 	default:
 		return state
 }
}
export default map 