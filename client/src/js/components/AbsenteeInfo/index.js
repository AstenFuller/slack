import { connect } from 'react-redux';
import AbsenteeInfo from './AbsenteeInfo';

function mapStoreToProps(store) {
    return {
        studentAbsences: store.studentStats.studentAbsences,
        studentInfo: store.studentStats.studentInfo,
        toggleWindow: store.absenteeInfo.toggleWindow,
    };
}

export default connect(mapStoreToProps)(AbsenteeInfo);
