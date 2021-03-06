import React, { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import '../../assets/styles/sections/menu.css';
import logo from '../../assets/images/247logo.png';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import axios from 'axios';

function Menu(props) {
    const [menuLists, setMenuLists] = useState([]);
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:44344/api/Category')
            .then((response) => {
                setCategoryList(response.data);
            });
    }, []);

    useEffect(() => {
        axios.get('https://localhost:44344/api/v1/Article')
            .then((response) => {
                setMenuLists(response.data);
            });
    }, []);

    const renderMenu = menuLists.map((menu, index) => {
        return (
            <div className="menu-item" id={"menu_item_" + index} key={index} onClick={() => handleOpenArticle(index)}>
                <Link>{menu.ArticleName}</Link>
            </div>
        );
    });

    const renderCategory = categoryList.map((categoryItem, index) => {
        return (
            <div key={index} className="wrap-category">
                <div style={{ marginBottom: 20 }}>
                    <div className="category-name">{categoryItem.CategoryName}</div>
                    <div className="link-list">
                        {menuLists.map((menu, index) => {
                            return (
                                <div>
                                    {menu.CategoryID == categoryItem.CategoryID &&
                                        <div className="menu-item" id={"menu_item_" + index} key={index} onClick={() => handleOpenArticle(index)}>
                                            <Link>{menu.ArticleName}</Link>
                                        </div>
                                    }
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    })

    function handleOpenArticle(index) {
        props.handleOpenArticle(menuLists[index]);
        var selectMenu = document.getElementById("menu_item_" + index);
        var startMenu = document.getElementById("menu_start");
        startMenu.classList.remove('menu-active');
        for (let i = 0; i < menuLists.length; i++) {
            let menu = document.getElementById("menu_item_" + i);
            menu.classList.remove('menu-active');
        }
        selectMenu.classList.add('menu-active');
    }

    function handlecClickMenu() {
        var startMenu = document.getElementById("menu_start");
        for (let i = 0; i < menuLists.length; i++) {
            let menu = document.getElementById("menu_item_" + i);
            menu.classList.remove('menu-active');
        }
        startMenu.classList.add('menu-active');
    }

    function handleOpenSearchBox() {
        props.handleOpenSearchBox();
    }

    return (
        <div className="wrap-menu">
            <div className="menu-header">
                <div className="logo-page">
                    <div className="logo-image">
                        <img src={logo} />
                    </div>
                    <div className="page-name">247API</div>
                </div>
                <div className="wrap-search" onClick={handleOpenSearchBox}>
                    <SearchOutlined />
                </div>
            </div>
            <div className="menu-content">
                <div className="fix-menu-item">
                    <Router>
                        <div
                            className="menu-item menu-active"
                            id="menu_start"
                            onClick={handlecClickMenu}
                        >
                            <Link>Getting Start</Link>
                        </div>
                        {renderCategory}
                    </Router>
                </div>
            </div>
            <div className="menu-footer">
                <a className="gitbook-footer" href="">
                    <div className="gitbook-logo">
                        <svg preserveAspectRatio="xMidYMid meet" height="40px" width="40px" fill="currentColor" viewBox="0 0 1067 769" xmlns="http://www.w3.org/2000/svg" stroke="none" className="icon-7f6730be--text-3f89f380"><g><path d="M480.026 640.677c17.205 0 31.2 13.997 31.2 31.194s-13.995 31.193-31.2 31.193c-17.197 0-31.193-13.996-31.193-31.193 0-17.197 13.996-31.194 31.193-31.194m489.93-193.226c-17.203 0-31.2-13.998-31.2-31.195 0-17.204 13.997-31.2 31.2-31.2 17.198 0 31.194 13.996 31.194 31.2 0 17.197-13.996 31.195-31.193 31.195m0-127.804c-53.269 0-96.609 43.34-96.609 96.609 0 10.373 1.723 20.702 5.123 30.741L559.328 616.879c-18.132-26.128-47.521-41.617-79.302-41.617-36.821 0-70.391 21.065-86.63 54.003L106.68 478.109c-30.288-15.927-52.965-65.817-50.56-111.223 1.248-23.687 9.438-42.071 21.897-49.17 7.916-4.493 17.436-4.099 27.526 1.188l1.916 1.01c75.96 40.022 324.6 170.981 335.063 175.844 16.157 7.47 25.14 10.5 52.659-2.547l513.958-267.3c7.53-2.844 16.315-10.062 16.315-21.023 0-15.205-15.72-21.199-15.765-21.199-29.218-14.018-74.163-35.054-117.987-55.57C798.033 84.26 691.861 34.547 645.23 10.132c-40.253-21.072-72.655-3.311-78.432.282l-11.227 5.555C345.727 119.743 64.898 258.826 48.911 268.553 20.278 285.973 2.547 320.679.252 363.768c-3.586 68.304 31.261 139.506 81.069 165.634l303.172 156.354c6.83 47.306 47.55 82.725 95.532 82.725 52.78 0 95.808-42.546 96.603-95.14L910.541 492.38c16.93 13.233 37.92 20.486 59.416 20.486 53.268 0 96.61-43.341 96.61-96.61s-43.342-96.61-96.61-96.61" fill-rule="evenodd"></path></g></svg>
                    </div>
                    <div className="gitbook-txt">
                        <p>Powered by <b>GitBook</b></p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Menu;