import React from 'react'
import Body from './components/Body'
import store from './utils/store';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Head from './components/Head';
const appRouter = createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[{
    path:'/',
    element:<MainContainer/>
  },
    {
    path:'watch',
    element:<WatchPage/>
  }
]
}])

const App = () => {

  return (
    <Provider store={store}>
      <div>
        <Head/>
      </div>
      <RouterProvider router={appRouter}/>
      <div>
      <Body/>
    </div>
  
    </Provider>
  )  
}

export default App
