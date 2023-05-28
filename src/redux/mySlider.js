const { createSlice } = require("@reduxjs/toolkit");

export const origenSlice = createSlice({
    name:"unValor", // este nombre identifica el slice.
    initialState:{miNombre:"Martin"},//un estado inicial.
    reducers:{    // aqui es donde se pasa una funcion, y el action es lo que recibe para modificar el estado
        guardarMiNombre: (state , action) =>{
            state.miNombre = action.payload;
        }
    }
})

export const { guardarMiNombre } = origenSlice.actions; 