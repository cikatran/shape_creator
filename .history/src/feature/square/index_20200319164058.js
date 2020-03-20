import {connect} from 'react-redux';
import SquarePage from './SquarePage';

function mapStateToProps(state) {
    return {
        sha: state.savedReducer,
        bookmarkedIds: state.bookmarkedReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSaved: (page, perPage) => dispatch(getSaved(page, perPage)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SquarePage);
