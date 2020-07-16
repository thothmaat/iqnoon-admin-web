import React from 'react';
import { Spin } from 'antd';

const Loading = () => (
  <div className="cm-loading">
    <Spin className="cm-loading__spinner" />
    <span className="cm-loading__text">加载中...</span>
  </div>
);

export default Loading;
