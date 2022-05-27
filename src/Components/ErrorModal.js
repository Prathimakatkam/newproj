import React from 'react'
import Button from './Button'
import Card from './Card'
import classes from './ErrorModal.module.css'


function ErrorModal(props) {
    return (
        <div className={classes.backdrop} onClick={props.onConfirm} >
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2></header>

                <p className={classes.content}> {props.message}</p>

                <footer>
                    <Button className={classes.action} onClick={props.onConfirm}> Okay</Button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal