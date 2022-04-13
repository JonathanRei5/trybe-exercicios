import React from "react";
import carsContext from "./carsContext";

class CarsProvider extends React.Component {
  constructor(){
    super();

    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    }
  }

  moveCar = (car, side) => this.setState({[car]: side})

  render(){
    const {Provider} = carsContext;
    const {children} = this.props;
    return (
        <Provider value={{...this.state, moveCar: this.moveCar}}>
          {children}
        </Provider>
    )
  }
}

export default CarsProvider;
