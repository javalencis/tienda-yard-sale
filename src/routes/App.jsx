import { Layout, Login, RecoveryPassword } from '../containers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home, NoFound } from '../pages'
import '../styles/global.css';
export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/recovery-password' element={<RecoveryPassword />} />
          <Route path='*' element={<NoFound/>}/>
        </Routes> 
      </Layout>

    </BrowserRouter>

  )
}
