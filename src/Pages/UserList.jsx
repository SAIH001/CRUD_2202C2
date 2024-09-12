import React, { useEffect, useState } from 'react'

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

  }, [])





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
                        <button className='btn btn-danger btn-sm'>Delete</button>


                      </td>
                    </tr>

                  </>
                )
              })
            }






          </tbody>
        </table>

      </div>

    </>
  )
}

export default UserList