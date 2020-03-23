import {connect} from 'react-redux';
import TrianglePage from './TrianglePage';
import { spawnShape, changeShapeBackground, removeAllShape } from '../../redux/spawnShapeAction';

function mapStateToProps(state) {
    return {
        shape: state.triangleReducer,
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
)(TrianglePage);
