<template>
  <div>
    <mt-header fixed title="忘记密码" id="subject">
      <router-link to="/mine" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <div class="box"></div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="less">
#subject {
  background-color: #ea5f5a;
}
</style>