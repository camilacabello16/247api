import React, { useState, useEffect } from 'react';
import '../../assets/styles/pages/layout-page.css';
import Menu from '../sections/Menu';
import StartPage from './StartPage';
import ContentHeader from '../molecules/ContentHeader';
import ContentFooter from '../molecules/ContentFooter';
import ContentBody from '../molecules/ContentBody';
import axios from 'axios';
import SearchContainer from '../molecules/SearchContainer';

function LayoutPage() {
    const [articleInfo, setArticleInfo] = useState({});

    const [isOpenSearchBox, setIsOpenSearchBox] = useState(false);

    function handleOpenArticle(article) {
        setArticleInfo(article);
    }

    function handleOpenSearchBox() {
        setIsOpenSearchBox(true);
    }

    function handleCloseSearchBox() {
        setIsOpenSearchBox(false);
    }

    return (
        <>
            <div className="page-container">
                <Menu
                    handleOpenArticle={handleOpenArticle}
                    handleOpenSearchBox={handleOpenSearchBox}
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
                    <div className="wrap-cover-page" style={isOpenSearchBox == false ? { display: 'none' } : { display: 'block' }}></div>
                    <div
                        className="wrap-search-box"
                        style={isOpenSearchBox == false ? { display: 'none' } : { display: 'block' }}
                    >
                        <SearchContainer
                            handleCloseSearchBox={handleCloseSearchBox}
                            handleOpenArticle={handleOpenArticle}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutPage;