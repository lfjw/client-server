import { Form, Input, Button, Radio, DatePicker, Modal } from "antd";
import { RegisterParams } from "../../typings/index";
import { register as registerApi } from "../../api/system";
import dayjs from "dayjs";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

const dateFormat = "YYYY-MM-DD";

function Register() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: RegisterParams) => {
    const birthday = dayjs(new Date(values.birthday)).format("YYYY-MM-DD");
    setLoading(true);
    try {
      await registerApi({
        username: values.username,
        password: values.password,
        email: values.email,
        phone: values.phone,
        gender: values.gender,
        birthday,
        address: values.address,
      });
      Modal.success({
        title: "温馨提示～",
        content: "注册成功～",
        onOk() {
          history.push("/login");
        },
      });
    } catch (error) {}
    setLoading(false);
  };
  return (
    <>
      <Form
        {...layout}
        name="basic"
        initialValues={{ gender: "1" }}
        onFinish={onFinish}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "请输入用户名称~" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入用户密码~" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="password2"
          label="确认密码"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "请再次输入密码~",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("两次密码不一致～");
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="邮箱"
          name="email"
          rules={[{ required: true, message: "请输入邮箱~" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="手机号"
          name="phone"
          rules={[{ required: true, message: "请输入手机号~" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="gender"
          label="性别"
          rules={[{ required: true, message: "请选择性别~" }]}
        >
          <Radio.Group>
            <Radio value="1">男性</Radio>
            <Radio value="2">女性</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="生日"
          name="birthday"
          hasFeedback
          rules={[{ required: true, message: "请选择生日~" }]}
        >
          <DatePicker style={{ width: "100%" }} format={dateFormat} />
        </Form.Item>
        <Form.Item
          label="省市区"
          name="address"
          rules={[{ required: true, message: "请输入地址~" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" loading={loading}>
            注册
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Register;
