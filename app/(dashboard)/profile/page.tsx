'use client';

import useMain from '@/app/hooks/useMain'
import { NAuthentication } from '@/types/auth.type';
import React from 'react'
import PatientProfile from './patient/PatientProfile';
import DoctorProfile from './doctor/DoctorProfile';
import InstitutionProfile from './institution/InstitutionProfile';
import FinanceProfile from './finance/FinanceProfile';
import OfficerProfile from './officer/OfficerProfile';
import DispensaryProfile from './dispensary/DispensaryProfile';
import useUserStore from '@/store/UserStore';
import AdminProfile from './admin/page';
import NurseProfile from './nurse/NurseProfile';

function ProfilePage() {
  const {user} = useUserStore();
  const {searchParams} = useMain();
  const type = searchParams.get('type') as NAuthentication.TRoleType || user?.role || 'patient';

  console.log({type})
  if(type === 'patient') return <PatientProfile/>
  if(type === 'doctor') return <DoctorProfile/>
  if(type === 'nurse') return <NurseProfile/>
  if(type === 'institution') return <InstitutionProfile/>
  if(type === 'finance') return <FinanceProfile/>
  if(type === 'officer') return <OfficerProfile/>
  if(type === 'dispensary') return <DispensaryProfile/>
  if(type === 'admin') return <AdminProfile/>


  return <PatientProfile/>
}

export default ProfilePage