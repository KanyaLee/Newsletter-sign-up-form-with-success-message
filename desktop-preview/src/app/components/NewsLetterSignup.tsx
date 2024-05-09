import React, { useState } from 'react';
import styles from "./NewsLetterSignUp.module.css"
// import SignUpIllustration from '/image/images/illustration-sign-up-desktop.svg'
import SubscriptionConfirmation from './SubscriptionConfirmation';

interface Props {
    onSubscribe: (email: string) => Promise<void>;
}

const NewsLetterSignup: React.FC<Props> = ({onSubscribe}) => {

    const [email, setEmail] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false); 
    const [emailError, setEmailError] = useState('')

    const validateEmail = (email:string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!validateEmail(email)) {
            setEmailError("Valid Email required");
            return;
        }
        setEmailError('')

        try {
            await onSubscribe(email);
            setIsSubscribed(true);
        } catch (error) {
            console.error("Subscription failed:", error);
        }
    }

    if (isSubscribed) {
        return <SubscriptionConfirmation email={email} onDismiss={() => setIsSubscribed(false)} />
    }

    return (
        <div className={styles.container}>
            <div className={styles.subcontainer}>
                <div className={styles.leftcontent}>
                    <h2 className={styles.title}>Stay updated!</h2>
                    <p className={styles.subtitle}>Join 60,000+ product managers receiving monthly updates on:</p>
                    <ul className={styles.list}>
                        <p className={styles.listItem}>
                            <img className={styles.icon_success} src='/image/images/icon-success.svg'></img>
                            Product discovery and building what matters
                        </p>
                        <p className={styles.listItem}>
                        <img className={styles.icon_success} src='/image/images/icon-success.svg'></img>
                            Measuring to ensure updates are a success</p>
                        <p className={styles.listItem}>
                        <img className={styles.icon_success} src='/image/images/icon-success.svg'></img>
                            And much more!</p>
                    </ul>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label htmlFor="email" className={styles.label}>Email address</label>
                        { emailError && <p className={styles.errorMessage}>{emailError}</p> } 
                        <input id="email" 
                        type="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Your email" 
                        className={`${styles.input} ${emailError ? styles.inputError: ''}` } />

                        <button 
                        type="submit"
                        className={styles.button}>Subscribe to monthly newsletter</button>
                    </form>
                </div>


                <div className={styles.rightcontent}>
                    <img src="/image/images/illustration-sign-up-desktop.svg" alt="Illustration of people working together" />
                </div>
            </div>
        </div>

    )
}

export default NewsLetterSignup