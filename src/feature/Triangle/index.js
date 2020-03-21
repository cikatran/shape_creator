import {connect} from 'react-redux';
import TrianglePage from './TrianglePage';
import { spawnShape, changeShapeBackground } from '../../redux/spawnShapeAction';

function mapStateToProps(state) {
    return {
        shape: state.triangleReducer,
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
)(TrianglePage);
