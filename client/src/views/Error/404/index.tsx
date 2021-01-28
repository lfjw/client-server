import { defineComponent } from "vue";
import "./index.less";
import img1 from "@/assets/error_pages/404.png";
import img2 from "@/assets/error_pages/404_cloud.png";
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter()
    const message = "We can't seem to find the page you're looking for."

    function backHome() {
      router.push({ path: '/' })
    }

    return () => (
      <div class="page-container-404">
        <div class="container404">
          <div class="pic-404">
            <img class="pic-404__parent" src={img1} alt="404" />
            <img class="pic-404__child left" src={img2} alt="404" />
            <img class="pic-404__child mid" src={img2} alt="404" />
            <img class="pic-404__child right" src={img2} alt="404" />
          </div>
          <div class="bullshit">
            <div class="bullshit__oops">OOPS!</div>
            <div class="bullshit__headline">{message}</div>
            <div class="bullshit__info">Please check that the URL you entered is correct, or click the button below to return to the homepage.</div>
            <div class="bullshit__return-home" onClick={backHome}>Back to home</div>
          </div>
        </div>
      </div>
    )
  }
})

