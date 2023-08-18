import React from 'react'
import { useAppSelector } from '../app/hooks'
import useAuth from '../hooks/useAuth';
// import { userInfo } from 'os'

const Dashboard = () => {
  useAuth();
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard