import {connect} from 'react-redux';
import { spawnShape } from '../../redux/spawnShapeAction';
import AllPage from './AllPage';

function mapStateToProps(state) {
    return {
        shape: state.allReducer,
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
)(AllPage);
