import { defineComponent, CSSProperties, ref } from "vue";
import { RouterView } from "vue-router";
import { Layout } from "ant-design-vue";
import "./index.less";

import LayoutMenu from "./components/menu";

export default defineComponent({
  components: {
    LayoutMenu
  },
  setup() {
    const contentStyle: CSSProperties = {
      margin: "24px 16px",
      padding: "24px",
      background: "#fff",
      minHeight: "280px",
      overflowY: "auto"
    };

    const collapsed = ref(false);

    return () => (
      <Layout class="page-container-layout">
        {/* 侧边栏 start */}
        <Layout.Sider collapsed={collapsed.value}>
          <div class="page-container-layout_logo">Vue3</div>
          <LayoutMenu />
        </Layout.Sider>
        {/*侧边栏 end  */}

        <Layout>
          {/* header start */}
          <Layout.Header style="background: #fff; padding: 0">
            {collapsed.value ? (
              <div
                class="page-container-layout_trigger"
                onClick={() => (collapsed.value = !collapsed.value)}
              >
                关闭
              </div>
            ) : (
              <div
                class="page-container-layout_trigger"
                onClick={() => (collapsed.value = !collapsed.value)}
              >
                展开
              </div>
            )}
          </Layout.Header>
          {/* header end */}
          {/* 主体 start */}
          <Layout.Content style={contentStyle}>
            <RouterView></RouterView>
          </Layout.Content>
          {/* 主体 end */}
        </Layout>
      </Layout>
    );
  }
});
