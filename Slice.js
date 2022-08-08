import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstValue: "",
  actualValue: "",
  op: ""
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    calc: (state, action) => {
        console.log(action.payload);
        state.firstValue = `${state.firstValue}${action.payload}`

    },
    op: (state, action) => {
        // console.log(action.payload);
        if(action.payload == 'AC'){
            state.actualValue = ""
            state.firstValue = ""
            state.op = ""

        }else{
            switch (state.op) {
                case '':
                    state.actualValue = state.firstValue
                    state.firstValue = ""
                    break;
                
                case '+':
                    let result = parseInt(state.actualValue) + parseInt(state.firstValue)
                    console.log(result);
                    state.actualValue = result
                    state.firstValue = ""
                    break;
                
                case '-':
                    let result1 = parseInt(state.actualValue) - parseInt(state.firstValue)
                    state.actualValue = result1
                    state.firstValue = ""
                    break;
                
                case '/':
                    let result2 = parseInt(state.actualValue) / parseInt(state.firstValue)
                    state.actualValue = result2
                    state.firstValue = ""
                    break;
                        
                case '*':
                    let result3 = parseInt(state.actualValue) * parseInt(state.firstValue)
                    state.actualValue = result3
                    state.firstValue = ""
                    break;
                    
                default:
                    break;
                }

                if(action.payload !== "="){
                    state.op = action.payload
                }else{
                    state.op = ""
                }
            }            
    },

  },
})

// Action creators are generated for each case reducer function
export const { calc, op } = calculatorSlice.actions

export default calculatorSlice.reducer