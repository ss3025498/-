import React from 'react';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import {
  HomeOutlined,
  FileTextOutlined,
  VideoOutlined,
  AudioOutlined,
  RiseOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar({ user, onLogout }) {
  const navigate = useNavigate();

  const menuItems = [
    { key: '/', label: '总览', icon: <HomeOutlined /> },
    { type: 'divider' },
    { label: '创作工具', type: 'group', children: [
      { key: '/text-creator', label: 'AI一键改编', icon: <FileTextOutlined /> },
      { key: '/video-guide', label: '视频导入', icon: <VideoOutlined /> },
      { key: '/text-to-video', label: 'AI配音', icon: <AudioOutlined /> },
      { key: '/one-click', label: 'AI一键成片', icon: <VideoOutlined /> }
    ]},
    { type: 'divider' },
    { key: '/points', label: '积分充值', icon: <RiseOutlined /> },
    { key: '/profile', label: '个人资料', icon: <UserOutlined /> },
    { type: 'divider' },
    { key: '/settings', label: '偏好设置', icon: <SettingOutlined /> },
  ];

  const handleMenuClick = (key) => {
    navigate(key);
  };

  const userMenuItems = [
    { key: 'profile', label: '个人资料' },
    { key: 'settings', label: '设置' },
    { type: 'divider' },
    { key: 'logout', label: '退出登录', danger: true }
  ];

  const handleUserMenuClick = (e) => {
    if (e.key === 'logout') {
      onLogout();
      navigate('/login');
    } else if (e.key === 'profile') {
      navigate('/profile');
    } else if (e.key === 'settings') {
      navigate('/settings');
    }
  };

  return (
    <Layout.Sider className="sidebar" width={200}>
      <div className="sidebar-header">
        <div className="logo">✨ SP Matrix</div>
        <p className="subtitle">创作助手</p>
      </div>

      <Menu
        mode="inline"
        items={menuItems}
        onClick={(e) => handleMenuClick(e.key)}
        style={{ border: 'none' }}
      />

      <div className="sidebar-footer">
        <Dropdown
          menu={{
            items: userMenuItems,
            onClick: handleUserMenuClick
          }}
          trigger={['click']}
        >
          <div className="user-info" style={{ cursor: 'pointer' }}>
            <Avatar size={40} icon={<UserOutlined />} />
            <div className="user-details">
              <div className="username">{user?.username || 'User'}</div>
              <div className="points">100 积分</div>
            </div>
          </div>
        </Dropdown>
      </div>
    </Layout.Sider>
  );
}

export default Sidebar;