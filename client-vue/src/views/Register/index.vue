<template>
  <div class="system-register" ref='ruleForm'>
    <el-form class='system-register-form' label-width="80px" :model="form" :rules="rules">
      <el-form-item label="用户名称" prop='username'>
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form.password2"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  setup() {
    const ruleForm = ref(null);
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
      address: "",
    });
    const rules = {
      username: [
        { required: true, message: "请输入用户名称", trigger: "blur" },
      ],
    };

    function onSubmit() {
      console.log(ruleForm.value);

      // ruleForm.value.validate((valid) => {
      //   if (valid) {
      //     alert("submit!");
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    }
    return {
      form,
      onSubmit,
      rules,
      ruleForm,
    };
  },
});
</script>
<style scoped lang='less'>
.system-register {
  position: relative;
  &-form {
    width: 400px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>