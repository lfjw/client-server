import { defineComponent, reactive, render } from "vue";
import { ElForm, ElFormItem, ElInput, ElButton } from "element-plus";
import "./index.less";

interface RegisterParams {
  username: string;
  password: string;
  email: string;
  phone: string | number;
  gender: string | number;
  birthday: Date;
  last_login: Date;
  create_time: Date;
  address: string;
}
export default defineComponent({
  render() {
    const form = this.form;
    const onRegister = this.onRegister;
    return (
      <div class="system-register">
        <ElForm
          v-model={form}
          class="system-register-form"
          label-position="left"
        >
          <ElFormItem label="用户名称" prop="username">
            <ElInput
              placeholder="请输入用户名称"
              type="text"
              v-model={form.username}
            />
          </ElFormItem>
          <ElFormItem label="密码">
            <ElInput
              placeholder="请输入密码"
              v-model={form.password}
              type="password"
            />
          </ElFormItem>
          <ElFormItem label="确认密码">
            <ElInput
              placeholder="请输入密码"
              v-model={form.password2}
              type="password"
            />
          </ElFormItem>
          <ElFormItem label="邮箱">
            <ElInput
              placeholder="请输入邮箱"
              v-model={form.email}
              type="password"
            />
          </ElFormItem>
          <ElFormItem label="手机号">
            <ElInput
              placeholder="请输入手机号"
              v-model={form.email}
              type="password"
            />
          </ElFormItem>
          <ElFormItem>
            <ElButton type="primary" onClick={onRegister}>
              注册
            </ElButton>
          </ElFormItem>
        </ElForm>
      </div>
    );
  },
  setup() {
    const form = reactive({
      username: "",
      password: "",
      password2: "",
      email: "",
      phone: "",
      gender: "",
      birthday: "",
      last_login: "",
      create_time: "",
      address: ""
    });
    const rules = {
      name: [
        { required: true, message: "请输入活动名称", trigger: "blur" },
        { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
      ]
    };
    function onRegister() {
      console.log("注册");
    }
    return {
      form,
      onRegister
    };

    // return () => {
    //   return (
    //     <div class="system-register">
    //       <ElForm
    //         v-model={form}
    //         rules={rules}
    //         class="system-register-form"
    //         label-position="right"
    //       >
    //         <ElFormItem label="用户名称" prop="username">
    //           <ElInput
    //             placeholder="请输入用户名称"
    //             type="text"
    //             v-model={form.username}
    //           />
    //         </ElFormItem>
    //         <ElFormItem label="密码">
    //           <ElInput
    //             placeholder="请输入密码"
    //             v-model={form.password}
    //             type="password"
    //           />
    //         </ElFormItem>
    //         <ElFormItem label="确认密码">
    //           <ElInput
    //             placeholder="请输入密码"
    //             v-model={form.password2}
    //             type="password"
    //           />
    //         </ElFormItem>
    //         <ElFormItem label="邮箱">
    //           <ElInput
    //             placeholder="请输入邮箱"
    //             v-model={form.email}
    //             type="password"
    //           />
    //         </ElFormItem>
    //         <ElFormItem label="手机号">
    //           <ElInput
    //             placeholder="请输入手机号"
    //             v-model={form.email}
    //             type="password"
    //           />
    //         </ElFormItem>
    //         <ElFormItem>
    //           <ElButton type="primary" onClick={onRegister}>
    //             注册
    //           </ElButton>
    //         </ElFormItem>
    //       </ElForm>
    //     </div>
    //   );
    // };
  }
});
