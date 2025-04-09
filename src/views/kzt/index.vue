<script lang="ts" setup>
import { ShoppingCart, User, Box, Money, Message } from '@element-plus/icons-vue'
import aAAAAA from './A.vue'
// 活动数据
const activities = ref([
  {
    icon: ShoppingCart,
    type: 'primary',
    color: '#4361ee',
    title: '新订单 #3254',
    description: '客户 张先生 下单购买了 3 件商品',
    time: '10分钟前',
  },
  {
    icon: User,
    type: 'success',
    color: '#4cc9f0',
    title: '新用户注册',
    description: '用户 李小姐 通过微信注册了账号',
    time: '25分钟前',
  },
  {
    icon: Message,
    type: 'warning',
    color: '#f8961e',
    title: '新评论',
    description: '用户 王先生 对产品 #2456 发表了评论',
    time: '1小时前',
  },
  {
    icon: Box,
    type: 'info',
    color: '#3a0ca3',
    title: '订单发货',
    description: '订单 #3120 已通过顺丰快递发货',
    time: '3小时前',
  },
])

// 订单数据
const orders = ref([
  {
    id: '#3254',
    customer: '张先生',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    date: '2023-06-15',
    amount: '1,245',
    status: '已完成',
    statusType: 'success',
  },
  {
    id: '#3253',
    customer: '李小姐',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    date: '2023-06-15',
    amount: '856',
    status: '已完成',
    statusType: 'success',
  },
  {
    id: '#3252',
    customer: '王先生',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    date: '2023-06-14',
    amount: '2,340',
    status: '处理中',
    statusType: 'warning',
  },
  {
    id: '#3251',
    customer: '赵女士',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    date: '2023-06-14',
    amount: '1,780',
    status: '已取消',
    statusType: 'danger',
  },
  {
    id: '#3250',
    customer: '刘先生',
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    date: '2023-06-13',
    amount: '980',
    status: '已完成',
    statusType: 'success',
  },
])
</script>

<template>
  <aAAAAA />
  <!-- 页面标题和面包屑 -->
  <div class="page-header">
    <div class="page-title">
      <h1>控制台</h1>
    </div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>控制台</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <!-- 数据卡片 -->
  <el-row :gutter="20" class="stats-cards">
    <el-col :xs="24" :sm="12" :md="6">
      <el-card shadow="hover" class="stats-card">
        <div class="stats-card-header">
          <div class="stats-card-title">总销售额</div>
          <el-icon class="stats-card-icon icon-primary"><Money /></el-icon>
        </div>
        <div class="stats-card-value">¥ 48,562</div>
        <div class="stats-card-change">
          <el-icon color="#2ecc71"><Top /></el-icon>
          <span class="change-up">12.5% 较上月</span>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="6">
      <el-card shadow="hover" class="stats-card">
        <div class="stats-card-header">
          <div class="stats-card-title">总订单数</div>
          <el-icon class="stats-card-icon icon-success"><ShoppingCart /></el-icon>
        </div>
        <div class="stats-card-value">1,856</div>
        <div class="stats-card-change">
          <el-icon color="#2ecc71"><Top /></el-icon>
          <span class="change-up">8.3% 较上月</span>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="6">
      <el-card shadow="hover" class="stats-card">
        <div class="stats-card-header">
          <div class="stats-card-title">新增用户</div>
          <el-icon class="stats-card-icon icon-warning"><User /></el-icon>
        </div>
        <div class="stats-card-value">426</div>
        <div class="stats-card-change">
          <el-icon color="#e74c3c"><Bottom /></el-icon>
          <span class="change-down">3.2% 较上月</span>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="6">
      <el-card shadow="hover" class="stats-card">
        <div class="stats-card-header">
          <div class="stats-card-title">转化率</div>
          <el-icon class="stats-card-icon icon-danger"><DataLine /></el-icon>
        </div>
        <div class="stats-card-value">3.42%</div>
        <div class="stats-card-change">
          <el-icon color="#2ecc71"><Top /></el-icon>
          <span class="change-up">1.2% 较上月</span>
        </div>
      </el-card>
    </el-col>
  </el-row>

  <!-- 图表区域 -->
  <el-row :gutter="20" class="chart-row">
    <el-col :xs="24" :lg="16">
      <el-card shadow="never" class="chart-card">
        <template #header>
          <div class="chart-header">
            <span class="chart-title">销售趋势</span>
            <el-dropdown>
              <el-button link>
                <el-icon><MoreFilled /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>本周</el-dropdown-item>
                  <el-dropdown-item>本月</el-dropdown-item>
                  <el-dropdown-item>本季</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </template>
        <div class="chart-placeholder">
          <span>销售趋势图表区域</span>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="24" :lg="8">
      <el-card shadow="never" class="chart-card">
        <template #header>
          <div class="chart-header">
            <span class="chart-title">用户来源</span>
            <el-dropdown>
              <el-button link>
                <el-icon><MoreFilled /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>本周</el-dropdown-item>
                  <el-dropdown-item>本月</el-dropdown-item>
                  <el-dropdown-item>本季</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </template>
        <div class="chart-placeholder">
          <span>用户来源图表区域</span>
        </div>
      </el-card>
    </el-col>
  </el-row>

  <!-- 最近活动和订单表格 -->
  <el-row :gutter="20">
    <el-col :xs="24" :lg="12">
      <el-card shadow="never" class="activity-card">
        <template #header>
          <div class="chart-header">
            <span class="chart-title">最近活动</span>
            <el-dropdown>
              <el-button link>
                <el-icon><MoreFilled /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>查看更多</el-dropdown-item>
                  <el-dropdown-item>设置</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </template>
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :timestamp="activity.time"
            placement="top"
          >
            <el-card shadow="hover">
              <h4>{{ activity.title }}</h4>
              <p>{{ activity.description }}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-card>
    </el-col>
    <el-col :xs="24" :lg="12">
      <el-card shadow="never" class="table-card">
        <template #header>
          <div class="table-header">
            <span class="table-title">最近订单</span>
            <div>
              <el-button type="primary" link>导出</el-button>
              <el-button type="primary" link>查看全部</el-button>
            </div>
          </div>
        </template>
        <el-table :data="orders" style="width: 100%">
          <el-table-column prop="id" label="订单号" width="100" />
          <el-table-column prop="customer" label="客户" width="180">
            <template #default="{ row }">
              <div class="user-cell">
                <el-avatar :size="32" :src="row.avatar" />
                <span>{{ row.customer }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="日期" width="120" />
          <el-table-column prop="amount" label="金额" width="120">
            <template #default="{ row }">¥ {{ row.amount }}</template>
          </el-table-column>
          <el-table-column prop="status" label="状态" width="120">
            <template #default="{ row }">
              <el-tag :type="row.statusType" effect="light">{{ row.status }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="60">
            <template #default>
              <el-button link>
                <el-icon><MoreFilled /></el-icon>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          class="pagination"
          :page-size="5"
          :pager-count="5"
          layout="prev, pager, next"
          :total="50"
        />
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.page-title h1 {
  font-size: 24px;
  font-weight: 600;
  color: #212529;
}

/* 数据卡片 */
.stats-cards {
  margin-bottom: 20px;
}

.stats-card {
  border-radius: 10px;
  transition: transform 0.3s;
}

.stats-card:hover {
  transform: translateY(-5px);
}

.stats-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.stats-card-title {
  font-size: 14px;
  color: #6c757d;
  font-weight: 500;
}

.stats-card-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.icon-primary {
  background-color: rgba(67, 97, 238, 0.1);
  color: #4361ee;
}

.icon-success {
  background-color: rgba(76, 201, 240, 0.1);
  color: #4cc9f0;
}

.icon-warning {
  background-color: rgba(248, 150, 30, 0.1);
  color: #f8961e;
}

.icon-danger {
  background-color: rgba(247, 37, 133, 0.1);
  color: #f72585;
}

.stats-card-value {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 5px;
}

.stats-card-change {
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.change-up {
  color: #2ecc71;
}

.change-down {
  color: #e74c3c;
}

/* 图表区域 */
.chart-row {
  margin-bottom: 20px;
}

.chart-card {
  border-radius: 10px;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chart-title {
  font-size: 16px;
  font-weight: 600;
}

.chart-placeholder {
  height: 300px;
  background-color: #f8f9fa;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #adb5bd;
  font-size: 14px;
}

/* 活动卡片 */
.activity-card {
  border-radius: 10px;
  height: 100%;
}

:deep(.el-timeline-item__wrapper) {
  padding-left: 12px;
}

/* 表格卡片 */
.table-card {
  border-radius: 10px;
  height: 100%;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table-title {
  font-size: 16px;
  font-weight: 600;
}

.user-cell {
  display: flex;
  align-items: center;
  gap: 10px;
}

.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
