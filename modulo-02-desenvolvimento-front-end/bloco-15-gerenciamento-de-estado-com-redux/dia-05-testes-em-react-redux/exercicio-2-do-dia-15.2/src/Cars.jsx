import React from 'react';
import { connect } from 'react-redux';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { moveCar } from './redux/actionCreators';

class Cars extends React.Component {
  render() {
    const { redCar, blueCar, yellowCar, moveCar } = this.props;
    return (
      <div>
        <div>
          <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
          <button data-testid="carRed" onClick={() => moveCar('red', !redCar)} type="button">move</button>
        </div>
        <div>
          <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
          <button data-testid="carBlue" onClick={() => moveCar('blue', !blueCar)} type="button">move</button>
        </div>
        <div>
          <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
          <button data-testid="carYellow" onClick={() => moveCar('yellow', !yellowCar)} type="button">move</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  redCar: state.cars.red,
  blueCar: state.cars.blue,
  yellowCar: state.cars.yellow,
});

const mapDispathcToProps = (dispatch) => ({
  moveCar: (car, side) => dispatch(moveCar(car, side)),
});

export default connect(mapStateToProps, mapDispathcToProps)(Cars);
