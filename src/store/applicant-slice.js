import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Repository from "../feature-applicant/data/repository/Repository";

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

const repo = new Repository();

export const initializeApplicants = createAsyncThunk(
    '/initializeApplicants',
    async () => {

    }
);

export const addApplicant = createAsyncThunk(
    '/addApplicant',
    async (applicant) => {
        const result = repo.addApplicant(applicant);
        return result;
    }
)

export const ApplicantsAction = applicantSlice.actions;
export default applicantSlice;