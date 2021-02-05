import { defineComponent } from "vue";
import "./index.less";
import { useRoute, useRouter } from "vue-router";
const img = require("../../../assets/error_pages/404.gif");

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    return () => (
      <div class="page-container-401">
        <div class="error-left">
          <h1>Oops!</h1>
          <h2>没有权限查看，请联系管理员!</h2>
          <span>Error code: {route.meta.title}</span>
          <div>
            <button onClick={() => router.back()}> 返回</button>
          </div>
        </div>
        <div class="error-right">
          <img src={img} />
        </div>
      </div>
    );
  }
});
