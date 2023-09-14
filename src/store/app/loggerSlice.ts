import { createSlice } from "@reduxjs/toolkit";

export type StatusType = "error" | "warning" | "info";
export interface LoggerSliceType {
  message?: string;
  status?: StatusType;
  logs: [StatusType, string][];
}

const initialState: LoggerSliceType = {
  message: "n/a",
  status: "info",
  logs: [],
};

const loggerSlice = createSlice({
  name: "loggerSlice",
  initialState,
  reducers: {
    alert: (state, { payload }) => {
      state.status = payload.status;
      state.message = payload.message;

      state.logs = [...state.logs, [payload.status, payload.message]];
    },
  },
});

export const {alert} = loggerSlice.actions;
export default loggerSlice.reducer;
