import './index.css'
import { useState, useEffect } from 'react'
import { supabase } from './supabase'
import { Route, useNavigate } from 'react-router-dom'
import Routes from './routes';

export default function App() {
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  return (
    <>
    <Routes pages={pages} />
    </>
  )
}