import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'
import { Form, Input } from 'antd'
import styles from './styles.module.scss'
import { LoadingOutlined } from '@ant-design/icons';
import SignInWithGoogle from '../SignInWithGoogle'

export declare interface SignInFormProps {
    changeForm?: () => void
}

export default function SignInForm(props: SignInFormProps) {
    const { changeForm } = props
    const dispatch = useDispatch()
    const [form] = Form.useForm()

    const { res, isLoading } = useSelector<RootState, any>(
        (state) => state.user?.signIn ?? {}
    )

    const onSignIn = async () => {
        let payload = await form.validateFields()
        dispatch({ type: 'signIn', payload: payload })
    }

    return (
        <div>
            <Form form={form} >
                <Form.Item
                    name={'username'}
                    rules={[
                        {
                            required: true,
                            message: 'Enter your username!',
                        },
                        {
                            min: 6,
                            message: 'Your username must be at least 8 characters!'
                        },
                    ]}
                >
                    <Input
                        className={styles['input']}
                        placeholder='Username'
                        type='text'

                    />
                </Form.Item>

                <Form.Item
                    name={'password'}
                    //abel={<Text text='Password' className='medium'/>}
                    rules={[
                        {
                            required: true,
                            message: 'Enter your password!',
                        },
                        {
                            min: 8,
                            message: 'Your password must be at least 8 characters!'
                        },
                    ]}
                >
                    <Input
                        className={styles['input']}
                        type='password'
                        placeholder='Password'
                    />
                </Form.Item>

                {isLoading ?
                    <div className={styles['submit-button']}>
                        <LoadingOutlined />
                    </div>
                    :
                    <div className={styles['submit-button']} onClick={onSignIn}>
                        Sign in
                    </div>
                }

                <div className={styles['option']} >
                    <span>Forgotten password?</span>
                </div>
                <div className={styles['option']} >
                    <span onClick={() => { changeForm && changeForm() }}>Create an account</span>
                </div>
            </Form>
            <div className={styles['sign-in-with']}>
                <div className={styles['text']}>Or sign in with</div>
                <div className={styles['button']}><SignInWithGoogle /></div>
            </div>
        </div>
    )
}
