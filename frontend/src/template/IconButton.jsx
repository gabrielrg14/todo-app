import React from 'react'

import If from '../template/If'

export default props => (
    <If test={!props.hide}>
        <button className={`btn btn-${props.style} icon-button`} onClick={props.onClick}>
            <i className={`fa fa-${props.icon}`}></i>
        </button>
    </If>
)