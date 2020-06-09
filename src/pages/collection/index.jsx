import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card,Form,Row,Col,Table,Select,Button} from 'antd';

const { Option } = Select;

class CollectionData extends React.Component {


  columns = [
    {
      title: '序号',
      dataIndex: 'rank',
      render: (text, record, index) => `${index + 1}`,
    },
    {
      title: '点名',
      dataIndex: 'name',
      key:'name'
    },
    {
      title: '点含义',
      dataIndex: 'meaning',
      key: 'meaning',
    },
    {
      title: '数据类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '单位',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: '采集源',
      dataIndex: 'source',
      key: 'source',
    },
    {
      title: '扩展参数',
      dataIndex: 'data',
      key: 'data',
    },
    {
      title: '操作',
      dataIndex: 'operating',
      key: 'operating',
      render: () => (
        <span>
            <a style={{ marginRight: 16 }}>修改</a>
            <a>删除</a>
        </span>
       ),
    },
  ];

  data = [
    {
      name:1111,
      meaning:111122,
      type:111221,
      unit:111221,
      source:111122,
      data:111221,
      operating:11122,
    },
    {
      name:1111,
      meaning:111122,
      type:111221,
      unit:111221,
      source:111122,
      data:111221,
      operating:11122,
    }
  ]

  render(){
    return(
      <PageHeaderWrapper >
        <Card>
          <Form ref={this.formRef} onFinish={this.onFinish}>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
              <Col md={8} sm={24}>
                <Form.Item label="选择项目">
                  <Select defaultValue="辛集" style={{ width: 200 }}>
                    <Option value="辛集">辛集</Option>
                    <Option value="南铜">南铜</Option>
                    <Option value="包钢">包钢</Option>
                    <Option value="亦庄">亦庄</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col md={8} sm={24}>
                <span >
                  <Button type="primary" htmlType="submit" style={{ marginRight: 16 }}>添加</Button>
                  <Button type="primary" htmlType="submit">批量上传</Button>
                </span>
              </Col>
            </Row>
          </Form>
          <Table
            // loading={this.state.loading}
            size="small"
            bordered
            columns={this.columns}
            dataSource={this.data}
            pagination={false}
          />
        </Card>
      </PageHeaderWrapper>
    )
  }

}

export default CollectionData;
