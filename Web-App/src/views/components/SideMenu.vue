<template>
  <div class="SideBar">
    <div class="flex-1">
      <div
        v-for="(tb, i) in getTabs"
        :key="i"
        :class="[tb.name === getSelectedTab ? 'tab-active' : '', 'tabs']"
        @click="tabsChange(tb.name)"
      >
        <font-awesome-icon :icon="tb.icon" />
        <span class="text-capitalize">{{ tb.name }}</span>
      </div>
    </div>
    <div>
      <LogoutButton></LogoutButton>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import LogoutButton from "../components/LogoutButton";

export default {
  name: "SideBar",
  components: { LogoutButton },
  computed: {
    ...mapGetters(["getTabs", "getSelectedTab"]),
  },
  methods: {
    ...mapActions(["set_tab"]),
    tabsChange(v) {
      if (v !== this.getSelectedTab) {
        this.set_tab(v);
        this.$router.push(`/${v}`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.SideBar {
  display: flex;
  flex-direction: column;
  height: 90vh;
  position: fixed;
  width: 200px;
  .flex-1 {
    flex: 1;
  }

  .tab-active {
    background: black;
    color: white;

    svg {
      path {
        fill: white;
      }
    }
  }
}
</style>
