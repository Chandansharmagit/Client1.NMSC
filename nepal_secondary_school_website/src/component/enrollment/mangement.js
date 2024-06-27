import React from 'react'
import { useEffect } from 'react';
import Enroll from './enroll'
export default function Mangement({setProgress}) {
    useEffect(() => {
        setProgress(40);
        setTimeout(() => {
              setProgress(100)
        }, 1000);
      
       },[])
    return (
        <div>
            <Enroll />
        </div>
    )
}
