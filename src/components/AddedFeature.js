import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../actions";

const AddedFeature = props => {
  console.log(props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => {
          props.removeItem(props.feature);
        }}
      >
        Remove
      </button>
      {props.feature.name} (-{props.feature.price})
    </li>
  );
};

export default connect(null, { removeItem })(AddedFeature);
