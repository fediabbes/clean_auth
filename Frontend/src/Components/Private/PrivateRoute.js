import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import './PrivateRoute.css'

function PrivateRoute({ children }) {
    const token = localStorage.getItem('token')
    const auth = useSelector(state => state.AuthReducer.auth)
    const [loading, setLoading] = useState(true)



    const handleEffectLoading = async () => {
        try {
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleEffectLoading()
    }, [])


    return (
        <div>
            {loading ?
                <Button className='SpinnerBtn'  variant='dark' disabled>
                    <Spinner
                    className='Spinner'
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
                :
                (auth && token) ? children : <Navigate to='/signin' />
            }
        </div>
    )
}

export default PrivateRoute