import {connect} from 'react-redux';
import SquarePage from './SquarePage';
import { spawnShape, changeShapeBackground } from '../../redux/spawnShapeAction';

function mapStateToProps(state) {
    return {
        shape: state.squareReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        spawnShape: (shapeType, x, y) => dispatch(spawnShape(shapeType, x, y)),
        changeShapeBackground: (shapeType, index) => dispatch(changeShapeBackground(shapeType, index))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SquarePage);
