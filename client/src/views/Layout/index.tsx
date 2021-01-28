import { defineComponent } from "vue";
import { RouterView } from "vue-router";
export default defineComponent({
  setup() {
    return () => (
      <div>
        layout
        <RouterView></RouterView>
      </div>
    )
  }
})