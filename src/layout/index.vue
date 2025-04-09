<template>
  <div class="admin-dashboard">
    <!-- 侧边栏 -->
    <el-aside :width="sidebarWidth" class="sidebar" :class="{ 'sidebar-collapsed': isCollapsed }">
      <div class="sidebar-header">
        <div class="logo">
          <el-icon><Opportunity /></el-icon>
          <span v-show="!isCollapsed">欢迎使用</span>
        </div>
      </div>
      <el-menu
        :default-active="activeMenu"
        class="sidebar-menu"
        :collapse="isCollapsed"
        background-color="#ffffff"
        text-color="#495057"
        active-text-color="#4361ee"
        @select="handleSelect"
      >
        <el-menu-item index="/kzt">
          <el-icon><HomeFilled /></el-icon>
          <template #title>控制台</template>
        </el-menu-item>
        <el-menu-item index="/subApp1">
          <el-icon><User /></el-icon>
          <template #title>子应用1</template>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <!-- 主内容区 -->
    <div class="main-container" :class="{ 'main-container-collapsed': isCollapsed }">
      <!-- 顶部导航 -->
      <el-header class="header">
        <div class="header-left">
          <el-button link @click="toggleSidebar">
            <el-icon :size="20"><Expand v-if="isCollapsed" /><Fold v-else /></el-icon>
          </el-button>
          <el-input
            v-model="searchQuery"
            placeholder="搜索..."
            class="search-input"
            :prefix-icon="Search"
            clearable
          />
        </div>
        <div class="header-right">
          <el-tooltip content="消息" placement="bottom">
            <el-badge :value="3" class="header-icon">
              <el-button link>
                <el-icon :size="20"><Message /></el-icon>
              </el-button>
            </el-badge>
          </el-tooltip>
          <el-tooltip content="通知" placement="bottom">
            <el-badge :value="8" class="header-icon">
              <el-button link>
                <el-icon :size="20"><Notification /></el-icon>
              </el-button>
            </el-badge>
          </el-tooltip>
          <!-- 主题切换 -->
          <!-- <el-dropdown>
            <el-icon :size="20"><MagicStick /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="handleChange('default')">默认</el-dropdown-item>
                <el-dropdown-item @click="handleChange('dark')">黑色</el-dropdown-item>
                <el-dropdown-item @click="handleChange('yellow')">黄色</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown> -->
          <el-dropdown>
            <div class="user-profile">
              <el-avatar :size="36" class="user-avatar">A</el-avatar>
              <span class="user-name">管理员</span>
              <el-icon class="el-icon--right"><ArrowDown /></el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>系统设置</el-dropdown-item>
                <el-dropdown-item divided @click="handleQuit">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>

      <!-- 内容区域 -->
      <el-main class="content">
        <router-view></router-view>
      </el-main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Opportunity,
  HomeFilled,
  User,
  Money,
  Expand,
  Fold,
  Search,
  Message,
  Notification,
  ArrowDown,
  MagicStick,
} from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()
const handleSelect = (path: string) => {
  router.push(path)
}

// const handleChange = (theme: string) => {
//   document.documentElement.setAttribute('color-scheme', theme)
// }

// 侧边栏状态
const isCollapsed = ref(false)
const sidebarWidth = ref('260px')
const activeMenu = ref(route.path)

// 搜索查询
const searchQuery = ref('')
// 切换侧边栏
const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
  sidebarWidth.value = isCollapsed.value ? '64px' : '260px'
}
// 退出
const handleQuit = () => {
  router.push('/')
}
</script>

<style scoped>
.admin-dashboard {
  display: flex;
  min-height: 100vh;
  background-color: #f5f7fb;
}

/* 侧边栏样式 */
.sidebar {
  height: 100vh;
  background-color: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
  transition: width 0.3s;
  display: flex;
  flex-direction: column;
}

.sidebar-collapsed {
  width: 64px;
}

.sidebar-header {
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.logo {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: #4361ee;
  gap: 10px;
}

.sidebar-menu {
  border-right: none;
  height: calc(100vh - 70px);
  overflow-y: auto;
  flex: 1;
}

.menu-title {
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 600;
  color: #adb5bd;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

:deep(.el-menu-item) {
  height: 48px;
  line-height: 48px;
}

:deep(.el-menu-item .el-badge) {
  margin-left: auto;
}

/* 主内容区 */
.main-container {
  flex: 1;
  transition: margin-left 0.3s;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* .main-container-collapsed {
  margin-left: 64px;
} */

/* 顶部导航 */
.header {
  height: 70px;
  background-color: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  position: sticky;
  top: 0;
  z-index: 99;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.search-input {
  width: 250px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.header-icon {
  margin-right: 0;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.user-name {
  font-weight: 500;
  font-size: 14px;
}

/* 内容区域 */
.content {
  padding: 25px;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .search-input {
    width: 180px;
  }
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    z-index: 1000;
    transform: translateX(-100%);
  }

  .sidebar.active {
    transform: translateX(0);
  }

  .main-container {
    margin-left: 0;
  }

  .search-input {
    display: none;
  }

  .page-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}

@media (max-width: 576px) {
  .header-right {
    gap: 5px;
  }

  .user-name {
    display: none;
  }
}
</style>
