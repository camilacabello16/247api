import React, { useState, useEffect } from 'react';
import '../../assets/styles/pages/layout-page.css';
import Menu from '../sections/Menu';
import StartPage from './StartPage';
import ContentHeader from '../molecules/ContentHeader';
import ContentFooter from '../molecules/ContentFooter';
import ContentBody from '../molecules/ContentBody';
import axios from 'axios';

function LayoutPage() {
    const [articleInfo, setArticleInfo] = useState({});

    function handleOpenArticle(article) {
        setArticleInfo(article);
    }

    return (
        <div className="page-container">
            <Menu
                handleOpenArticle={handleOpenArticle}
            />
            <div className="page-content">
                <ContentHeader
                    headerTitle={articleInfo.ArticleName}
                    headerDescription={articleInfo.BriefDescription}
                />
                <ContentBody
                    articleInfo={articleInfo}
                />
                <ContentFooter />
            </div>
        </div>
    );
}

export default LayoutPage;