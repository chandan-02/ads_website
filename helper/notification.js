import { Button, notification } from 'antd';
import { ExclamationCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';

const Notification = (msg, desc, type) => {
    notification.open({
        message: msg,
        description: desc,
        icon: type === 'error' ? <ExclamationCircleOutlined style={{ color: 'red' }} /> : <CheckCircleOutlined style={{ color: '#1890FF' }} />,
        duration: 2.0,
    });
};

export default Notification;
