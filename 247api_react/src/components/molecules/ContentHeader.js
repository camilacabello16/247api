import React from 'react';
import '../../assets/styles/molecules/content-header.css';
import PropTypes from 'prop-types';

ContentHeader.propTypes = {
    headerTitle: PropTypes.string,
    headerDescription: PropTypes.string
}

ContentHeader.defaultProps = {
    headerTitle: "Getting started",
    headerDescription: "Trang bắt đầu"
}

function ContentHeader(props) {
    return (
        <div className="wrap-content-header">
            <p className="content-header-title">{props.headerTitle}</p>
            <p className="content-header-txt">{props.headerDescription}</p>
        </div>
    );
}

export default ContentHeader;