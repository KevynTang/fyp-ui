import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/md-light.css'
import App from './App'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import Home from './views/Home'
import Gallery from './views/Gallery'
import Journal from './views/Journal'
import Archive from './views/Archive'
import Mailbox from './views/Mailbox'
import Account from './views/Account'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path='Gallery' element={<Gallery />} />
      <Route path='Journal' element={<Journal />} />
      <Route path='Archive' element={<Archive />} />
      <Route path='Mailbox' element={<Mailbox />} />
      <Route path='Account' element={<Account />} />
    </Route>
  )
)


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
