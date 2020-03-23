import {connect} from 'react-redux';
import SquarePage from './SquarePage';
import { spawnShape, changeShapeBackground, removeAllShape } from '../../redux/spawnShapeAction';

function mapStateToProps(state) {
    return {
        shape: state.squareReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        spawnShape: (shapeType, x, y, fillType) => dispatch(spawnShape(shapeType, x, y, fillType)),
        changeShapeBackground: (shapeType, index) => dispatch(changeShapeBackground(shapeType, index)),
        removeAllShape: (shapeType) => dispatch(removeAllShape(shapeType))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SquarePage);
