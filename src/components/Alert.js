import React from 'react'

const Alert = ({type,title}) => {
    return (
        <>
          <div className={`alert alert-${type}`} >{title}</div>  
        </>
    )
}

export default Alert
