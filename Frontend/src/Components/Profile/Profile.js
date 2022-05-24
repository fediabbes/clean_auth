

import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { get_current } from '../../redux/Actions/AuthActions'

function Profile() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.AuthReducer.user)

    useEffect(()=> {
        dispatch(get_current())
    },[user])
    return (
        <div>
            <h1 style={{ color: 'silver' }}>
                Welcome to your profile mr
                <span style={{ color: "blue", textTransform: "uppercase", fontSize: "50px" }}>
                    {user && user.username}

                </span></h1>
        </div>
    )
}

export default Profile