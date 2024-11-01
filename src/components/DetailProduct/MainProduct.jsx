import React from 'react'
import { Button, Image, InputNumber, Space, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import image from "../../assets/chair/Image.png";

import CurrentAddress from './CurrentAddress';

const { Title } = Typography;



const MainProduct = () => {
    return (
        <Space align="start" size={32}>
            <Image src={image} style={{ width: '400px', height: '400px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px', gap: '8px' }}>
                <Title level={4} style={{ fontWeight: 'bold' }}>Áo polo Nam thể thao sport Unibody melange không đường may TOKYOLIFE 40000935</Title>
                <Title level={3}>$50.00</Title>
                <InputNumber min={1} max={10} defaultValue={1} style={{ width: '168px' }} />
                <CurrentAddress />
                <div style={{ marginTop: '16px', display: 'flex', gap: '16px' }}>
                    <Button type="primary" style={{ width: '168px', height: '48px' }} icon={<ShoppingCartOutlined />} >
                        Thêm Vào Giỏ Hàng
                    </Button>
                    <Button style={{ width: '168px', height: '48px', backgroundColor: 'red', color: 'white', border: 'none' }}>Mua Ngay</Button>
                </div>
            </div>
        </Space>
    )
}

export default MainProduct