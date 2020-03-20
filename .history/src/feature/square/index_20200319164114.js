import {connect} from 'react-redux';
import SquarePage from './SquarePage';

function mapStateToProps(state) {
    return {
        shape_array: state.shape_array,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        spawnShape: (page, perPage) => dispatch(getSaved(page, perPage)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SquarePage);
