import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const reducer = (state = initialState, action) => {
  console.log("Reducer: ", state);
  switch (action.type) {
    case ADD_FEATURE:
      console.log(state);
      return {
        ...state,
        additionalPrice: state.car.features.includes(action.data)
          ? state.additionalPrice
          : state.additionalPrice + action.data.price,
        car: {
          ...state.car,
          features: state.car.features.includes(action.data)
            ? [...state.car.features]
            : [...state.car.features, action.data]
        }
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.data.price,
        car: {
          ...state.car,
          features: state.car.features.filter(car => car.id !== action.data.id)
        }
      };
    default:
      return state;
  }
};
