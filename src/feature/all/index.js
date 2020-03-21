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
        spawnShape: (shapeType, x, y) => dispatch(spawnShape(shapeType, x, y)),
        changeShapeBackground: (shapeType, index) => dispatch(changeShapeBackground(shapeType, index))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllPage);
