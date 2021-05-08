import React from 'react';
import ContentHeader from '../molecules/ContentHeader';
import ContentFooter from '../molecules/ContentFooter';

function StartPage() {
    return (
        <div className="page-content">
            <ContentHeader
                headerTitle="Getting Started"
                headerDescription="Hướng dẫn chi tiết các bước tích hợp API 247"
            />
            <ContentFooter />
        </div>
    );
}

export default StartPage;