import React, { useState } from 'react'


import Back from '../assets/backgroundImage.webp';






const AddUser = () => {

  const [UserName, setUserName] = useState('');
  const [UserEmail, setUserEmail] = useState('');
  const [UserPassword, setUserPassword] = useState('');
  const [UserCPassword, setUserCPassword] = useState('');
  const [UserRole, setUserRole] = useState('');


  const [Error, setError] = useState('');
  const [Success, setSuccess] = useState('');



  const handleSubmit = async(e) => {
    e.preventDefault();
   
    if(UserName !=null  && UserName.length >3){
      if(UserEmail !=null && UserEmail.length >5 ){
        if(UserPassword!=null && UserPassword.length >3){
          if(UserCPassword !=null  && UserCPassword.length >3){

            if(UserPassword == UserCPassword){


             try{

              const newUser =  {
                userName:UserName ,
                userEmail:UserEmail ,
                userPassword: UserPassword,
                userRole: UserRole,
               
              }



              const Response  = await fetch("https://66dfe57b2fb67ac16f277421.mockapi.io/aptechnn/userAccount",{
                method:'POST',
                headers:{ 'Content-Type':'application/json'},
                body:JSON.stringify(newUser)
              })


              if(Response.status == 201){
                setError('')
                setSuccess("Account Registered Successfully !!")
              }


             }catch(error){
              console.log(error)
             }





            }else{
              setError("Password must be equal to Confirm Password")
            }
          }else{
            setError("Confirm Password must be there")
          }
        }else{
          setError("Password must strong")
        }
      }else{
        setError("Email is not valid")
      }
    }else{
      setError("Username is not valid ")
    }




  }






  return (
    <>
      <section className="vh-100 bg-image" style={{ backgroundImage: `url(${Back})` }}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px;" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>





                    {
                      Error && (
                        <>


                          <div className="alert alert-danger" role="alert">
                           <p>{Error}</p>
                          </div>

                        </>
                      )

                    }
                    {
                      Success && (
                        <>


                          <div className="alert alert-success" role="alert">
                           <p>{Success}</p>
                          </div>

                        </>
                      )

                    }











                    <form onSubmit={handleSubmit}>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                        <input type="text" id="form3Example1cg" className="form-control form-control-lg" onChange={(e) => setUserName(e.target.value)} />
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                        <input type="email" id="form3Example3cg" className="form-control form-control-lg" onChange={(e) => setUserEmail(e.target.value)} />
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cg">Password</label>
                        <input type="text" id="form3Example4cg" className="form-control form-control-lg" onChange={(e) => setUserPassword(e.target.value)} />
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                        <input type="text" id="form3Example4cdg" className="form-control form-control-lg" onChange={(e) => setUserCPassword(e.target.value)} />
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cdg">Role</label>
                        <select className="form-control" onChange={(e) => setUserRole(e.target.value)} >
                          <option value="none">Choose Role</option>
                          <option value="admin">Admin</option>
                          <option value="customer">Customer</option>
                        </select>
                      </div>



                      <div className="d-flex justify-content-center">
                        <button type="submit" data-mdb-button-init
                          data-mdb-ripple-init className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Add User</button>
                      </div>


                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default AddUser