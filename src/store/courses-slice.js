import { createSlice } from '@reduxjs/toolkit';

const courseSlice = createSlice({
    name: 'courses',
    initialState: {
        courses: []
    },
    reducers: {
        add(state, courseToAdd) {
            state.courses.push(courseToAdd.payload);
        },
        delete(state, deleteIndex) {
            state.courses.splice(deleteIndex.payload, 1);
        },
        update(state, updateItem) {
            const index = updateItem.payload.index;
            const item = updateItem.payload.item;
            state.courses[index] = item;
        }
    }
});

export const CourseActions = courseSlice.actions;
export default courseSlice;
