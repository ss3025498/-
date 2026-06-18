import React from 'react';
import { Card, Empty } from 'antd';

function VideoGuide() {
  return (
    <div style={{ padding: 24 }}>
      <Card>
        <h1>视频导入</h1>
        <Empty description="该功能正在开发中，敬请期待" />
      </Card>
    </div>
  );
}

export default VideoGuide;