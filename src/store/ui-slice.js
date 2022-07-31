import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showAuthUi: false,
    snackbar: {
        isVisible: false,
        message: '',
        severity: undefined
    }
}

export const severity = {
    success: 'success',
    info: 'info',
    warining: 'warning',
    error: 'error'
}

const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: { initialState },
    reducers: {
        showSnackBar({ snackbar }, action) {
            const { message, severity } = action.payload;
            snackbar.isVisible = true;
            snackbar.message = message;
            snackbar.severity = severity;
        },
        hideSnackBar({ snackbar }) {
            snackbar.isVisible = false;
        },
    }
});

export const UiActions = uiSlice.actions;
export default uiSlice;