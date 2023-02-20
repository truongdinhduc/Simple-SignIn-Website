import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'
import SignInSignUpSignOut from '../../components/SignInSignUpSignOut'

export default function Home() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch({ type: 'getMyInformation', payload: {} })
    }, [])

    return (
        <div>
            <SignInSignUpSignOut />
        </div>
    )
}
