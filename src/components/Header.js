import React from "react";
import { useSelector } from "react-redux";

import { connect } from "react-redux";
const Header = props => {
  const car = useSelector(state => state.car);
  const additionalPrice = useSelector(state => state.additionalPrice);
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: ${car.price + additionalPrice}</p>
    </>
  );
};
const mapStateToProps = state => ({
  image: state.car.image,
  name: state.car.name,
  price: state.car.price
});
export default connect(mapStateToProps, {})(Header);
