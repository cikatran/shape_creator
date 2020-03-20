import {connect} from 'react-redux';
import SquarePage from './SquarePage';

function mapStateToProps(state) {
    return {
        shape_array: state.shape_array,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        spawnShape: (shapeType, x, y) => dispatch(spaw(page, perPage)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SquarePage);
