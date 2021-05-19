import React, { useState } from 'react';
import '../assets/styles/article-created.css';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Space
} from 'antd';
import 'antd/dist/antd.css';
import { DeleteOutlined, PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import axios from 'axios';

function ArticleCreated2() {
    const { Option } = Select;

    const { TextArea } = Input;

    const [request, setRequest] = useState({});
    const [requestArray, setRequestArray] = useState([]);

    const [article, setArticle] = useState({});

    const [articleCreator, setArticleCreator] = useState({});

    const onFinish = values => {
        for (let i = 0; i < Object.keys(values).length; i++) {
            if (Object.keys(values)[i] !== "requestApi") {
                article[Object.keys(values)[i]] = values[Object.keys(values)[i]];
            }
        }
        console.log(article);
        articleCreator["articleApi"] = article;
        articleCreator["requestApi"] = values.requestApi;
        console.log(articleCreator);
        axios.post("https://localhost:44344/api/v1/Article/insert-article", articleCreator)
            .then(resp => console.log(resp))
    };

    return (
        <div className="article-post-page">
            <div className="post-title">Đăng bài hướng dẫn tích hợp API</div>
            <div className="form-post-article">
                <Form
                    labelCol={{ span: 4 }}
                    layout="horizontal"
                    onFinish={onFinish}
                >
                    <Form.Item label="Tên bài viết" name="ArticleName">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Mô tả bài viết" name="BriefDescription">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Tên API" name="ApiName">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Loại API" name="ApiType">
                        <Select defaultValue="Loại api" id="api_method">
                            <Option value="0">GET</Option>
                            <Option value="1">POST</Option>
                            <Option value="2">PUT</Option>
                            <Option value="3">DELETE</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Đường dẫn API" name="ApiLink">
                        <Input />
                    </Form.Item>
                    <Form.List name="requestApi">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, fieldKey, ...restField }) => (
                                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                        <Form.Item
                                            name={[name, 'RequestName']}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name={[name, 'RequestType']}
                                        >
                                            <Select defaultValue="Kiểu dữ liệu">
                                                <Option value="0">string</Option>
                                                <Option value="1">array</Option>
                                                <Option value="2">number</Option>
                                                <Option value="3">integer</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                            name={[name, 'RequestDescription']}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name={[name, 'IsOptional']}
                                        >
                                            <Select defaultValue="REQUIRED">
                                                <Option value="0">REQUIRED</Option>
                                                <Option value="1">OPTIONAL</Option>
                                            </Select>
                                        </Form.Item>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Space>
                                ))}
                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Add field
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                    <Form.Item label="API Response" name="ApiResponse">
                        <TextArea />
                    </Form.Item>
                    <Form.Item label="Mẫu ví dụ" name="ApiExample">
                        <TextArea />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Button</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default ArticleCreated2;