<template>
  <AppLayout>
    <div class="bg-white rounded-xl shadow-md p-4">
        <div class="flex justify-between items-center mb-3">
            <h1 class="text-2xl font-semibold text-gray-900">
            Settings
            </h1>
            <button class="btn-primary px-3 py-1.5 text-sm">
            Save Settings
            </button>
        </div>
    </div>
    <div class="flex justify-center items-center min-h-[60vh] py-10">
        <div class="bg-white shadow-md rounded-xl p-5 text-center max-w-sm">
            <div class="text-3xl mb-3">🚧</div>
            <h2 class="text-lg font-semibold text-gray-800">
            Under Construction
            </h2>
            <p class="text-gray-500 mt-1 text-sm">
            We're working on this feature. Please check back soon!
            </p>
        </div>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from '../components/AppLayout.vue'
</script>