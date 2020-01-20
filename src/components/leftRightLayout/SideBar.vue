<template>
  <el-aside class="menu" :style="{width: width + 'px'}">
    <div class="logo-img">
      <div>
        <img v-show="!collapse" src="../../assets/img/logo-collapse.png">
        <span class="project-name" v-show="!collapse">总后台</span>
      </div>
      <img v-show="collapse" src="../../assets/img/logo-collapse.png">
      <!-- <i v-show="collapse" class="iconfont icon-xingzhuang60kaobei2"></i> -->
    </div>
    <el-menu unique-opened :default-active="$route.path" collapse-transition router :collapse="collapse" class="el-menu-vertical-demo">
        <template v-for = "menuA in menu">
            <template v-if="!menuA.children.length">
                <el-menu-item :key="menuA.id" @click="change(menuA.raw.value)" :index="menuA.raw.value">
                  <i :class="[menuA.raw.icon, 'mr-10']"></i><span slot="title">{{ menuA.raw.name }}</span>
                </el-menu-item>
            </template>
            <template v-else>
                <el-submenu :key="menuA.id" :index="menuA.raw.value">
                    <template slot="title"><i :class="[menuA.raw.icon, 'mr-10']"></i><span slot="title">{{ menuA.raw.name }}</span></template>
                    <template>
                        <div v-for="menuB in menuA.children" :key="menuB.raw.value">
                        <el-menu-item @click="change(menuB.raw.value)" :index="menuB.raw.value">
                            <span slot="title">{{ menuB.raw.name }}</span>
                        </el-menu-item>
                        </div>
                    </template>
                </el-submenu>
            </template>
        </template>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  props: ['menu', 'width', 'collapse'],
  methods: {
    change (path) {
      if (path.startsWith('http://') || path.startsWith('https://')) {
        window.open(path, '_blank')
      } else if (path.startsWith("iframe://")) {
        path = path.substring("iframe://".length)
        if (path.startsWith('http://') || path.startsWith('https://')) {
          window.open(path, '_blank')
        } else {
          if (!path.startsWith('/')) {
            path = '/' + path
          }
          window.open(path, '_blank')
        }
      } else {
        if (!path.startsWith('/')) {
          path = '/' + path
        }
        this.$router.push(path)
      }
      if(path == this.$route.path){
        this.$emit('rerender', true)
      }
    }
  }
}
</script>
<style scoped>
  .el-submenu__title:hover i {
    color: #eee!important;
  }
  .el-menu-item:hover >>> i {
    color: #eee!important;
  }
  /* SideBar */
  .menu {
    position: absolute!important;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #0c2449;
  }
  .project-name {
    color: #fff;
    line-height: 50px;
    display: inline-block;
    vertical-align: top;
    font-size: 24px;
  }
</style>
