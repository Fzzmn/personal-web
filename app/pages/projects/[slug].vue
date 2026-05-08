<template>
  <div class="min-h-screen bg-base-bg pt-28 pb-20 px-6 lg:px-8">
    <div class="max-w-6xl mx-auto w-full">
      <!-- Back to projects -->
      <NuxtLink to="/projects" class="inline-flex items-center gap-2 font-mono text-sm text-term-muted hover:text-term-label transition-colors mb-10">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to projects
      </NuxtLink>

      <div v-if="project" class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        <!-- Left Column: Content -->
        <div class="lg:col-span-5 space-y-10">
          
          <!-- Header -->
          <div>
            <div class="flex items-center gap-3 mb-2">
              <h1 class="font-mono text-2xl lg:text-3xl font-bold text-term-text">{{ project.title }}</h1>
              <a v-if="project.link" :href="project.link" target="_blank" rel="noopener" class="text-term-muted hover:text-term-label transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
            <p class="font-mono text-sm text-term-muted">{{ project.subtitle }}</p>
          </div>

          <!-- Overview -->
          <div class="space-y-3">
            <h2 class="font-mono text-sm text-term-label font-semibold">Overview</h2>
            <p class="font-mono text-sm text-term-text leading-relaxed opacity-90">{{ project.overview }}</p>
          </div>

          <!-- Challenge -->
          <div class="space-y-3" v-if="project.challenge">
            <h2 class="font-mono text-sm text-term-label font-semibold">Challenge</h2>
            <p class="font-mono text-sm text-term-text leading-relaxed opacity-90">{{ project.challenge }}</p>
          </div>

          <!-- What I've done -->
          <div class="space-y-3" v-if="project.tasks && project.tasks.length > 0">
            <h2 class="font-mono text-sm text-term-label font-semibold">What I've done</h2>
            <ol class="list-decimal list-outside ml-4 space-y-2 font-mono text-sm text-term-text opacity-90">
              <li v-for="(task, i) in project.tasks" :key="i" class="pl-2 leading-relaxed">
                {{ task }}
              </li>
            </ol>
          </div>

          <!-- Result -->
          <div class="space-y-3" v-if="project.result">
            <h2 class="font-mono text-sm text-term-label font-semibold">Result</h2>
            <ul class="list-decimal list-outside ml-4 space-y-2 font-mono text-sm text-term-text opacity-90">
               <li class="pl-2 leading-relaxed">{{ project.result }}</li>
            </ul>
          </div>

        </div>

        <!-- Right Column: Mockup Image -->
        <div class="lg:col-span-7">
          <div class="sticky top-28 bg-base-card rounded-2xl border border-base-border overflow-hidden shadow-2xl p-2 lg:p-4">
             <img :src="project.image" :alt="project.title" class="w-full h-auto rounded-xl border border-base-border/50" />
          </div>
        </div>

      </div>

      <!-- Not Found -->
      <div v-else class="text-center py-20">
        <h1 class="font-mono text-2xl text-term-text mb-4">Project not found</h1>
        <NuxtLink to="/projects" class="font-mono text-sm text-term-label hover:underline">Return to projects</NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug as string

// Mock data representing the projects
const projectsData: Record<string, any> = {
  navevent: {
    title: 'NavEvent',
    subtitle: 'Mobile event management system for AirNav Indonesia',
    link: '#',
    image: '/images/projects/naveven.png',
    overview: 'NavEvent is a comprehensive mobile application designed for AirNav Indonesia to manage internal events, scheduling, and attendance tracking in real-time. It streamlines communication and organizational tasks.',
    challenge: 'The primary challenge was ensuring real-time synchronization of event schedules across multiple user roles while maintaining a clean architecture and smooth performance on mobile devices.',
    tasks: [
      'Developed the mobile application using Flutter and Clean Architecture principles.',
      'Integrated real-time scheduling with a REST API backend.',
      'Designed and implemented the UI/UX based on provided Figma prototypes.',
      'Built a reliable attendance tracking mechanism for internal use.'
    ],
    result: 'Successfully deployed an efficient event management tool that improved internal coordination at AirNav Indonesia.'
  },
  helpdesk: {
    title: 'Helpdesk Mobile',
    subtitle: 'Enterprise support app with real-time WebSocket communication',
    link: '#',
    image: '/images/projects/helpdesk.png',
    overview: 'An enterprise-level mobile helpdesk application that enables seamless communication between support agents and employees using real-time WebSocket connections.',
    challenge: 'Handling real-time chat infrastructure via WebSockets and ensuring messages are delivered reliably without draining mobile battery life.',
    tasks: [
      'Implemented real-time chat using WebSockets in Flutter.',
      'Designed a scalable state management solution for handling active tickets.',
      'Integrated push notifications and background message synchronization.',
      'Optimized the application for enterprise-grade security and reliability.'
    ],
    result: 'Reduced average ticket response time through an always-connected mobile support ecosystem.'
  },
  arsipku: {
    title: 'Arsipku Mobile',
    subtitle: 'Secure mobile archive management for company documents',
    link: '#',
    image: '/images/projects/arsipku.png',
    overview: 'Arsipku is a secure mobile platform for managing, categorizing, and accessing company documents and archives on the go.',
    challenge: 'Ensuring high-level security for sensitive documents while providing a fast and intuitive search experience for mobile users.',
    tasks: [
      'Built a robust mobile document viewer using Flutter.',
      'Implemented secure authentication and document encryption workflows.',
      'Designed an efficient REST API integration for fast document retrieval.',
      'Structured the app using Clean Architecture for long-term maintainability.'
    ],
    result: 'Delivered a secure and fast mobile archiving solution that improved document accessibility for employees.'
  },
  wolio: {
    title: 'Wolio Learning',
    subtitle: 'Digital learning platform — university capstone project',
    link: '#',
    // Using a placeholder or fallback if wolio doesn't have a specific large mockup image yet
    image: '/images/projects/naveven.png', // Replace with actual wolio image if exists
    overview: 'Wolio Learning is a digital educational platform developed as my university capstone project. It facilitates online course delivery, student progress tracking, and interactive learning modules.',
    challenge: 'Designing a fully functional learning management system (LMS) from scratch, ensuring real-time data synchronization for quizzes and progress tracking.',
    tasks: [
      'Developed the frontend application using Vue.js.',
      'Integrated Firebase for real-time database, authentication, and hosting.',
      'Built interactive learning modules and quiz components.',
      'Implemented a role-based access control system for students and instructors.'
    ],
    result: 'Successfully defended the capstone project with a fully functional prototype of a modern learning management system.'
  }
}

const project = computed(() => projectsData[slug] || null)

useHead({
  title: project.value ? `${project.value.title} - Projects` : 'Project Not Found'
})
</script>
