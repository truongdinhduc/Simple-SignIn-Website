import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'
import { Tabs, Form, Input, Button } from 'antd'
import styles from './styles.module.scss'
import { LoadingOutlined } from '@ant-design/icons';

export declare interface SignUpFormProps { }

export default function SignUpForm(props: SignUpFormProps) {
    const { } = props
    const dispatch = useDispatch()
    const [form] = Form.useForm()

    const { res, isLoading } = useSelector<RootState, any>(
        (state) => state.user?.signUp ?? {}
    )

    const onSignUp = async () => {
        let payload = await form.validateFields()
        dispatch({ type: 'signUp', payload: payload })
    }

    return (
        <Form form={form} >
            <Form.Item
                name={'username'}
                //label={<Text text='Username' className='medium'/>}
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

            <Form.Item
                name={'confirm_password'}
                //label={<Text text='Confirm password' className='medium'/>}
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('Not match!');
                        },
                    }),
                ]}
            >
                <Input
                    className={styles['input']}
                    type='password'
                    placeholder='Confirm password'
                />
            </Form.Item>

            {isLoading ?
                <div className={styles['submit-button']}>
                    <LoadingOutlined />
                </div>
                :
                <div className={styles['submit-button']} onClick={onSignUp}>
                    Sign up
                </div>
            }
        </Form>
    )
}
