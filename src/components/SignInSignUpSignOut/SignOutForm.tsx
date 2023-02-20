import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'
import { Tabs, Form, Input, Button } from 'antd'
import styles from './styles.module.scss'
import { LoadingOutlined } from '@ant-design/icons';
import { getClientCookies } from '../../services/Cookies'

export declare interface SignOutFormProps { }

export default function SignOutForm(props: SignOutFormProps) {
    const { } = props
    const dispatch = useDispatch()
    const [form] = Form.useForm()

    const { res: myInformation, isLoading } = useSelector<RootState, any>(
        (state) => state.user?.myInformation ?? {}
    )

    const onSignOut = async () => {
        let payload = await form.validateFields()
        dispatch({ type: 'signOut', payload: payload })
    }

    useEffect(() => {
        if (myInformation?._id) {
            form.setFieldsValue(myInformation)
            form.setFieldValue('token', getClientCookies('token'))
        }
    }, [myInformation])

    return (
        <Form form={form} >

            {myInformation?.username && <>
                <div className={styles['input-label']}>Username</div>
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
                        disabled
                    />
                </Form.Item>
            </>
            }

            {myInformation?.password && <>
                <div className={styles['input-label']}>Password</div>
                <Form.Item
                    name={'password'}
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
                        disabled
                    />
                </Form.Item>
            </>
            }

            {myInformation?.email && <>
                <div className={styles['input-label']}>Email</div>
                <Form.Item name={'email'}>
                    <Input
                        className={styles['input']}
                        type='text'
                        placeholder='Email'
                        disabled
                    />
                </Form.Item>
            </>
            }

            <div className={styles['input-label']}>JWT Token</div>
            <Form.Item
                name={'token'}
            >
                <Input
                    className={styles['input']}
                    type='password'
                    placeholder='Token'
                    disabled
                />
            </Form.Item>

            {isLoading ?
                <div className={styles['submit-button']}>
                    <LoadingOutlined />
                </div>
                :
                <div className={styles['submit-button']} onClick={onSignOut}>
                    Sign out
                </div>
            }
        </Form>
    )
}
