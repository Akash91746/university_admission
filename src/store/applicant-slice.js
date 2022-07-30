import { createSlice } from "@reduxjs/toolkit";

const applicantSlice = createSlice({
    name: 'applicant',
    initialState: {
        applicants: []
    },
    reducers: {
        add(state, applicant) {
            const item = applicant.payload;
            state.applicants.push(item);
        },
        update(state, updateItem) {
            const index = updateItem.payload.index;
            const item = updateItem.payload.item;
            state.applicants[index] = item;
        },
        delete(state, deleteIndex) {
            const index = deleteIndex.payload;
            state.applicants.splice(index, 1);
        }
    }
});

export const ApplicantsAction = applicantSlice.actions;
export default applicantSlice;