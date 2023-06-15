import React from 'react';
import './index.css';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import {Fory} from './Fory'

const App: React.FC = () => (
  <Tabs
    defaultActiveKey="2"
    items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
      const id = String(i + 1);

      return {
        label: (
          <span>
            <Icon />
            Tab {id}
          </span>
        ),
        key: id,
        children: <Fory />,
      };
    })}
  />
);

export default App;