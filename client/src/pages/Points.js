import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Form, Input, Statistic, message } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import axios from 'axios';
import '../styles/Points.css';

function Points() {
  const [packages, setPackages] = useState([]);
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [redeemForm] = Form.useForm();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const pkgRes = await axios.get('/api/points/packages');
      const balRes = await axios.get('/api/points/balance');
      setPackages(pkgRes.data);
      setBalance(balRes.data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const handlePurchase = async (packageId) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/points/purchase', { packageId });
      message.success('订单已创建，请继续支付');
    } catch (error) {
      message.error('购买失败');
    } finally {
      setLoading(false);
    }
  };

  const handleRedeem = async (values) => {
    try {
      const response = await axios.post('/api/points/redeem', { code: values.code });
      message.success(response.data.message);
      redeemForm.resetFields();
      fetchData();
    } catch (error) {
      message.error(error.response?.data?.message || '兑换失败');
    }
  };

  return (
    <div className="points-container">
      <div className="points-header">
        <h1>积分充值</h1>
        <p>点击套餐卡开启支付</p>
      </div>

      <Card className="balance-card" style={{ marginBottom: 24 }}>
        <Row gutter={24}>
          <Col xs={12} sm={6}>
            <Statistic
              title="已用"
              value={balance?.used || 0}
              suffix="积分"
            />
          </Col>
          <Col xs={12} sm={6}>
            <Statistic
              title="剩余"
              value={balance?.available || 0}
              suffix="积分"
            />
          </Col>
          <Col xs={12} sm={6}>
            <Statistic
              title="总额"
              value={balance?.total || 0}
              suffix="积分"
            />
          </Col>
          <Col xs={12} sm={6}>
            <Statistic
              title="转换率"
              value="¥0.01"
              prefix="1积分 = "
            />
          </Col>
        </Row>
      </Card>

      <Card title="积分充值" style={{ marginBottom: 24 }}>
        <Row gutter={[16, 16]}>
          {packages.map((pkg) => (
            <Col xs={24} sm={12} lg={6} key={pkg.id}>
              <Card
                className="package-card"
                hoverable
              >
                <h3>{pkg.name}</h3>
                <div className="package-points">{pkg.points}</div>
                <div className="package-desc">积分</div>
                <div className="package-price">{pkg.description}</div>
                <Button
                  type="primary"
                  block
                  loading={loading}
                  onClick={() => handlePurchase(pkg.id)}
                  icon={<ShoppingCartOutlined />}
                >
                  立即支付
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="兑换码">
            <Form form={redeemForm} onFinish={handleRedeem}>
              <Form.Item name="code" rules={[{ required: true, message: '请输入兑换码' }]}>
                <Input placeholder="SPA1-XXXX-XXXX-XXXX" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  兑换
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="积分消耗说明">
            <div className="points-explanation">
              <h4>每次按下上取整到套餐额度的一折起费</h4>
              <div style={{ marginTop: 12 }}>
                <p><strong>AI副本</strong>：3积分/分钟</p>
                <p><strong>AI配音（选配）</strong>：价格随选配项而定</p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Points;