import { defineComponent, reactive, watchEffect } from "vue";
import { ElForm, ElFormItem, ElInput, ElButton } from "element-plus";
import { login } from "../../api/modules/system";
import "./index.less";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();

    const form = reactive({ username: "", password: "" });

    watchEffect(() => {
      console.log(form.username);
    });

    async function submit() {
      console.log(form);
      const res = await login({
        username: form.username,
        password: form.password
      });
      console.log(res);
    }
    function onRegister() {
      router.push({ path: "/register", query: { from: "login" } });
    }
    return () => {
      return (
        <div class="system-login">
          <ElForm class="system-login-form">
            <ElFormItem>
              <ElInput
                placeholder="请输入手机号"
                type="text"
                v-model={form.username}
              />
            </ElFormItem>
            <ElFormItem>
              <ElInput
                placeholder="请输入密码"
                v-model={form.password}
                type="password"
              />
            </ElFormItem>
            <ElFormItem>
              <ElButton type="primary" onClick={submit}>
                登录
              </ElButton>
              <ElButton onClick={onRegister}>注册</ElButton>
            </ElFormItem>
          </ElForm>
        </div>
      );
    };
  }
});
