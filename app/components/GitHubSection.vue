<template>
  <div class="space-y-6">
    <!-- Section Title -->
    <div>
      <div class="flex items-center justify-between mb-2">
        <a
          href="https://github.com/Fzzmn"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex items-center gap-2 font-mono text-sm font-bold text-term-text hover:text-term-label transition-colors"
        >
          <svg class="w-4 h-4 fill-current text-term-dot-green/80 group-hover:text-term-dot-green" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <TextScramble text="GitHub Profile" :duration="550" />
          <span class="text-xs text-term-muted font-normal group-hover:translate-x-0.5 transition-transform">(@{{ githubData.user.username }}) ↗</span>
        </a>

        <!-- User Highlights / Followers (Hidden for now)
        <div class="hidden sm:flex items-center gap-2 text-xs font-mono text-term-muted">
          <span>{{ githubData.user.followers }} followers</span>
          <span>·</span>
          <span>{{ githubData.user.following }} following</span>
          <span class="px-1.5 py-0.2 rounded border border-term-label/40 text-[10px] text-term-label">PRO</span>
        </div>
        -->
      </div>
    </div>

    <!-- 1. Popular Repositories (Hidden for now)
    <div>
      <div class="flex items-center justify-between mb-2.5">
        <p class="font-mono text-xs sm:text-sm font-semibold text-term-text">
          <TextScramble text="Popular repositories" :duration="500" />
        </p>
        <a
          href="https://github.com/Fzzmn?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          class="font-mono text-[11px] text-sky-400 hover:underline"
        >
          View all repositories
        </a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          v-for="repo in githubData.popularRepos"
          :key="repo.name"
          class="p-3.5 rounded-xl border border-base-border bg-base-card/90 hover:border-term-label/50 transition-all duration-200 flex flex-col justify-between group shadow-sm"
        >
          <div>
            <div class="flex items-center justify-between gap-2 mb-2">
              <a
                :href="repo.url"
                target="_blank"
                rel="noopener noreferrer"
                class="font-mono text-xs sm:text-sm font-semibold text-sky-400 group-hover:underline truncate"
              >
                {{ repo.name }}
              </a>
              <span class="font-mono text-[10px] px-2 py-0.5 rounded-full border border-base-border text-term-muted shrink-0">
                Public
              </span>
            </div>
          </div>

          <div class="flex items-center gap-3 pt-2 font-mono text-[11px] text-term-muted">
            // Language
            <div class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full shrink-0" :style="{ backgroundColor: repo.languageColor }" />
              <span>{{ repo.language }}</span>
            </div>

            // Star Count (if any)
            <div v-if="repo.stars > 0" class="flex items-center gap-1">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z"/>
              </svg>
              <span>{{ repo.stars }}</span>
            </div>

            // Fork Count (if any)
            <div v-if="repo.forks > 0" class="flex items-center gap-1">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                <path d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h4.5A2.25 2.25 0 0 0 12.5 6.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zM12.5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zM8 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zM8 10a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5z"/>
              </svg>
              <span>{{ repo.forks }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    -->

    <!-- 2. Contribution Calendar with Year Tabs -->
    <div class="space-y-3">
      <!-- Header with Total & Year Pills -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <h3 class="font-mono text-xs sm:text-sm text-term-text">
          <span class="font-bold text-white">{{ currentYearData.total }}</span>
          contributions in {{ selectedYear === '2026' ? 'the last year' : selectedYear }}
        </h3>

        <!-- Year Selector Buttons -->
        <div class="flex items-center gap-1 bg-[#161b22] p-1 rounded-lg border border-base-border self-start sm:self-auto">
          <button
            v-for="yr in availableYears"
            :key="yr"
            type="button"
            @click="selectedYear = yr"
            class="px-2.5 py-1 rounded text-xs font-mono transition-all duration-150"
            :class="selectedYear === yr
              ? 'bg-[#1f6feb] text-white font-semibold shadow-sm'
              : 'text-term-muted hover:text-term-text hover:bg-[#21262d]'"
          >
            {{ yr }}
          </button>
        </div>
      </div>

      <!-- Calendar Box -->
      <div class="bg-base-card rounded-xl p-3 sm:p-4 border border-base-border overflow-x-auto shadow-md relative">
        <div class="min-w-[735px]">
          <!-- Month Labels -->
          <div class="flex pl-8 mb-1.5 text-[10px] text-term-muted font-mono select-none">
            <span
              v-for="(m, idx) in currentYearData.months"
              :key="'m-' + idx"
              :style="{ width: `${m.colspan * 13}px` }"
              class="truncate"
            >
              {{ m.name }}
            </span>
          </div>

          <!-- Grid: Days of Week on Left + 53 Week Columns -->
          <div class="flex items-start gap-1">
            <!-- Day of Week Labels (Mon, Wed, Fri) -->
            <div class="w-7 shrink-0 flex flex-col gap-[3px] text-[9px] font-mono text-term-muted select-none pt-[1px]">
              <div class="h-[10px] leading-[10px]" /> <!-- Sun -->
              <div class="h-[10px] leading-[10px]">Mon</div>
              <div class="h-[10px] leading-[10px]" /> <!-- Tue -->
              <div class="h-[10px] leading-[10px]">Wed</div>
              <div class="h-[10px] leading-[10px]" /> <!-- Thu -->
              <div class="h-[10px] leading-[10px]">Fri</div>
              <div class="h-[10px] leading-[10px]" /> <!-- Sat -->
            </div>

            <!-- Weeks Grid -->
            <div class="flex gap-[3px]">
              <div
                v-for="(week, wIdx) in currentYearData.weeks"
                :key="'week-' + wIdx"
                class="flex flex-col gap-[3px]"
              >
                <div
                  v-for="(day, dIdx) in week"
                  :key="'d-' + wIdx + '-' + dIdx"
                  class="contribution-cell"
                  :class="getContributionClass(day.level)"
                  :title="day.tooltip || (day.date ? `${day.count} contributions on ${day.date}` : 'No contributions')"
                />
              </div>
            </div>
          </div>

          <!-- Calendar Footer: Guide link & Legend -->
          <div class="flex flex-wrap justify-between items-center gap-2 mt-3 pt-2.5 border-t border-base-border/40">
            <a
              href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile"
              target="_blank"
              rel="noopener noreferrer"
              class="font-mono text-[11px] text-term-muted hover:text-sky-400 transition-colors"
            >
              Learn how we count contributions
            </a>

            <div class="flex items-center gap-1.5 font-mono text-xs text-term-muted select-none">
              <span>Less</span>
              <div class="contribution-cell level-0" title="0 contributions" />
              <div class="contribution-cell level-1" title="1-2 contributions" />
              <div class="contribution-cell level-2" title="3-5 contributions" />
              <div class="contribution-cell level-3" title="6-8 contributions" />
              <div class="contribution-cell level-4" title="9+ contributions" />
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. Contribution Activity (Hidden for now)
    <div class="pt-2">
      <p class="font-mono text-xs sm:text-sm font-semibold text-term-text mb-3">
        <TextScramble text="Contribution activity" :duration="500" />
      </p>

      <div class="space-y-3 font-mono text-xs">
        // Month Subheader
        <div class="flex items-center gap-2 text-term-muted">
          <span class="text-white font-medium">{{ githubData.recentActivity.period }}</span>
          <div class="flex-1 h-px bg-base-border/50" />
        </div>

        // Activity Item
        <div class="relative pl-6 space-y-1.5 border-l border-base-border/60 ml-2 py-1">
          // Commit Dot
          <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-base-card border border-[#30363d] flex items-center justify-center text-term-muted">
            <svg class="w-2.5 h-2.5 fill-current" viewBox="0 0 16 16">
              <path d="M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5h-3.32zM8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
            </svg>
          </div>

          <p class="text-term-text font-medium">
            {{ githubData.recentActivity.summary }}
          </p>

          <div class="flex items-center justify-between text-term-muted bg-[#161b22]/70 px-3 py-2 rounded-lg border border-base-border/40">
            <a
              :href="githubData.recentActivity.repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sky-400 hover:underline font-mono"
            >
              {{ githubData.recentActivity.repo }}
            </a>
            <div class="flex items-center gap-2">
              <span>{{ githubData.recentActivity.commits }} commits</span>
              <div class="w-16 h-1.5 bg-[#21262d] rounded-full overflow-hidden">
                <div class="w-full h-full bg-[#39d353] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        // Show More Activity Button
        <div class="pt-1">
          <a
            href="https://github.com/Fzzmn?tab=overview"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full inline-flex items-center justify-center py-2 px-4 rounded-lg border border-base-border bg-[#161b22]/50 hover:bg-[#21262d] text-sky-400 font-mono text-xs font-semibold transition-colors"
          >
            Show more activity on GitHub ↗
          </a>
        </div>
      </div>
    </div>
    -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import TextScramble from './TextScramble.vue'
import initialGithubData from '~/data/githubData.json'

const githubData = ref(initialGithubData)
const selectedYear = ref<'2026' | '2025' | '2024' | '2023'>('2026')
const availableYears = ['2026', '2025', '2024', '2023'] as const

const currentYearData = computed(() => {
  return githubData.value.years[selectedYear.value] || githubData.value.years['2026']
})

const getContributionClass = (level: number | string): string => {
  return `level-${level ?? 0}`
}

onMounted(async () => {
  // Attempt background sync if server endpoint is available
  try {
    const res = await fetch('/api/github-contributions')
    if (res.ok) {
      const data = await res.json()
      if (data && data.years) {
        githubData.value = data
      }
    }
  } catch {
    // Gracefully stay on pre-computed static data
  }
})
</script>

<style scoped>
.contribution-cell {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  transition: transform 0.15s ease, outline 0.15s ease;
}

.contribution-cell:hover {
  transform: scale(1.25);
  outline: 1.5px solid #ffffff;
  z-index: 10;
}

/* GitHub Dark Theme Contribution Levels */
.level-0,
.level-NONE {
  background-color: #161b22;
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.level-1,
.level-FIRST_QUARTILE {
  background-color: #0e4429;
}

.level-2,
.level-SECOND_QUARTILE {
  background-color: #006d32;
}

.level-3,
.level-THIRD_QUARTILE {
  background-color: #26a641;
}

.level-4,
.level-FOURTH_QUARTILE {
  background-color: #39d353;
}
</style>
