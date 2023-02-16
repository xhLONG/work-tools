<template>
  <div id="app">
    <el-container>
      <el-aside>
        <SideBar></SideBar>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideBar from './components/Sidebar'
export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, Helvetica Neue,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #262626;
  touch-action: auto;
  background: #f5f5f5;
}

.el-container{
  height: 100vh;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #152d3d;
  text-align: center;
}

.el-main {
  background-color: #E9EEF3;
}


nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
