import styles from '../styles/Home.module.css'
import { Alert, Button, Space } from 'antd';
import { useState } from 'react';


export default function cancelOrder() {

  const [orderStatus, setOrderStatus] = useState('');

  const onSubmit = async () => {

    let key = 'o1';

    const url = 'http://localhost:3000/cancelOrder';

    let requestBody = {
      key:key,
    };

    let response = await fetch(url, {
      method: 'POST',
    //   mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
  });
    let displayOrderStatus = 'Order Cancelled '; 
    let data = await response.json();
    console.log(data);
    setOrderStatus(displayOrderStatus);
    
};

  return (
    <Alert
    message="Cancel Order"
    description="Do you want to cancel your order?"
    type="warning"
    action={
      <Space direction="vertical">
        <Button size="small" danger type="ghost" onClick={onSubmit}>
          Yes
        </Button>
        <Button size="small" type="primary">
          No
        </Button>
        <p>{orderStatus}</p>
      </Space>
    }
    closable
  />
  )
}