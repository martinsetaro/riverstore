const { configureStore } = require("@reduxjs/toolkit");
import { origenSlice } from "./mySlider";


export default configureStore({

    reducer:{
        unValor:origenSlice.reducer
    }
})