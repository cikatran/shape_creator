import {connect} from 'react-redux';
import SquarePage from './SquarePage';
import { spawnShape } from '../../redux/spawnShapeAction';

function mapStateToProps(state) {
    return {
        shape_array: state.shape_array,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        spawnShape: (shapeType, x, y) => dispatch(spawnShape(shapeType, x)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SquarePage);
