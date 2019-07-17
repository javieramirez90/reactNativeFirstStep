import { ADD_PLACE, DELETE_PLACE } from "../actions/actionTypes";

const initialState = {
  placeName : '',
  places : [],
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name:  action.placeName,
          image: {
            uri: "https://us-east.manta.joyent.com/condenast/public/cnt-services/production/2016/01/14/5698079f78d099fc122488c6_Trunk-Bay-St-John-cr-alamy.jpg"
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey;
        })
      };
    default:
      return state;
  }
};

export default reducer