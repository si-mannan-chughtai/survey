import React from 'react'
import Qeclayout from './Qeclayout'
const Qecprotectesroutes = ({component:Component,...rest}) => {
  return (
    <Qeclayout>
        <Component {...rest}/>
    </Qeclayout>
  )
}

export default Qecprotectesroutes;