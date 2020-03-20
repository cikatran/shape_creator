import {connect} from 'react-redux';
import SquarePage from './SquarePage';

function mapStateToProps(state) {
    return {
        saved: state.savedReducer,
        bookmarkedIds: state.bookmarkedReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSaved: (page, perPage) => dispatch(getSaved(page, perPage)),
        removeBookmark: (id, type, trackingType) => (dispatch(removeBookmark(id, type, trackingType, dispatch))),
        createBookmark: (id, type, trackingType) => dispatch(createBookmark(id, type, trackingType, dispatch)),
        getBookmarkedIds: () => dispatch(getBookmarkedIds()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SquarePage);
