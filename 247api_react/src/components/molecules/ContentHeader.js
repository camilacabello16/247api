import React from 'react';
import '../../assets/styles/molecules/content-header.css';

function ContentHeader(props) {
    return (
        <div className="wrap-content-header">
            <p className="content-header-title">{props.headerTitle}</p>
            <p className="content-header-txt">{props.headerDescription}</p>
        </div>
    );
}

export default ContentHeader;