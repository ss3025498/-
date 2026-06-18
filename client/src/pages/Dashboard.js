import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Statistic, List, Avatar, Empty } from 'antd';
import {
  FileTextOutlined,
  AudioOutlined,
  VideoOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

function Dashboard({ user }) {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    setStats({
      totalPoints: 100,
      availablePoints: 100,
      usedPoints: 0,
      totalCredits: 5,
      completedProjects: 0
    });
  }, []);

  const quickStartItems = [
    {
      title: 'AI副本撰写',
      description: '输入主题时长，生成中英双语脚本',
      icon: <FileTextOutlined />,
      path: '/text-creator',
      color: '#667eea'
    },
    {
      title: 'AI配音',
      description: '25个ElevenLabs声库，文案一键点音',
      icon: <AudioOutlined />,
      path: '/text-to-video',
      color: '#764ba2'
    },
    {
      title: '视频导入',
      description: '上传mp4/mp3文件、腾讯ASR转字幕',
      icon: <VideoOutlined />,
      path: '/video-guide',
      color: '#f093fb'
    }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>夜深了，{user?.username}</h1>
        <p>AI创作中心 · 一键落到你电脑的剪映、抖音、快手</p>
      </div>

      <div className="stats-grid">
        <Card className="stat-card">
          <Statistic
            title="积分余额"
            value={stats?.totalPoints}
            prefix="💰"
            suffix="积分"
          />
          <div style={{ marginTop: 16 }}>= ¥{stats?.totalPoints ? (stats.totalPoints * 0.01).toFixed(2) : 0}</div>
        </Card>
        <Card className="stat-card">
          <Statistic
            title="本月已用"
            value={stats?.usedPoints}
            prefix="💳"
            suffix="积分"
          />
        </Card>
        <Card className="stat-card">
          <Statistic
            title="配音额度"
            value={stats?.totalCredits}
            prefix="🎙️"
          />
        </Card>
        <Card className="stat-card">
          <Statistic
            title="创作数量"
            value={stats?.completedProjects}
            prefix="🎬"
          />
        </Card>
      </div>

      <Card className="quick-start-card">
        <h2>快速开始</h2>
        <p>选一个功能开始创作</p>
        <Row gutter={[16, 16]}>
          {quickStartItems.map((item, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card
                className="quick-start-item"
                hoverable
                onClick={() => navigate(item.path)}
                style={{
                  borderLeft: `4px solid ${item.color}`,
                  cursor: 'pointer'
                }}
              >
                <div className="quick-start-content">
                  <div className="quick-start-icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Button
                    type="primary"
                    size="small"
                    icon={<ArrowRightOutlined />}
                  >
                    开始
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      <Card className="recent-projects-card">
        <h2>最近作品</h2>
        <Empty description="还没有创建过作品" />
      </Card>
    </div>
  );
}

export default Dashboard;