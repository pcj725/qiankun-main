// 使用 commitlint 检查提交信息格式
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复
        'docs', // 文档变更
        'style', // 代码格式（不影响代码运行的变动）
        'refactor', // 重构
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'build', // 打包
        'ci', // CI相关变更
      ],
    ],
    'type-case': [0], // 类型大小写不限制
    'type-empty': [0], // 允许类型为空
    'scope-empty': [0], // 允许范围为空
    'scope-case': [0], // 范围大小写不限制
    'subject-full-stop': [0], // 主题结尾标点不限制
    'subject-case': [0], // 主题大小写不限制
    'header-max-length': [0, 'always', 72], // 标题最大长度
  },
}
