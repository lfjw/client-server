import { defineComponent, reactive } from 'vue';
import { Form, Input, Button } from 'ant-design-vue';
import { useRouter, useRoute } from "vue-router";

interface Form {
  username: string;
  password: string;
}

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()

    const form: Form = reactive({
      username: "",
      password: ""
    })

    function submit() {
      const { redirect } = route.query;

      console.log(redirect);
      router.push({ path: '/' })
      // if (redirect) {
      //   router.push({ path: redirect as string })
      // } else {
      //   router.push({ path: '/' })
      // }

    }

    return () => (
      <div>
        <Form model={form} ref='form'>
          <Form.Item label='手机号'>
            <Input placeholder='请输入您的手机号' />
          </Form.Item>
          <Form.Item label='密码'>
            <Input placeholder='请输入您的密码' />
          </Form.Item>
          <Button type='primary' onClick={submit}>
            登录
          </Button>
        </Form>
      </div>
    )
  }
})