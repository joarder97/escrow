import { Layout, Menu } from 'antd';
import {
  DollarCircleFilled,
  CompassOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';

import {useRouter}  from 'next/router';

const { Sider } = Layout;

// import MyApp from '../pages/buyer/_app.js';

// import '../styles/globals.css';



export default function LeftSideBar(){

  //   const handleSubmit = async () => {
  //     const {email, password} = values.user;
  //     const url = 'http://localhost:3000/logout';
  //     const requestBody = {
  //         email: email,
  //         password: password,
  //     };

  //     const response = await fetch(url, {
  //         method: 'POST',
  //         mode: 'cors',
  //         cache: 'no-cache',
  //         withCredentials: true,
  //         credentials: 'same-origin',
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(requestBody)
  //     });

  //     const data = await response.json();
  //     console.log(data.authenticated);



      

  //     if(data.authenticated==false){
  //         window.location.href = '/';
  //     }
  // };

  console.log("Hello from Bar");
    const router = useRouter();
    return(
            <Sider
              style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left:0,
              }}
            >
        
              <h2 className="logo">Escrow</h2>

              <Menu theme="dark" mode="inline">
                  <Menu.Item key="1" icon={<PlusCircleOutlined />} onClick={ () => router.push('/buyer/createOrder')}>
                    Create Order
                  </Menu.Item>
                  <Menu.Item key="2" icon={<DollarCircleFilled />} onClick={ () => router.push('/buyer/buyerDeposit')}>
                    Make Deposit
                  </Menu.Item>
                  <Menu.Item key="3" icon={<CompassOutlined />} onClick={ () => router.push('/buyer/trackOrder')}>
                    Track Order
                  </Menu.Item>
                  <Menu.Item key="4" icon={<CloseCircleOutlined />} onClick={ () => router.push('/buyer/cancelOrder')}>
                    Cancel Order
                  </Menu.Item>
                  <Menu.Item key="5" icon={<ExclamationCircleOutlined />}>
                    Claim Dispute
                  </Menu.Item>
                  <Menu.Item key="6">
                    Logout
                  </Menu.Item>
              </Menu>

            </Sider>
    )
}