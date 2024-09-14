import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UserList = () => {

  const [UserAccount, setUserAccount] = useState([]);


  useEffect(() => {


    const fetchAccount = async () => {

      try {

        const Response = await fetch("https://66dfe57b2fb67ac16f277421.mockapi.io/aptechnn/userAccount");
        if (Response.status === 200) {

          const userAccount_Data = await Response.json();

          setUserAccount(userAccount_Data);


        }


      } catch (error) {
        console.log(error)
      }


    }


    fetchAccount();

  }, [UserAccount])



const Notification = (message) =>{
  toast.success(`User ${message} Deleted !!   `, {
    autoClose:1000,
    theme:'dark',
    position:'top-right'
  });
}



const DeleteUser  = async(userid,username) =>{
  

  try{

    const DeleteUser = await fetch(`https://66dfe57b2fb67ac16f277421.mockapi.io/aptechnn/userAccount/${userid}`,{
      method:'DELETE'
    });

    if(DeleteUser.status === 200){


      Notification(username);

    }

  }catch(error){
    console.log(error)
  }

}

  return (
    <>

      <div className="container mt-4">

        <h1 className="text-center mt-4">User Account List</h1>


        <table className="table mt-4">
          <thead>
            <tr className="table-dark">
              <th scope="col">#</th>
              <th scope="col">User Name</th>
              <th scope="col">User Email</th>
              <th scope="col">User Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>


            {
              UserAccount.map((user,index) => {
                return (
                  <>

                    <tr key={index}>
                      <th scope="row">{user.id}</th>
                      <td>{user.userName}</td>
                      <td>{user.userEmail}</td>
                      <td>{user.userRole}</td>
                      <td>

                        <button className='btn btn-dark btn-sm mx-2'>Update</button>
                        <button className='btn btn-danger btn-sm'  onClick={()=>DeleteUser(user.id,user.userName)}  >Delete</button>


                      </td>
                    </tr>

                  </>
                )
              })
            }






          </tbody>
        </table>

      </div>
            <ToastContainer/>
    </>
  )
}

export default UserList