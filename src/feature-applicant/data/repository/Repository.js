import DataSource from "../../../common/data/dataSource/DataSource";

const BASE_URL = "http://localhost:9090/applicant";

class Repository {

    _dataSource;

    constructor() {
        this._dataSource = new DataSource();
    }

    addApplicant(value) {
        return this._dataSource.add(BASE_URL, {
            applicantName: value.applicantName,
            mobileNumber: value.mobileNumber,
            applicantDegree: value.applicantDegree,
            applicantGraduationPercent: value.percent,
            status: value.status,
            admission: {
                courseId: value.courseId,
                admissionDate: value.admissionDate.toISOString(),
                status: value.status
            }
        });
    }

    deleteApplicant(applicantId) {
        const url = `${BASE_URL}/${applicantId}`;

        return this._dataSource.delete(url);
    }

    getAllApplicant() {
        return this._dataSource.get(BASE_URL);
    }

    updateApplicant(applicant) {
        return this._dataSource.update(BASE_URL, applicant);
    }
}

export default Repository;