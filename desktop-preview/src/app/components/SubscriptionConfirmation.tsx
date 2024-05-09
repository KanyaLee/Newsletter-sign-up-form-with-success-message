import React from 'react';
import styles from "./SubscriptionConfirmation.module.css"

interface Props {
    email: string;
    onDismiss: () => void;
}

const SubscriptionConfirmation: React.FC<Props> = ({ email, onDismiss }) => {
    return (
        <div className={styles.main_container}>
            <div className={styles.newsletter_container}>
                <img className={styles.icon_success1} src='/image/images/icon-success.svg'></img>
                <h2 className={styles.newsletter_title}>Thanks for subscribing!</h2>
                <p className={styles.newsletter_text}>
                    A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription.
                </p>
                <button onClick={onDismiss} className={styles.newsletter_button}>
                    Dismiss message
                </button>
            </div>
        </div>
    );
};

export default SubscriptionConfirmation;