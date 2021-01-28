import { defineComponent } from "vue";
import "./index.less";
import { Image, Button } from "ant-design-vue";
import img from "@/assets/error_pages/404.gif";
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    return () => (
      <div class='page-container-401'>
        <div class='error-left'>
          <h1>Oops!</h1>
          <h2>没有权限查看，请联系管理员!</h2>
          <span>Error code: {route.meta.title}</span>
          <div><Button type="primary" onClick={() => router.back()}>返回</Button></div>
        </div>
        <div class='error-right'>
          <Image src={img}></Image>
        </div>
      </div>
    )
  }
})

