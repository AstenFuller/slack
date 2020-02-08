import { connect } from 'react-redux';
import AbsenteeInfo from './AbsenteeInfo';
import AbsenteeEdit from './AbsenteeEdit';


function mapStoreToProps(store) {
    return {
        studentAbsences: store.studentStats.studentAbsences,
        studentInfo: store.studentStats.studentInfo,
        toggleWindow: store.absenteeInfo.toggleWindow,
        currentId: store.absenteeInfo.currentId,
        currentDate: store.absenteeInfo.currentDate,
        notes: store.absenteeInfo.notes,
        excused: store.absenteeInfo.excused
    };
}

export default connect(mapStoreToProps)(AbsenteeInfo);
