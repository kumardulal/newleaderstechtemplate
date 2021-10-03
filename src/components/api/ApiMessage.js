// import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export default function ApiMessage(messagedata) {
    const sendername = messagedata.sendername
    const senderidentity = messagedata.senderidentity
    const messagesubject = messagedata.messagesubject
    const message = messagedata.message

    try {
        Axios.post('http://localhost:3001/message_post', {
            sendername: sendername,
            senderidentity: senderidentity,
            messagesubject: messagesubject,
            message: message,
        }).then((response) => {
            console.log(response)
            alert(response.data)
            window.location.reload();
        })
    }
    catch (err) {
        console.log(err)
    }

}
