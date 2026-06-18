import React from 'react';
import { Card, Form, Switch, Button, message } from 'antd';

function Settings() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    message.success('设置已保存');
  };

  return (
    <div style={{ padding: 24 }}>
      <Card title="偏好设置">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="邮件通知"
            name="emailNotifications"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="推送通知"
            name="pushNotifications"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="深色模式"
            name="darkMode"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              保存设置
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Settings;