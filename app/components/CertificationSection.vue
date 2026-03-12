<template>
  <section id="certifications" class="py-24 px-6 lg:px-0">
    <div class="max-w-6xl mx-auto w-full">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h1 class="text-2xl lg:text-3xl font-mono font-bold text-term-text mb-4">
          Featured Certifications<span class="text-term-muted animate-pulse">_</span>
        </h1>
        <p class="text-sm font-mono text-term-muted max-w-2xl mx-auto">
          A selection of professional recognitions and academic achievements I've earned throughout my journey.
        </p>
      </div>

      <!-- Grid Wrapper -->
      <div class="cert-grid">
        <div
          v-for="(cert, index) in certifications"
          :key="cert.title"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 100 + index * 100 } }"
          class="cert-card group"
          @click="openModal(cert)"
        >
          <!-- Display Image -->
          <div class="cert-image-area" :style="{ backgroundColor: cert.bgColor || '#111' }">
            <template v-if="cert.image">
              <img :src="cert.image" :alt="cert.title" class="cert-img group-hover:scale-105" />
            </template>
            <template v-else>
              <span class="text-4xl grayscale opacity-30 group-hover:scale-110 transition-transform duration-500">
                📜
              </span>
            </template>
          </div>

          <!-- Minimal Content -->
          <div class="cert-content">
            <span class="cert-badge">CERTIFICATION</span>
            <h3 class="cert-title-minimal">{{ cert.title }}</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Dialog -->
    <Transition name="modal">
      <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-container">
          <!-- Close Button -->
          <button class="modal-close" @click="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Modal Body -->
          <div class="modal-content-scroll">
            <!-- Top Section: Image -->
            <div class="modal-image-area" :style="{ backgroundColor: selectedCert?.bgColor || '#111' }">
              <img v-if="selectedCert?.image" :src="selectedCert.image" :alt="selectedCert.title" class="modal-img" />
              <span v-else class="text-8xl opacity-20">📜</span>
            </div>

            <!-- Content Details -->
            <div class="modal-info">
              <span class="cert-badge mb-3">CERTIFICATION</span>
              <h2 class="modal-title">{{ selectedCert?.title }}</h2>

              <div class="modal-section mt-8">
                <h4 class="modal-section-label">DESCRIPTION</h4>
                <p class="modal-description">{{ selectedCert?.description }}</p>
              </div>

              <div class="modal-section mt-8">
                <h4 class="modal-section-label">CREDENTIAL</h4>
                <a 
                  v-if="selectedCert?.credentialUrl" 
                  :href="selectedCert.credentialUrl" 
                  target="_blank" 
                  class="credential-btn group"
                >
                  <span>View Credential</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <p v-else class="text-term-muted font-mono text-xs italic">Credential link not available.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Certification {
  title: string
  issuer: string
  date: string
  description: string
  tags: string[]
  image?: string
  credentialUrl?: string
  bgColor?: string
}

const certifications: Certification[] = [
  {
    title: 'CCNAv7: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: 'February 2023',
    description: 'Completed foundational networking training covering network fundamentals, IPv4/IPv6 addressing, Ethernet, network protocols, and basic router and switch configuration.',
    tags: ['Networking', 'TCP/IP', 'Cisco', 'Network Fundamentals'],
    image: '/images/CCNA-_Introduction_to_Networks_certificate.png',
    credentialUrl: 'https://www.credly.com/org/cisco/badge/ccnav7-introduction-to-networks', // Placeholder if real not known
    bgColor: '#1a1a1a'
  },
  {
    title: 'CCNAv7: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'August 2023',
    description: 'Learned switching concepts, VLAN configuration, inter-VLAN routing, wireless LAN fundamentals, and network troubleshooting.',
    tags: ['VLAN', 'Routing', 'Wireless', 'Cisco Networking'],
    image: '/images/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate.png',
    credentialUrl: 'https://www.credly.com/org/cisco/badge/ccnav7-switching-routing-and-wireless-essentials', // Placeholder
    bgColor: '#161B22'
  }
]

const isModalOpen = ref(false)
const selectedCert = ref<Certification | null>(null)

const openModal = (cert: Certification) => {
  selectedCert.value = cert
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  setTimeout(() => {
    selectedCert.value = null
  }, 300)
  document.body.style.overflow = 'auto'
}

// Handle ESC key
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* ── Grid System ── */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

/* ── Minimal Card Base ── */
.cert-card {
  display: flex;
  flex-direction: column;
  background-color: #0d0d0d;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  height: 100%;
}

.cert-card:hover {
  transform: translateY(-8px);
  border-color: rgba(77, 201, 176, 0.4);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px -5px rgba(77, 201, 176, 0.1);
  background-color: #111;
}

/* ── Image Area ── */
.cert-image-area {
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.cert-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ── Content ── */
.cert-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cert-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #4dc9b0;
  background: rgba(77, 201, 176, 0.1);
  padding: 4px 10px;
  border-radius: 4px;
  width: fit-content;
  border: 1px solid rgba(77, 201, 176, 0.15);
}

.cert-title-minimal {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 1rem;
  color: white;
  line-height: 1.4;
}

/* ── Modal Overlay ── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-container {
  background: #0d0d0d;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: rotate(90deg);
}

.modal-content-scroll {
  overflow-y: auto;
  flex: 1;
  padding-bottom: 40px;
}

.modal-image-area {
  width: 100%;
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.modal-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 40px;
}

.modal-info {
  padding: 40px;
}

.modal-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.75rem;
  font-weight: 800;
  color: white;
  line-height: 1.2;
}

.modal-section-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: bold;
  color: #555;
  letter-spacing: 0.2em;
  margin-bottom: 12px;
}

.modal-description {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: #aaa;
  line-height: 1.7;
}

.credential-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: white;
  color: black;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 14px;
  padding: 12px 24px;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.credential-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
  background: #eee;
}

/* ── Transitions ── */
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container {
  animation: modal-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-leave-active .modal-container {
  animation: modal-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) reverse;
}

@keyframes modal-in {
  0% { transform: scale(0.9) translateY(20px); opacity: 0; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .cert-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .cert-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-container {
    max-height: 95vh;
  }
  
  .modal-title {
    font-size: 1.25rem;
  }
  
  .modal-info {
    padding: 24px;
  }
  
  .modal-img {
    padding: 20px;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .5; }
}
</style>
