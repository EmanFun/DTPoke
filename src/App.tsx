import './App.css'
import { routes } from './routes';
import { StoreProvider } from './zustand/store'
import { RouterProvider } from 'react-router-dom';


function App() {


  return (
    <StoreProvider>
      <RouterProvider router={routes}/>
    </StoreProvider>
  )
}

export default App
