import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Select,Button,Form,Row,Col,Table,Modal,Input,DatePicker} from 'antd';
import styles from './style.less';

const {Option} = Select;
const { RangePicker } = DatePicker;

class Accumulation extends React.Component {
    addformRef = React.createRef();

    formRef = React.createRef();

    state = {
        addModal:false,
    };

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

    formItemLayout = {
        labelCol:{span:6},
        wrapperCol:{span:16}
    }

    componentDidMount() {
        
    }

    // 查询
    // onFinish = (values )=>{
    //     const params = {cPage:1,pShowNum:10};
    //     if(values.time){
    //         params.date1 = moment(values.time[0]).format(datePicker);
    //         params.date2 = moment(values.time[1]).format(datePicker);
    //     }
    //     if(values.egtypeId){
    //         params.egtypeId = values.egtypeId;
    //     }
    //     this.setState({...params},()=>{
    //         this.fetchInventoryList();
    //     })
    // }


    // 重置搜索条件
    // handleFormReset = ()=>{
    //     this.formRef.current.resetFields();
    //     this.setState({cPage:1,pShowNum:10,date1:null,date2:null,egtypeId:null},()=>{
    //         this.fetchInventoryList();
    //     });
    // }

    // 查询盘点数据列表
    // fetchInventoryList = ()=>{
    //     const {dispatch} = this.props;
    //     const {cPage,pShowNum,date1,date2,egtypeId} = this.state;
    //     dispatch({
    //         type:"energyInventory/fetchInventoryList",
    //         payload: {
    //             cPage,pShowNum,date1,date2,egtypeId
    //         },
    //     });
    // }


    // 补偿盘点数据
    // handleOk = () => {
    //     const form = this.addformRef.current;
    //     const {dispatch} = this.props;
    //     form.validateFields()
    //     .then(values => {
    //         const id = values.egtypeId;
    //         dispatch({// 新增能源补偿记录
    //             type:"energyInventory/addInventory",
    //             payload: {...values,egtypeId:id,time:moment(values.time).format(dateTimePicker)},
    //             callback:()=>{
    //                 this.setState({
    //                     addModal: false,
    //                 });
    //                 form.resetFields();
    //                 this.fetchInventoryList();
    //             }
    //         });
    //     })
    //     .catch(info => {
    //         console.log('Validate Failed:', info);
    //     });
    // };

    // 编辑补偿数据
    // editInventory = (record)=>{
    //     const {commonapi:{energyTypes,energyTypelist}} = this.props;
    //     const energy = energyTypes.filter(item=>item.id==record.egtypeId);
    //     // debugger
    //     let egtypeId = [];
    //     if(energy.length>0&&energy[0].pid!=0){
    //         egtypeId = [energy.pid,record.egtypeId];
    //     }
    //     this.setState({addModal:true},()=>{
    //         const form = this.addformRef.current;
    //         form.setFieldsValue({
    //             id:record.id,
    //             egtypeId:record.egtypeId,
    //             time:moment(record.time),
    //             pointId: record.pointId,
    //             value:record.value,
    //             description:record.description,
    //         });
    //     })
    // }

    // 删除补偿数据
    // handleDelete = id => {
    //     const {dispatch} = this.props;
    //     dispatch({
    //         type:"energyInventory/removeInventory",
    //         payload: {id},
    //         callback:()=>{
    //             this.fetchInventoryList();
    //         }
    //     });
    // };

    handleCancel = e => {
        // this.addformRef.current.resetFields();
        this.setState({
            addModal: false,
        });
    };
    


  render() {
    const {addModal} = this.state;
    return (
      <PageHeaderWrapper>
        <Card>
            <div>
                <Form ref={this.formRef} onFinish={this.onFinish}>
                    <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                        <Col md={8} sm={24}>
                            <Form.Item label="选择项目">
                              <Select defaultValue="辛集" >
                                <Option value="辛集">辛集</Option>
                                <Option value="南铜">南铜</Option>
                                <Option value="包钢">包钢</Option>
                                <Option value="亦庄">亦庄</Option>
                              </Select>
                            </Form.Item>
                        </Col>
                        <Col md={8} sm={24}>
                            <span >
                                <Button type="primary" htmlType="submit">查询</Button>
                                <Button style={{ marginLeft: 8 }} >重置</Button>
                            </span>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className={styles.extraoperation}>
                <Button 
                // icon={<PlusOutlined />} 
                type='primary' 
                onClick={()=>this.setState({addModal:true})}
                >
                  添加
                </Button>
                <Button type='primary' style={{ marginLeft: 8 }}>批量上传</Button>
            </div>
            <Table columns={this.columns} dataSource={this.data}/>
            {addModal&&
                <Form ref={this.addformRef} {...this.formItemLayout} >
                    <Form.Item label='能源类型' name='id' style={{display:'none'}} >
                        <Input />
                    </Form.Item>
                    <Modal
                        title="添加采集点"
                        visible={addModal}
                        // onOk={this.handleOk}
                        okText="提交"
                        cancelText="取消"
                        onCancel={this.handleCancel}
                        >
                        <Form.Item label='点ID' name='egtypeId' rules={[{required: true}]} >
                          <Input placeholder='请输入'/>
                        </Form.Item>
                        <Form.Item label='点名称' name='time' rules={[{required: true}]}>
                          <Input placeholder='请输入'/>
                        </Form.Item>
                        <Form.Item label='类型' name='pointId' rules={[{required: true}]}>
                              <Select defaultValue="辛集" style={{ width: 314 }}>
                                <Option value="辛集">辛集</Option>
                                <Option value="南铜">南铜</Option>
                                <Option value="包钢">包钢</Option>
                                <Option value="亦庄">亦庄</Option>
                              </Select>
                        </Form.Item>
                        <Form.Item label='单位' name='value' rules={[{required: true}]}>
                            <Input placeholder='请输入' />
                        </Form.Item>
                        <Form.Item label='采集源' name='description'>
                              <Select defaultValue="辛集" style={{ width: 314 }}>
                                <Option value="辛集">辛集</Option>
                                <Option value="南铜">南铜</Option>
                                <Option value="包钢">包钢</Option>
                                <Option value="亦庄">亦庄</Option>
                              </Select>
                        </Form.Item>
                    </Modal>
                </Form>
            }
        </Card>
    </PageHeaderWrapper>
    );
  }
}

export default Accumulation;

