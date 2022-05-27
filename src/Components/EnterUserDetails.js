import React, { useState } from 'react'
import Button from './Button'
import Card from './Card'
import Styles from './EnterUserDetails.module.css'
import ErrorModal from './ErrorModal'

function EnterUserDetails(props) {


  const [userName, setUserName] = useState("")
  const [userAge, setAge] = useState("")

  const [error, setError] = useState()

  const changeUserNameHandler = (e) => {
    setUserName(e.target.value)
  }
  const changeAgeHandler = (e) => {
    setAge(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title:"InValid Input",
        message:"Enter Valid UserName and Age"
      })
      return;
    }
    if (+userAge < 0) {
       setError({
        title:"InValid Input",
        message:"Enter Valid Age"
      })
      return;
    }
    props.addUserDetails(userName, +userAge)
    setUserName('')
    setAge('')
  }

const errorHandler=()=>{
  setError(null)
}
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
    <Card className={Styles.input}>
      <form onSubmit={submitHandler} >

        <label>Username </label>
        <input type="text" value={userName} onChange={changeUserNameHandler} />


        <label>Age(Years)</label>
        <input type="number" value={userAge} onChange={changeAgeHandler} />


        <Button type="submit">Add User</Button>

      </form>
    </Card>
    </div>

  )
}

export default EnterUserDetails