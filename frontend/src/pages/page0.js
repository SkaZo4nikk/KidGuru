import ApiHelper from '../APIHelper.js'
import React, { useEffect, useState } from 'react';

import { darkSber } from '@sberdevices/plasma-tokens/themes';
import { Button } from '@sberdevices/ui/components/Button/Button';
import { Container } from '@sberdevices/plasma-ui/components/Grid';
import { Image } from '@sberdevices/ui/components/Image/Image';
import Scene from '../components/menu'
//import  {genNextTask} from '../math_guru_logic/math_guru'

const Page0 = () =>{
 
  async function genNextTask(){
    let response= await fetch('http://localhost:3000/math_guru')
    let data= await response.json()
    console.log(data)
   // useEffect(()=>{data})
  }
  return(
  <>
    
    <Container>
      
      <Button onClick={genNextTask}>next task</Button>
           <div>
             {}
             </div>
             
    </Container>



    </>
    )
}

export default Page0