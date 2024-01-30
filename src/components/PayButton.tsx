import { PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";
import { clientId } from '../constants';
import {PayPalButtonsComponentOptions} from "@paypal/paypal-js/types/components/buttons"

const PayButton: React.FC = () =>{
  const createOrder: PayPalButtonsComponentOptions['createOrder'] = (data, actions) => {
    return actions.order.create({
      purchase_units:[
        {
          amount: {
            currency_code: 'USD',
            value: '9.99'
          }
        }
      ]
    })
  }

  const onApprove:PayPalButtonsComponentOptions['onApprove'] = async (data, actions) => {
      const orderData = actions.order?.capture();
      console.log('orderData', orderData);
  }

  const initialOptions = {
    clientId: clientId,
    currency: "USD",
    intent: "capture",
  };

  return (    
    <div className='pay'>
      <h3>Complete Your Payment</h3>
      <p>Amount: $9.99</p>
      <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons 
          createOrder={createOrder}
          onApprove={onApprove}
          style={{              
            color: 'blue',
            layout: "vertical",
            label: 'paypal',
            }} />
      </PayPalScriptProvider>
    </div>
  
    );
}

export default PayButton;