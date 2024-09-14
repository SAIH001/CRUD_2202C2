import React from 'react'
import { Flip,ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Practice = () => {

    const notifyy=(message)=>{
        

        /// toast.success(  message    ,  styles     )


        toast.success(message,{
            position:'top-right',
            theme:'dark',
            transition:Flip,
            autoClose:1000
        })

    }


  return (
  <>
  
  
  <button type='button' onClick={()=>notifyy('abc')}>Notify</button>
  
  <ToastContainer/>
  </>
  )
}

export default Practice