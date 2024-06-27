'use-client'


import React, { Component } from 'react';
import {FacebookProvider,CustomChat} from 'react-facebook';
const Facebook_massenger = () => {
 
    return(
      <FacebookProvider appId="3061872777277979" chatSupport>
      <CustomChat pageId="268554466334272" minimized={false}/>
    </FacebookProvider>
        
    )
}
export default Facebook_massenger;