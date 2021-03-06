import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import '../../assets/styles/molecules/content-body.css';
import { CopyOutlined } from '@ant-design/icons';
import axios from 'axios';
import PropTypes from 'prop-types';
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";

const { TabPane } = Tabs;

ContentBody.propTypes = {
    articleInfo: PropTypes.object
}

ContentBody.defaultProps = {
    articleInfo: {

    }
}

function ContentBody(props) {

    const codeString = JSON.stringify({ OrderCode: "123456789", Code: "123" }, null, 4);

    const [requests, setRequests] = useState([]);

    const [responses, setReponses] = useState([]);

    // request kind
    const [requestPath, setRequestPath] = useState([]);
    const [requestHeader, setRequestHeader] = useState([]);
    const [requestQuery, setRequestQuery] = useState([]);
    const [requestForm, setRequestForm] = useState([]);
    const [requestBody, setRequestBody] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:44344/api/v1/request/' + props.articleInfo.ArticleID)
            .then((response) => {
                if (response.data == "") {
                    setRequests([]);
                }
                else {
                    setRequests(response.data);
                }
            });
        // for (let i = 0; i < requests.length; i++) {
        //     if (requests[i].RequestKindID == 1) {
        //         requestPath.push(requests[i]);
        //     }
        //     else if (requests[i].RequestKindID == 2) {
        //         requestHeader.push(requests[i]);
        //     }
        //     else if (requests[i].RequestKindID == 3) {
        //         requestQuery.push(requests[i]);
        //     }
        //     else if (requests[i].RequestKindID == 4) {
        //         requestForm.push(requests[i]);
        //     }
        //     else {
        //         let clone = [...requestBody];
        //         clone.push(requests[i]);
        //         setRequestBody(clone);
        //     }
        // }
        var res = requests.filter(val => {
            return val.RequestKindID;
        });
        console.log(res);
    }, [props.articleInfo.ArticleID]);

    useEffect(() => {
        axios.get('https://localhost:44344/api/Response/' + props.articleInfo.ArticleID)
            .then((response) => {
                if (response.data == "") {
                    setReponses([]);
                }
                else {
                    setReponses(response.data);
                }
            });
    }, [props.articleInfo.ArticleID]);

    // const renderRequest = requests.map((req, index) => {
    //     return (
    //         <div className="content-list-item" key={index}>
    //             <div className="req-name">
    //                 <div className="req-name-txt">{req.RequestName}</div>
    //                 {req.IsOptional == 0 &&
    //                     <div className="req-optional">OPTIONAL</div>
    //                 }
    //                 {req.IsOptional == 1 &&
    //                     <div className="req-optional" style={{ color: '#FF4642' }}>REQUIRED</div>
    //                 }
    //             </div>
    //             <div className="req-type">
    //                 {req.RequestType == 0 &&
    //                     <div className="req-type-txt">string</div>
    //                 }
    //                 {req.RequestType == 1 &&
    //                     <div className="req-type-txt">array</div>
    //                 }
    //                 {req.RequestType == 2 &&
    //                     <div className="req-type-txt">number</div>
    //                 }
    //                 {req.RequestType == 3 &&
    //                     <div className="req-type-txt">integer</div>
    //                 }
    //             </div>
    //             <div className="req-description">
    //                 <div className="req-description-txt">{req.RequestDescription}</div>
    //             </div>
    //         </div>
    //     );
    // });

    function requestExist(requestKind) {
        return requests.some(function (el) {
            return el.RequestKindID === requestKind;
        });
    }

    const renderResponse = responses.map((resp, index) => {
        return (
            <div className="wrap-resp-body" key={index}>
                <div className="resp-code">
                    {resp.ResponseCode == 0 &&
                        <>
                            <div className="resp-code-circle"></div>
                            <div className="resp-code-number">200: OK</div>
                        </>
                    }
                    {resp.ResponseCode == 1 &&
                        <>
                            <div className="resp-code-circle" style={{ backgroundColor: '#FF4642' }}></div>
                            <div className="resp-code-number">404: Not Found</div>
                        </>
                    }
                    {resp.ResponseCode == 2 &&
                        <>
                            <div className="resp-code-circle" style={{ backgroundColor: '#FF4642' }}></div>
                            <div className="resp-code-number">400: Bad Request</div>
                        </>
                    }
                    {resp.ResponseCode == 3 &&
                        <>
                            <div className="resp-code-circle" style={{ backgroundColor: '#FF9D3D' }}></div>
                            <div className="resp-code-number">302: Found</div>
                        </>
                    }
                </div>
                <div style={{ marginBottom: 10, fontFamily: 'Roboto-medium' }}>
                    {resp.ResponseDescription}
                </div>
                <div className="example-json">
                    <div className="copy-icon">
                        <CopyOutlined />
                    </div>
                    {resp.ResponseContent &&
                        <JSONPretty json={resp.ResponseContent} />
                    }
                </div>
            </div>
        );
    })

    return (
        <div className="body-page">
            <div className="body-page-name">
                {props.articleInfo.ApiType == 0 &&
                    <div className="api-type" style={{ backgroundColor: '#3884FF' }}>GET</div>
                }
                {props.articleInfo.ApiType == 1 &&
                    <div className="api-type">POST</div>
                }
                {props.articleInfo.ApiType == 2 &&
                    <div className="api-type" style={{ backgroundColor: '#F77D05' }}>PUT</div>
                }
                {props.articleInfo.ApiType == 3 &&
                    <div className="api-type" style={{ backgroundColor: '#FF4642' }}>DELETE</div>
                }
                <div className="api-name">{props.articleInfo.ApiName}</div>
            </div>
            {props.articleInfo.ApiLink &&
                <div className="body-page-link">
                    <p>{props.articleInfo.ApiLink}</p>
                </div>
            }
            <div className="wrap-req-resp">
                <Tabs defaultActiveKey="1" type="card">
                    <TabPane tab="Request" key="1">
                        {requestExist(1) &&
                            <div className="wrap-request-body">
                                <div className="position-request">Path Parameters</div>
                                <div className="content-list-request">
                                    {/* {renderRequest} */}
                                    {requests.map((req, index) => {
                                        return (
                                            <div key={index}>
                                                {
                                                    req.RequestKindID == 1 && <div className="content-list-item" >
                                                        <div className="req-name">
                                                            <div className="req-name-txt">{req.RequestName}</div>
                                                            {req.IsOptional == 0 &&
                                                                <div className="req-optional">OPTIONAL</div>
                                                            }
                                                            {req.IsOptional == 1 &&
                                                                <div className="req-optional" style={{ color: '#FF4642' }}>REQUIRED</div>
                                                            }
                                                        </div>
                                                        <div className="req-type">
                                                            {req.RequestType == 0 &&
                                                                <div className="req-type-txt">string</div>
                                                            }
                                                            {req.RequestType == 1 &&
                                                                <div className="req-type-txt">array</div>
                                                            }
                                                            {req.RequestType == 2 &&
                                                                <div className="req-type-txt">number</div>
                                                            }
                                                            {req.RequestType == 3 &&
                                                                <div className="req-type-txt">integer</div>
                                                            }
                                                        </div>
                                                        <div className="req-description">
                                                            <div className="req-description-txt">{req.RequestDescription}</div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        }
                        {requestExist(2) &&
                            <div className="wrap-request-body">
                                <div className="position-request">Headers</div>
                                <div className="content-list-request">
                                    {/* {renderRequest} */}
                                    {requests.map((req, index) => {
                                        return (
                                            <div key={index}>
                                                {
                                                    req.RequestKindID == 2 && <div className="content-list-item" >
                                                        <div className="req-name">
                                                            <div className="req-name-txt">{req.RequestName}</div>
                                                            {req.IsOptional == 0 &&
                                                                <div className="req-optional">OPTIONAL</div>
                                                            }
                                                            {req.IsOptional == 1 &&
                                                                <div className="req-optional" style={{ color: '#FF4642' }}>REQUIRED</div>
                                                            }
                                                        </div>
                                                        <div className="req-type">
                                                            {req.RequestType == 0 &&
                                                                <div className="req-type-txt">string</div>
                                                            }
                                                            {req.RequestType == 1 &&
                                                                <div className="req-type-txt">array</div>
                                                            }
                                                            {req.RequestType == 2 &&
                                                                <div className="req-type-txt">number</div>
                                                            }
                                                            {req.RequestType == 3 &&
                                                                <div className="req-type-txt">integer</div>
                                                            }
                                                        </div>
                                                        <div className="req-description">
                                                            <div className="req-description-txt">{req.RequestDescription}</div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        }
                        {requestExist(3) &&
                            <div className="wrap-request-body">
                                <div className="position-request">Query Parameters</div>
                                <div className="content-list-request">
                                    {/* {renderRequest} */}
                                    {requests.map((req, index) => {
                                        return (
                                            <div key={index}>
                                                {
                                                    req.RequestKindID == 3 && <div className="content-list-item" >
                                                        <div className="req-name">
                                                            <div className="req-name-txt">{req.RequestName}</div>
                                                            {req.IsOptional == 0 &&
                                                                <div className="req-optional">OPTIONAL</div>
                                                            }
                                                            {req.IsOptional == 1 &&
                                                                <div className="req-optional" style={{ color: '#FF4642' }}>REQUIRED</div>
                                                            }
                                                        </div>
                                                        <div className="req-type">
                                                            {req.RequestType == 0 &&
                                                                <div className="req-type-txt">string</div>
                                                            }
                                                            {req.RequestType == 1 &&
                                                                <div className="req-type-txt">array</div>
                                                            }
                                                            {req.RequestType == 2 &&
                                                                <div className="req-type-txt">number</div>
                                                            }
                                                            {req.RequestType == 3 &&
                                                                <div className="req-type-txt">integer</div>
                                                            }
                                                        </div>
                                                        <div className="req-description">
                                                            <div className="req-description-txt">{req.RequestDescription}</div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        }
                        {requestExist(4) &&
                            <div className="wrap-request-body">
                                <div className="position-request">Form Data Parameters</div>
                                <div className="content-list-request">
                                    {/* {renderRequest} */}
                                    {requests.map((req, index) => {
                                        return (
                                            <div key={index}>
                                                {
                                                    req.RequestKindID == 4 && <div className="content-list-item" >
                                                        <div className="req-name">
                                                            <div className="req-name-txt">{req.RequestName}</div>
                                                            {req.IsOptional == 0 &&
                                                                <div className="req-optional">OPTIONAL</div>
                                                            }
                                                            {req.IsOptional == 1 &&
                                                                <div className="req-optional" style={{ color: '#FF4642' }}>REQUIRED</div>
                                                            }
                                                        </div>
                                                        <div className="req-type">
                                                            {req.RequestType == 0 &&
                                                                <div className="req-type-txt">string</div>
                                                            }
                                                            {req.RequestType == 1 &&
                                                                <div className="req-type-txt">array</div>
                                                            }
                                                            {req.RequestType == 2 &&
                                                                <div className="req-type-txt">number</div>
                                                            }
                                                            {req.RequestType == 3 &&
                                                                <div className="req-type-txt">integer</div>
                                                            }
                                                        </div>
                                                        <div className="req-description">
                                                            <div className="req-description-txt">{req.RequestDescription}</div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        }
                        {requestExist(5) &&
                            <div className="wrap-request-body">
                                <div className="position-request">Body Parameters</div>
                                <div className="content-list-request">
                                    {/* {renderRequest} */}
                                    {requests.map((req, index) => {
                                        return (
                                            <div key={index}>
                                                {
                                                    req.RequestKindID == 5 && <div className="content-list-item">
                                                        <div className="req-name">
                                                            <div className="req-name-txt">{req.RequestName}</div>
                                                            {req.IsOptional == 0 &&
                                                                <div className="req-optional">OPTIONAL</div>
                                                            }
                                                            {req.IsOptional == 1 &&
                                                                <div className="req-optional" style={{ color: '#FF4642' }}>REQUIRED</div>
                                                            }
                                                        </div>
                                                        <div className="req-type">
                                                            {req.RequestType == 0 &&
                                                                <div className="req-type-txt">string</div>
                                                            }
                                                            {req.RequestType == 1 &&
                                                                <div className="req-type-txt">array</div>
                                                            }
                                                            {req.RequestType == 2 &&
                                                                <div className="req-type-txt">number</div>
                                                            }
                                                            {req.RequestType == 3 &&
                                                                <div className="req-type-txt">integer</div>
                                                            }
                                                        </div>
                                                        <div className="req-description">
                                                            <div className="req-description-txt">{req.RequestDescription}</div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        }
                    </TabPane>
                    <TabPane tab="Response" key="2">
                        {renderResponse}
                    </TabPane>
                </Tabs>
            </div>
            {props.articleInfo.ApiExample &&
                <div className="example-data">
                    <div className="data-example">M???u v?? d???:</div>
                    <div className="example-json">
                        <div className="copy-icon">
                            <CopyOutlined />
                        </div>
                        <JSONPretty json={(props.articleInfo.ApiExample)} />
                    </div>
                </div>
            }
        </div>
    );
}

export default ContentBody;