import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RegisterForm from '@/components/ui/forms/RegisterForm'
import { UserFormValidation } from '@/lib/validation';
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import { createUser } from '@/lib/actions/patient.actions';
import SubmitButton from '@/components/ui/SubmitButton';
import * as Sentry from '@sentry/nextjs';

import { getUser } from '@/lib/actions/patient.actions';

const Register = async ({params: {userId}}: SearchParamProps) => {
  const user = await getUser(userId);
  Sentry.metrics.set("user_view_register", user.name);
  return (
    <div className="flex h-screen max-h-screen">
    <section className="remove-scrollbar container">
      <div className="sub-container max-w-[860px] flex-1 flex-col py-10 ">
        <Image
          src='/assets/icons/logo-full.svg'
          height={1000}
          width = {1000}
          alt='patient'
          className="mb-12 h-10 w-fit"
        />
        <RegisterForm user={user} />
        {/* <PatientForm /> */}

        <div className="text-14-regular mt-20 flex justify-between">
        </div>
      </div>
    </section>
    <Image 
      src='/assets/images/register-img.png'
      height={1000}
      width={1000}
      alt ='patient'
      className="side-img max-w-[390px]"

    />



  </div>
  
);
}


export default Register