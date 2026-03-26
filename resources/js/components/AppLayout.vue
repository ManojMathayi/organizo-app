<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Mobile Menu Toggle -->
    <button 
      @click="sidebarOpen = !sidebarOpen" 
      class="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>

    <!-- Sidebar -->
    <aside 
      :class="[
        'fixed lg:static lg:translate-x-0 inset-y-0 left-0 z-40 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
    >
      <!-- Logo -->
      <div class="h-16 flex items-center px-6 text-2xl font-bold text-blue-600">
        Organizo
      </div>
      
      <!-- Navigation -->
      <nav class="flex-1 p-6">
        <div class="space-y-6">
          <div>
            <div class="space-y-2">
              <router-link 
                to="/dashboard" 
                class="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                :class="{ 'bg-blue-50 text-blue-600 font-semibold': activeTab === 'dashboard' }"
                @click="activeTab = 'dashboard'"
              >
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                Dashboard
              </router-link>
              
              <router-link 
                to="/tasks" 
                class="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                :class="{ 'bg-blue-50 text-blue-600 font-semibold': activeTab === 'tasks' }"
                @click="activeTab = 'tasks'"
              >
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
                Tasks
              </router-link>

              <router-link 
                to="/categories" 
                class="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                :class="{ 'bg-blue-50 text-blue-600 font-semibold': activeTab === 'categories' }"
                @click="activeTab = 'categories'"
              >
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                Categories
              </router-link>

              <router-link 
                to="/reports" 
                class="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                :class="{ 'bg-blue-50 text-blue-600 font-semibold': activeTab === 'reports' }"
                @click="activeTab = 'reports'"
              >
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                Reports
              </router-link>

              <router-link 
                to="/settings" 
                class="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                :class="{ 'bg-blue-50 text-blue-600 font-semibold': activeTab === 'settings' }"
                @click="activeTab = 'settings'"
              >
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                Settings
              </router-link>
            </div>
          </div>
        </div>
      </nav>

      <!-- Logout Button -->
      <div class="p-4 border-t fixed bottom-0 w-64">
        <button 
          @click="logout" 
          class="w-full flex items-center px-4 py-3 text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
        >
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
          Logout
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 lg:ml-0 flex flex-col h-screen">
      <!-- Mobile Overlay -->
      <div 
        v-if="sidebarOpen" 
        @click="sidebarOpen = false"
        class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
      ></div>
      
      <!-- Top Navbar -->
      <header class="bg-white shadow-sm shrink-0">
        <div class="px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <!-- Left side - empty for spacing -->
            <div></div>
            
            <!-- Right side - User info -->
            <div class="flex items-center space-x-4">
              <span class="text-gray-700">Hi, {{ user?.name || 'User' }}</span>
              <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-semibold">
                  {{ user?.name?.charAt(0)?.toUpperCase() || 'U' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <!-- Page Content - Scrollable Area -->
      <div class="flex-1 overflow-y-auto p-4 lg:p-8">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const router = useRouter()
const toast = useToast()
const user = ref(null)
const activeTab = ref('dashboard')
const sidebarOpen = ref(false)

onMounted(() => {
  const token = localStorage.getItem('token')
  const userData = localStorage.getItem('user')
  
  if (!token) {
    router.push('/')
    return
  }
  
  if (userData) {
    user.value = JSON.parse(userData)
  }
  
  const currentPath = router.currentRoute.value.path
  if (currentPath.includes('dashboard')) {
    activeTab.value = 'dashboard'
  } else if (currentPath.includes('tasks')) {
    activeTab.value = 'tasks'
  }
})

function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  router.push('/')
}
</script>
