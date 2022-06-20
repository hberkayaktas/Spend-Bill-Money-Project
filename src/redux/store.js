import { configureStore } from "@reduxjs/toolkit";

import CuzdanSlice from "./cuzdan/cuzdanSlice";

export const store = configureStore({
  reducer: {
    cuzdan: CuzdanSlice,
  },
});
