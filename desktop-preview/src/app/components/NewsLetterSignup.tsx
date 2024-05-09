import React, { useState } from 'react';
import styles from "./NewsLetterSignUp.module.css"
// import SignUpIllustration from '/image/images/illustration-sign-up-desktop.svg'

interface Props {
    onSubscribe: (email: string) => Promise<void>;
}

const NewsLetterSignup: React.FC<Props> = ({onSubscribe}) => {

    const [email, setEmail] = React.useState('')
    const [isSubscribed, setIsSubscribed] = React.useState(false); 

    const handleSubmit = async () => {
        try {
            await onSubscribe(email);
            setIsSubscribed(true);
        } catch (error) {
            console.error("Subscription failed:", error);
        }
    }

    // if (isSubscribed) {
    //     return <SubcriptionConfirmation />
    // }

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
                    <form className={styles.form}>
                        <label htmlFor="email" className={styles.label}>Email address</label>
                        <input id="email" type="email" placeholder="Your email" className={styles.input} />
                        <button type="submit" onClick={handleSubmit} className={styles.button}>Subscribe to monthly newsletter</button>
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