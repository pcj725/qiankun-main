<template>
  <div class="aszxcasd">
    <div class="particles-container">
      <canvas id="particles"></canvas>
    </div>
    <div class="login-container">
      <div class="login-card">
        <div class="card-inner">
          <h1>欢迎回来</h1>
          <p class="subtitle">请登录您的账户继续</p>

          <form id="login-form" novalidate>
            <div class="form-group">
              <input id="username" type="text" placeholder=" " autocomplete="off" required />
              <label for="username">用户名</label>
              <span class="error-message"></span>
            </div>

            <div class="form-group">
              <input
                id="password"
                type="password"
                placeholder=" "
                autocomplete="new-password"
                required
              />
              <label for="password">密码</label>
              <span class="error-message"></span>
              <button type="button" class="toggle-password">
                <i class="fa-solid fa-eye"></i>
              </button>
            </div>

            <div class="form-options">
              <div class="remember-me">
                <input id="remember" type="checkbox" />
                <label for="remember">记住我</label>
              </div>
              <a href="#" class="forgot-password">忘记密码?</a>
            </div>

            <button type="submit" class="login-button" @click="handleLogin">
              <span class="button-text">登录</span>
              <span class="spinner"></span>
            </button>
          </form>

          <div class="social-login">
            <p>或使用以下方式登录</p>
            <div class="social-icons">
              <a href="#" class="social-icon github">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" class="social-icon google">
                <i class="fab fa-google"></i>
              </a>
            </div>
          </div>

          <p class="signup-link">还没有账户? <a href="#">立即注册</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()

// 粒子背景动画
const initParticles = () => {
  const canvas = document.getElementById('particles') as any
  if (!canvas) {
    return
  }
  const ctx = canvas.getContext('2d')

  let particles: any[] = []
  const particleCount = 100

  const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  window.addEventListener('resize', resizeCanvas)
  resizeCanvas()

  // 创建粒子
  const createParticles = () => {
    particles = []
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
      })
    }
  }

  // 绘制和更新粒子
  const drawParticles = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach((particle) => {
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.fill()

      // 更新位置
      particle.x += particle.speedX
      particle.y += particle.speedY

      // 边界检查
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX = -particle.speedX
      }

      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY = -particle.speedY
      }
    })

    // 连接临近粒子
    connectParticles()

    requestAnimationFrame(drawParticles)
  }

  // 连接临近的粒子
  const connectParticles = () => {
    const maxDistance = 150

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance) {
          const opacity = 1 - distance / maxDistance
          ctx.beginPath()
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`
          ctx.lineWidth = 1
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }
    }
  }

  createParticles()
  drawParticles()
}

// 登录
const handleLogin = () => {
  router.push('/kzt')
}

onMounted(() => {
  initParticles()
})
</script>

<style scoped lang="scss">
$primary-color: #6366f1;
$primary-light: #818cf8;
$primary-dark: #4f46e5;
$secondary-color: #c084fc;
$text-color: #1f2937;
$text-light: #6b7280;
$background-start: #4338ca;
$background-end: #7e22ce;
$card-bg: rgba(255, 255, 255, 0.8);
$card-shadow: rgba(17, 12, 46, 0.15);
$error-color: #ef4444;
$success-color: #10b981;
$input-border: #e5e7eb;
$input-focus: #818cf8;

.aszxcasd {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  overflow: hidden;
}

// 颗粒背景
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(135deg, $background-start, $background-end);
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  perspective: 1000px;
}

.login-card {
  width: 420px;
  background: $card-bg;
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 15px 35px $card-shadow;
  overflow: hidden;
  transform-style: preserve-3d;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card-inner {
  padding: 40px 30px;
}

h1 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: center;
  background: linear-gradient(to right, $primary-dark, $secondary-color);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subtitle {
  text-align: center;
  color: $text-light;
  margin-bottom: 30px;
  font-size: 14px;
}

.form-group {
  position: relative;
  margin-bottom: 24px;
}

.form-group input {
  width: calc(100% - 32px);
  padding: 16px;
  font-size: 16px;
  border: 1px solid $input-border;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.5);
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
  font-family: 'Poppins', sans-serif;
}

.form-group input:focus {
  outline: none;
  border-color: $input-focus;
  box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.2);
}

/* 浮动标签样式 - 优化红框部分 */
.form-group label {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: $text-light;
  pointer-events: none;
  transition: all 0.3s ease;
  padding: 0 4px;
  background-color: transparent;
  font-size: 16px;
}

.form-group input:focus + label,
.form-group input:not(:placeholder-shown) + label {
  top: 0;
  line-height: 20px;
  transform: translateY(-50%);
  font-size: 14px;
  background-color: white;
  color: $primary-color;
  z-index: 1;
  box-shadow: 0 3px 6px rgba(106, 90, 249, 0.4);
  border-radius: 4px;
}

.form-group input::placeholder {
  color: transparent;
}

.toggle-password {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: $text-light;
  cursor: pointer;
  font-size: 16px;
}

.error-message {
  position: absolute;
  left: 0;
  bottom: -20px;
  font-size: 12px;
  color: $error-color;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  font-size: 14px;
}

.remember-me {
  display: flex;
  align-items: center;
}

.remember-me input {
  margin-right: 8px;
  accent-color: $primary-color;
}

.forgot-password {
  color: $primary-color;
  text-decoration: none;
  transition: color 0.2s;
}

.forgot-password:hover {
  color: $primary-dark;
  text-decoration: underline;
}

.login-button {
  width: 100%;
  padding: 14px;
  background: linear-gradient(to right, $primary-color, $secondary-color);
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}

.login-button:active {
  transform: translateY(0);
}

.login-button .spinner {
  display: none;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s linear infinite;
  margin-left: 8px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.login-button.loading .button-text {
  visibility: hidden;
  opacity: 0;
}

.login-button.loading .spinner {
  display: block;
  position: absolute;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  transform: scale(0);
  animation: ripple 0.6s linear;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

.social-login {
  margin-top: 30px;
  text-align: center;
}

.social-login p {
  font-size: 14px;
  color: $text-light;
  margin-bottom: 16px;
  position: relative;
}

.social-login p::before,
.social-login p::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 30%;
  height: 1px;
  background-color: $input-border;
}

.social-login p::before {
  left: 0;
}

.social-login p::after {
  right: 0;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  color: $text-color;
  font-size: 20px;
}

.social-icon:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.social-icon.github {
  color: #333;
}

.social-icon.google {
  color: #db4437;
}

.signup-link {
  margin-top: 30px;
  text-align: center;
  font-size: 14px;
  color: $text-light;
}

.signup-link a {
  color: $primary-color;
  text-decoration: none;
  font-weight: 500;
}

.signup-link a:hover {
  text-decoration: underline;
}

/* 输入框流光边框动画 */
@keyframes glow {
  0% {
    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
  }
  50% {
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
  }
}

.form-group input:focus {
  animation: glow 1.5s infinite;
}

/* 响应式调整 */
@media (max-width: 480px) {
  .card-inner {
    padding: 30px 20px;
  }

  h1 {
    font-size: 24px;
  }

  .form-options {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .social-login p::before,
  .social-login p::after {
    width: 25%;
  }
}
</style>
