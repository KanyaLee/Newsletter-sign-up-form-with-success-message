import React from 'react';

interface Props {
    email: string;
    onDismiss: () => void;
}

const SubscriptionConfirmation: React.FC<Props> = ({ email, onDismiss }) => {
    return (
        <div className="newsletter-container">
            <svg className="w-16 h-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h2 className="newsletter-title">Thanks for subscribing!</h2>
            <p className="newsletter-text">
                A confirmation email has been sent to {email}. Please open it and click the button inside to confirm your subscription.
            </p>
            <button onClick={onDismiss} className="newsletter-button">
                Dismiss message
            </button>
        </div>
    );
};

export default SubscriptionConfirmation;