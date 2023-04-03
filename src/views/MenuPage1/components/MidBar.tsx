import { Radio } from 'antd';
import React, { PureComponent } from 'react';

const MidBar = () => {
    return (
        <div>
            <Radio.Group defaultValue="a" style={{ marginTop: 16 }}>
                <Radio.Button value="a">总量</Radio.Button>
                <Radio.Button value="b">访问量</Radio.Button>
            </Radio.Group>
        </div>
    )
}
export default MidBar