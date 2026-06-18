import React, { useState } from 'react';
import { Card, Form, Input, Select, Button, Row, Col, message } from 'antd';
import axios from 'axios';
import '../styles/Creator.css';

function TextCreator() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/projects', {
        type: 'text',
        title: values.title,
        sourceText: values.sourceText,
        duration: values.duration,
        aiModel: values.aiModel
      });
      message.success('项目创建成功');
      form.resetFields();
    } catch (error) {
      message.error('创建失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="creator-container">
      <div className="creator-header">
        <h1>AI副本撰写</h1>
        <p>输入主题和时长，生成中英双语脚本</p>
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <Card>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                label="内容 *"
                name="sourceText"
                rules={[{ required: true, message: '请输入内容' }]}
              >
                <Input.TextArea
                  rows={6}
                  placeholder="粘贴文案 / 字幕 / 剧情描述 / 解说稿 - AI基于此创作"
                />
              </Form.Item>

              <Form.Item
                label="文案类型"
                name="type"
              >
                <Select placeholder="选择类型">
                  <Select.Option value="text">文字描述</Select.Option>
                  <Select.Option value="script">脚本</Select.Option>
                  <Select.Option value="article">文章</Select.Option>
                </Select>
              </Form.Item>

              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="时长"
                    name="duration"
                  >
                    <Select placeholder="选择时长">
                      <Select.Option value="60">60s</Select.Option>
                      <Select.Option value="90">90s</Select.Option>
                      <Select.Option value="120">120s</Select.Option>
                      <Select.Option value="180">180s</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="AI模型"
                    name="aiModel"
                  >
                    <Select placeholder="选择AI模型">
                      <Select.Option value="deepseek">Deepseek</Select.Option>
                      <Select.Option value="chatgpt">ChatGPT</Select.Option>
                      <Select.Option value="gemini">Gemini</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item>
                <Button type="primary" htmlType="submit" block loading={loading} size="large">
                  生成内容
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card title="使用说明">
            <div className="tips">
              <h4>📝 如何使用</h4>
              <ol>
                <li>输入你的内容或描述</li>
                <li>选择合适的时长</li>
                <li>选择AI模型</li>
                <li>点击生成</li>
              </ol>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default TextCreator;