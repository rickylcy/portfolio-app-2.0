import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchCurrentWeather } from "../redux/reducers";

function App({ data }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentWeather());
  }, []); // eslint-disable-line

  return (
    <div>
      <h2>{data}123</h2>
      <button>Click Me</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.current,
  };
};

export default connect(mapStateToProps)(App);
