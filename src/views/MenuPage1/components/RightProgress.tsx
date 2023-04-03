import { Progress } from 'antd';
import React, { PureComponent } from 'react';

const RightProgress = (props:any) => {
    return(
        <div style={{lineHeight:'50px'}}>
            <Progress percent={props.content.progress} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />
        </div>
    )
}
export default RightProgress