import React, { useState } from 'react';
import { Card, Form, Input, Button, message, Row, Col, Statistic } from 'antd';
import axios from 'axios';

function UserProfile({ user }) {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      message.success('个人资料更新成功');
    } catch (error) {
      message.error('更新失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <Card title="个人资料">
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <Form
              layout="vertical"
              onFinish={onFinish}
              initialValues={user}
            >
              <Form.Item label="用户名" name="username">
                <Input />
              </Form.Item>
              <Form.Item label="邮箱" name="email">
                <Input type="email" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                  保存
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col xs={24} lg={12}>
            <Card title="账户信息">
              <Row gutter={16}>
                <Col xs={12}>
                  <Statistic title="积分余额" value={100} />
                </Col>
                <Col xs={12}>
                  <Statistic title="VIP等级" value="普通用户" />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default UserProfile;