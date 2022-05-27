import React from 'react'
import Card from './Card'
import classes from './DisplayDetails.module.css'


function DisplayDetails(props) {
  return (
    <Card className={classes.users}>
    <ul>
      {
        props.users.map(user=><li key={user.id}> {user.uname} ({user.uage} Years old)</li>)
      }
      </ul>
      </Card>
  )
}

export default DisplayDetails