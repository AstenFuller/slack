import { connect } from 'react-redux';
import AbsenteeInfo from './AbsenteeInfo';

function mapStoreToProps(store) {
    return {
        studentAbsences: store.studentStats.studentAbsences,
        studentInfo: store.studentStats.studentInfo,
        toggleWindow: store.absenteeInfo.toggleWindow,
        currentId: store.absenteeInfo.currentId,
        currentDate: store.absenteeInfo.currentDate,
    };
}

export default connect(mapStoreToProps)(AbsenteeInfo);
