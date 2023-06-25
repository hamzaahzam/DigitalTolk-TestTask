<template>
  <div class="Layout">
    <div class="row">
      <SideMenu></SideMenu>
      <div class="content">
        <router-view />
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
import SideMenu from "./components/SideMenu";
export default {
  name: "LayoutView",
  components: { SideMenu },
  mounted() {
    let auth = localStorage.getItem("isAuth");
    if (!auth) {
      this.$router.push("/login");
    }
  },
};
</script>
<style lang="scss" scoped>
.Layout {
  margin-top: 2rem;
  .content {
    margin: 0rem 4rem;
    padding-left: 200px;
    margin-left: 20px;
  }
}
</style>
