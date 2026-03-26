<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <!-- Container -->
    <div class="container grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded-xl shadow-lg p-6 max-w-4xl items-stretch">
      
      <!-- Left Column: About Organizo -->
      <div class="flex flex-col justify-center space-y-6">
        <h1 class="text-4xl lg:text-4xl font-extrabold tracking-wide bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-teal-500 drop-shadow-md">
          Organizo
        </h1>
        <p class="text-lg text-gray-600 leading-relaxed">
          Stay organized and in control of your daily life. Organizo is your personal task manager designed to help you plan, track, and complete your tasks with ease.
        </p>
        <div class="space-y-3">
          <div class="flex items-center space-x-3">
            <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span class="text-gray-700">Simple and smart task organization</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span class="text-gray-700">Daily planning made effortless</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span class="text-gray-700">Track your progress effortlessly</span>
          </div>
        </div>
      </div>
      
      <transition name="fade" mode="out-in">
        <!-- Right Column: Login / Signup Form -->
        <div class="flex flex-col justify-center bg-gray-50 rounded-xl border border-gray-200 p-6">
          <!-- Login Form -->
          <template v-if="showLogin">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">
              Log In
            </h2>
            <form @submit="handleLogin" class="space-y-4">
              <div class="flex flex-col">
                <label class="text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  v-model="loginForm.email"
                  placeholder="Enter your email" 
                  class="input-field" 
                  :class="{ 'border-red-500': loginErrors.email }"
                  autocomplete="username" 
                />
                <span v-if="loginErrors.email" class="text-red-500 text-sm mt-1">{{ loginErrors.email }}</span>
              </div>
              <div class="flex flex-col">
                <label class="text-gray-700 mb-1">Password</label>
                <input 
                  type="password" 
                  v-model="loginForm.password"
                  placeholder="••••••••" 
                  class="input-field" 
                  :class="{ 'border-red-500': loginErrors.password }"
                  autocomplete="current-password" 
                />
                <span v-if="loginErrors.password" class="text-red-500 text-sm mt-1">{{ loginErrors.password }}</span>
              </div>
              <span v-if="loginErrors.general" class="text-red-500 text-sm">{{ loginErrors.general }}</span>
              <button type="submit" class="btn-primary w-full transform hover:scale-105 transition-all duration-200 shadow-lg">
                Log In
              </button>
            </form>
            <div class="flex justify-between text-gray-500 text-sm mt-4">
              <span></span>
              <button @click="toggleForm" class="hover:text-blue-600 font-medium">
                Sign Up
              </button>
            </div>
          </template>

          <!-- Signup Form -->
          <template v-else>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">
              Sign Up
            </h2>
            <form @submit="handleSignup" class="space-y-4">
              <div class="flex flex-col">
                <label class="text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  v-model="signupForm.name"
                  placeholder="Enter your name" 
                  class="input-field" 
                  :class="{ 'border-red-500': signupErrors.name }"
                  autocomplete="name" 
                />
                <span v-if="signupErrors.name" class="text-red-500 text-sm mt-1">{{ signupErrors.name }}</span>
              </div>
              <div class="flex flex-col">
                <label class="text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  v-model="signupForm.email"
                  placeholder="Enter your email" 
                  class="input-field" 
                  :class="{ 'border-red-500': signupErrors.email }"
                  autocomplete="username" 
                />
                <span v-if="signupErrors.email" class="text-red-500 text-sm mt-1">{{ signupErrors.email }}</span>
              </div>
              <div class="flex flex-col">
                <label class="text-gray-700 mb-1">Password</label>
                <input 
                  type="password" 
                  v-model="signupForm.password"
                  placeholder="••••••••" 
                  class="input-field" 
                  :class="{ 'border-red-500': signupErrors.password }"
                  autocomplete="new-password" 
                />
                <span v-if="signupErrors.password" class="text-red-500 text-sm mt-1">{{ signupErrors.password }}</span>
              </div>
              <span v-if="signupErrors.general" class="text-red-500 text-sm">{{ signupErrors.general }}</span>
              <button type="submit" class="btn-primary w-full transform hover:scale-105 transition-all duration-200 shadow-lg">
                Sign Up
              </button>
            </form>
            <div class="flex justify-between text-gray-500 text-sm mt-4">
              <span></span>
              <button @click="toggleForm" class="hover:text-blue-600 font-medium">
                Log In
              </button>
            </div>
          </template>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const router = useRouter()
const showLogin = ref(true)
const toast = useToast()

// Check if user is already logged in
onMounted(() => {
  const token = localStorage.getItem('token')
  if (token) {
    router.push('/dashboard')
  }
})

const loginForm = reactive({
  email: '',
  password: ''
})

const signupForm = reactive({
  name: '',
  email: '',
  password: ''
})

const loginErrors = reactive({})
const signupErrors = reactive({})

function toggleForm() {
  showLogin.value = !showLogin.value
  clearErrors()
}

function clearErrors() {
  Object.keys(loginErrors).forEach(key => delete loginErrors[key])
  Object.keys(signupErrors).forEach(key => delete signupErrors[key])
}

function validateLogin() {
  const errors = {}
  
  if (!loginForm.email) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginForm.email)) {
    errors.email = 'Please enter a valid email'
  }
  
  if (!loginForm.password) {
    errors.password = 'Password is required'
  } else if (loginForm.password.length < 6) {
    errors.password = 'Password must be at least 6 characters'
  }
  
  Object.assign(loginErrors, errors)
  return Object.keys(errors).length === 0
}

function validateSignup() {
  const errors = {}
  
  if (!signupForm.name) {
    errors.name = 'Name is required'
  } else if (signupForm.name.length < 2) {
    errors.name = 'Name must be at least 2 characters'
  } else if (!/^[a-zA-Z\s]+$/.test(signupForm.name)) {
    errors.name = 'Name must contain only letters'
  }
  
  if (!signupForm.email) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupForm.email)) {
    errors.email = 'Please enter a valid email'
  }
  
  if (!signupForm.password) {
    errors.password = 'Password is required'
  } else if (signupForm.password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(signupForm.password)) {
    errors.password = 'Password must contain uppercase, lowercase, and number'
  }
  
  Object.assign(signupErrors, errors)
  return Object.keys(errors).length === 0
}

async function handleLogin(event) {
  event.preventDefault()
  clearErrors()
  
  if (validateLogin()) {
    try {
      
      const response = await axios.post('/api/login', loginForm)
      if (response.data.success) {
        localStorage.setItem('token', response.data.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.data.user))
        
        toast.success('Login successful!')
        
        router.push('/dashboard')

        loginForm.email = ''
        loginForm.password = ''
        toggleForm()
      } else {
        loginErrors.general = response.data.message || 'Login failed'
      }
    } catch (error) {
      loginErrors.general = 'Invalid email or password'
    }
  }
}

async function handleSignup(event) {
  event.preventDefault()
  clearErrors()
  
  if (validateSignup()) {
    try {
      const response = await axios.post('/api/register', signupForm)     
      if (response.data.success) {

        toast.success('Account created successfully! Please login.')
        
        signupForm.name = ''
        signupForm.email = ''
        signupForm.password = ''
        toggleForm()
      } else {
        signupErrors.general = response.data.message || 'Registration failed'
      }
    } catch (error) {
      if (error.response?.data?.errors) {
        Object.assign(signupErrors, error.response.data.errors)
      } else {
        signupErrors.general = error.response?.data?.message || 'Registration failed'
      }
    }
  }
}
</script>

<style scoped>

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

</style>