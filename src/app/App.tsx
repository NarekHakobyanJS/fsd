import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { client } from './provider/provider'
import './style/App.css'


function App() {

  return (
    <>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>

    </>
  )
}

export default App
