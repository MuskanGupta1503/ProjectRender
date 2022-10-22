import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { projectRenderApi } from '../services/projectRenderApi'

export const store = configureStore({
  reducer: {
    [projectRenderApi.reducerPath]: projectRenderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectRenderApi.middleware),
})
setupListeners(store.dispatch)