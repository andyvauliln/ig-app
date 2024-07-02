import React from 'react';
import juno from '../junoConfig';

const PaymentButton = ({ courseId, amount }) => {
    const handlePayment = async () => {
        try {
            const paymentResponse = await juno.payments.create({
                amount,
                currency: 'ICP',
                description: `Payment for course ${courseId}`,
                // Add other necessary payment details
            });

            // Handle payment response
            console.log('Payment successful:', paymentResponse);
        } catch (error) {
            console.error('Payment failed:', error);
        }
    };

    return (
        <button onClick={handlePayment}>
            Pay {amount} ICP for Course {courseId}
        </button>
    );
};

export default PaymentButton;