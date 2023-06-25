<template>
  <div class="LogoutButton">
    <div class="tabs" @click="clearStorage">
      <font-awesome-icon icon="fa-arrow-right-from-bracket" />
      <span class="text-capitalize">Logout</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "LogoutButton",
  methods: {
    clearStorage() {
      localStorage.removeItem("isAuth");
      this.$router.push("/login");
    },
  },
};
</script>
