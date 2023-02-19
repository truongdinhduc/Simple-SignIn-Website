import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect, useState } from 'react'
import { Tabs, Form, Input } from 'antd'
import styles from './styles.module.scss'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import SignOutForm from './SignOutForm'

export default function SignInAndSignUpForm() {
    const dispatch = useDispatch()
    const [activeKey, setActiveKey] = useState('1')

    const { res: myInformation, isLoading } = useSelector<RootState, any>(
        (state) => state.user?.myInformation ?? {}
    )

    return (
        <div className={styles['container']}>
            <div className={styles['form']}>
                {myInformation?.username ?
                    <Tabs
                        className={styles['tab']}
                        centered={true}
                        items={[
                            {
                                label: <div className={styles['tab-label']}>Your information</div>,
                                key: '1',
                                children: <SignOutForm />
                            },
                        ]}
                    />
                    :
                    <Tabs
                        className={styles['tab']}
                        onChange={(tabKey) => { setActiveKey(tabKey) }}
                        activeKey={activeKey}
                        centered={true}
                        items={[
                            {
                                label: <div className={styles['tab-label']}>Sign in</div>,
                                key: '1',
                                children: <SignInForm changeForm={() => { setActiveKey('2') }} />
                            },
                            {
                                label: <div className={styles['tab-label']}>Sign up</div>,
                                key: '2',
                                children: <SignUpForm />
                            }
                        ]}
                    />
                }
            </div>
        </div>
    )
}
