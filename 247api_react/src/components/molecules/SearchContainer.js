import { SearchOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useState } from 'react';
import '../../assets/styles/molecules/search-container.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

function SearchContainer(props) {
    const [searchText, setSearchText] = useState('');
    const [searchList, setSearchList] = useState([]);

    function handleCloseSearchBox() {
        props.handleCloseSearchBox();
    }

    function handleChangeSearch(e) {
        setSearchText(e.target.value);
        axios.get('https://localhost:44344/api/v1/Article/search/' + e.target.value).then(resp => {
            if (e.target.value == "") {
                setSearchList([]);
            } else {
                setSearchList(resp.data);
            }
        });
    }

    function handleOpenArticle(item) {
        props.handleOpenArticle(item);
        props.handleCloseSearchBox();
    }

    const renderSearchList = searchList.map((item, index) => {
        return (
            <div className="search-result" key={index} onClick={() => handleOpenArticle(item)}>
                <div className="search-result-name">
                    {item.ArticleName}
                </div>
            </div>
        );
    })

    return (
        <div className="search-box">
            <div className="search-bar">
                <div className="search-text-input">
                    <SearchOutlined />
                    <Input
                        placeholder="Tìm kiếm..."
                        style={{
                            border: 'none',
                            fontFamily: 'Roboto-medium',
                            boxShadow: 'none',
                            fontSize: 16
                        }}
                        allowClear
                        onChange={handleChangeSearch}
                    />
                </div>
                <div className="search-arrow" onClick={handleCloseSearchBox}>
                    <ArrowRightOutlined />
                </div>
            </div>
            <div className="search-list">
                {renderSearchList}
            </div>
        </div>
    );
}

export default SearchContainer