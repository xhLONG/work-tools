<template>
  <div class="sidebar">
    <logo v-if="showLogo" :collapse="isCollapse"/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
      >
        <sidebar-item
          v-for="route in routesList"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";

export default {
  components: {
    Logo,
    SidebarItem
  },
  computed: {
    ...mapGetters(["sidebar"]),
    activeMenu() {
      const route = this.$route;
      var { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }

      var hashidePath = path.match(/(\/.+)+(\/add|\/list|\/info|\/edit)/);
      path = hashidePath ? hashidePath[1] : path;

      return path;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
  },
  watch: {
    "$store.state.app.permission"() {
      this.computedHidden();
    }
  },
  data(){
    return {
      routesList:[],
    }
  },
  methods:{
    computedHidden() {
      let routesList = JSON.parse(JSON.stringify(this.$router.options.routes))
      this.routesList = routesList;
    },
  },
  created() {
    this.computedHidden();
  }
};
</script>

<style lang="scss" scoped>
.sidebar{
  height: 100%;
  display: flex;
  flex-direction: column;

  .el-scrollbar{
    flex: 1;
  }
}
</style>