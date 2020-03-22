import {connect} from 'react-redux';
import { spawnShape, changeShapeBackground } from '../../redux/spawnShapeAction';
import AllPage from './AllPage';

function mapStateToProps(state) {
    return {
        shape: state.allReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        spawnShape: (shapeType, x, y, fillType) => dispatch(spawnShape(shapeType, x, y, fillType)),
        changeShapeBackground: (shapeType, index, randomShapeType) => dispatch(changeShapeBackground(shapeType, index, randomShapeType))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllPage);
