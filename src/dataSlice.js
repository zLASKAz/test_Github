import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: "inactive",
    activityStatus: "inactive",
    date: "",
    staff: ["name","position","tel","email"],
    activityName: "",
    activityDate: "",
    activityDes: "What is Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    radioValue: "-",
    checkBoxs: [],
}
export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers: {
        setStatusActive: (state) => {
            state.status = "active";
        },
        setStatusInactive: (state) => {
            state.status = "inactive";
        },
        setActStatusActive: (state) => {
            state.activityStatus = "active";
        },
        setActStatusInactive: (state) => {
            state.activityStatus = "inactive";
        },
        setDate: (state,action) => {
            state.date = action.payload
        },
        setActDate: (state,action) => {
            state.activityDate = action.payload
        },
        setActName: (state,action) => {
            state.activityName = action.payload
        },
        setActDes: (state,action) =>  {
            state.activityDes = action.payload;
        },
        toggleCheckbox: (state, action) => {
            const { checkboxName } = action.payload;
            state[checkboxName] = !state[checkboxName];
        },
        setRadioValue: (state,action) => {
            state.radioValue = action.payload
        },
        setCheckBoxsValue: (state,action) => {
            state.checkBoxs = action.payload
        }
    }
})

export const { setStatusActive,setStatusInactive ,setActStatusActive ,setDate,setActStatusInactive ,setActDate,setActName,setActDes,setRadioValue,setCheckBoxsValue} = dataSlice.actions;
export default dataSlice.reducer;
