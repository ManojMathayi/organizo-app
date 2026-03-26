<template>
  <AppLayout>
    <div class="bg-white rounded-xl shadow-md p-4">
      <div class="flex justify-between items-center mb-3">
        <h1 class="text-2xl font-semibold text-gray-900">
          Dashboard
        </h1>
      </div>
      <!-- Today's Tasks Widget -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-xl shadow-lg p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold text-gray-900">Today's Tasks</h2>
            <button class="btn-primary px-3 py-1.5 text-sm">
              Add Task
            </button>
          </div>
          <div class="space-y-3">
            <div class="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <input type="checkbox" class="mr-3 h-4 w-4 text-blue-600 rounded">
              <div class="flex-1">
                <h4 class="font-medium text-gray-900">Complete project documentation</h4>
                <p class="text-sm text-gray-600">Write comprehensive documentation for new feature</p>
              </div>
              <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">In Progress</span>
            </div>
            <div class="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <input type="checkbox" checked class="mr-3 h-4 w-4 text-blue-600 rounded">
              <div class="flex-1">
                <h4 class="font-medium text-gray-900 line-through">Review pull requests</h4>
                <p class="text-sm text-gray-600">Check and approve pending pull requests</p>
              </div>
              <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span>
            </div>
            <div class="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <input type="checkbox" class="mr-3 h-4 w-4 text-blue-600 rounded">
              <div class="flex-1">
                <h4 class="font-medium text-gray-900">Update dependencies</h4>
                <p class="text-sm text-gray-600">Update all npm packages to latest versions</p>
              </div>
              <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Pending</span>
            </div>
          </div>
        </div>

        <!-- Upcoming Deadlines Section -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Upcoming Deadlines</h2>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 border border-red-200 rounded-lg bg-red-50">
              <div>
                <h4 class="font-medium text-gray-900">Complete project documentation</h4>
                <p class="text-sm text-gray-600">Write comprehensive documentation for new feature</p>
                <p class="text-xs text-red-600 font-medium">Due in 2 days</p>
              </div>
              <span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Overdue</span>
            </div>
            <div class="flex items-center justify-between p-3 border border-yellow-200 rounded-lg bg-yellow-50">
              <div>
                <h4 class="font-medium text-gray-900">Review pull requests</h4>
                <p class="text-sm text-gray-600">Check and approve pending pull requests</p>
                <p class="text-xs text-yellow-600 font-medium">Due in 5 days</p>
              </div>
              <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Due Soon</span>
            </div>
            <div class="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div>
                <h4 class="font-medium text-gray-900">Update dependencies</h4>
                <p class="text-sm text-gray-600">Update all npm packages to latest versions</p>
                <p class="text-xs text-gray-600 font-medium">Due in 1 week</p>
              </div>
              <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">On Track</span>
            </div>
          </div>
        </div>

        <!-- Completion Statistics -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Completion Statistics</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600">67%</div>
              <div class="text-sm text-gray-600">Completion Rate</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-green-600">8</div>
              <div class="text-sm text-gray-600">Tasks This Week</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-600">24</div>
              <div class="text-sm text-gray-600">Tasks This Month</div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </AppLayout>
</template>

<script setup>
import AppLayout from '../components/AppLayout.vue'
</script>

<style scoped>
/* Optional: scrollbar styling */
main::-webkit-scrollbar {
  width: 8px;
}
main::-webkit-scrollbar-thumb {
  background-color: rgba(107, 114, 128, 0.4);
  border-radius: 4px;
}
</style>