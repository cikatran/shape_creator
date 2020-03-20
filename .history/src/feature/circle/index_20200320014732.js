import {connect} from 'react-redux';
import SquarePage from './SquarePage';
import { spawnShape } from '../../redux/spawnShapeAction';
import CirclePage from './CirclePage';

function mapStateToProps(state) {
    return {
        shape: state.squareReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        spawnShape: (shapeType, x, y) => dispatch(spawnShape(shapeType, x, y)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CirclePage);
