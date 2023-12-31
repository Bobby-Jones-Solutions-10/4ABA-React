import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';
import ConsultsById from '../pages/Consults/[ConsultsById]';
import Rpassword from '../pages/rPassword/index.js';
import Private from './private';
import Patients from './../pages/Patients/index';
import CreatePatient from '../pages/Patients/CreatePatient';
import Calendar from './../pages/Calendar/index';
import Consults from '../pages/Consults';
import CreateConsult from '../pages/Consults/CreateConsult';
import PatientsById from '../pages/Patients/[PatientsById]';
import React from 'react';
//Rotas

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path='/register' element={<Register />} />
      <Route path='/rpassword' element={<Rpassword />} />
      <Route path="/dashboard" element={<Private><Dashboard /></Private>} />
      <Route path='/consults' element={<Private><Consults /></Private>} />
      <Route path='/consults/create' element={<Private><CreateConsult /></Private>} />
      <Route path='/consults/:id' element={<Private><ConsultsById /></Private>} />
      <Route path='/patients' element={<Private><Patients /></Private>} />
      <Route path='/patients/create' element={<Private><CreatePatient /></Private>} />
      <Route path='/patients/:id' element={<Private><PatientsById /></Private>} />
      <Route path='/calendar' element={<Private><Calendar /></Private>} />
      <Route path="*" element={<h1>Not Found 404</h1>} />
    </Routes>
  )
}

export default RoutesApp;
