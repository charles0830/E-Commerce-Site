import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class PayPalButton extends React.Component {
    render() {
        const onSuccess = () => {
            this.props.clearCart();
            this.props.history.push('/');
        }
        const onCancel = () => {

        }

        const onError = (err) => {
            console.log("Error!", err);
        }

        let env = 'sandbox';
        let currency = 'USD';
        let total = this.props.total;
        const client = {
            sandbox:    'YOUR-SANDBOX-APP-ID',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        return (
            <PaypalExpressBtn
                env={env}
                client={client}
                currency={currency}
                total={total}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel} />
        );
    }
}