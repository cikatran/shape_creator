import {connect} from 'react-redux';
import { spawnShape, changeShapeBackground } from '../../redux/spawnShapeAction';
import CirclePage from './CirclePage';

function mapStateToProps(state) {
    return {
        shape: state.circleReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        spawnShape: (shapeType, x, y, fillType) => dispatch(spawnShape(shapeType, x, y, fillType)),
        changeShapeBackground: (shapeType, index) => dispatch(changeShapeBackground(shapeType, index))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CirclePage);
