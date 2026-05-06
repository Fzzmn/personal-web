<template>
  <section class="pg">
    <div class="pg-wrap">
      <div class="pg-head">
        <p class="pg-eyebrow">// selected work</p>
        <h2 class="pg-title">Projects</h2>
      </div>

      <div class="grid">

        <!-- WIDE: NavEvent -->
        <div class="card card-wide group" v-motion :initial="{opacity:0,y:20}" :visible-once="{opacity:1,y:0,transition:{duration:500,delay:80}}">
          <div class="card-actions">
            <a href="#" class="act-btn" @click.prevent>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
          </div>
          <div class="mockup mockup-wide">
            <img src="/images/projects/naveven.png" alt="NavEvent" loading="lazy"/>
          </div>
          <div class="info">
            <h3 class="info-title">NavEvent</h3>
            <p class="info-desc">Mobile event management system for AirNav Indonesia with real-time scheduling.</p>
            <div class="badges">
              <span class="badge">Flutter</span>
              <span class="badge">REST API</span>
              <span class="badge">Clean Arch</span>
              <span class="badge">Figma</span>
            </div>
          </div>
        </div>

        <!-- TALL: Helpdesk -->
        <div class="card card-tall group" v-motion :initial="{opacity:0,x:20}" :visible-once="{opacity:1,x:0,transition:{duration:500,delay:160}}">
          <div class="card-actions">
            <a href="#" class="act-btn" @click.prevent>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
          </div>
          <div class="mockup mockup-tall">
            <img src="/images/projects/helpdesk.png" alt="Helpdesk" loading="lazy"/>
          </div>
          <div class="info">
            <h3 class="info-title">Helpdesk Mobile</h3>
            <p class="info-desc">Enterprise support app with real-time WebSocket communication.</p>
            <div class="badges">
              <span class="badge">Flutter</span>
              <span class="badge">WebSocket</span>
              <span class="badge">REST API</span>
            </div>
          </div>
        </div>

        <!-- NORMAL: Arsipku -->
        <div class="card card-normal group" v-motion :initial="{opacity:0,y:20}" :visible-once="{opacity:1,y:0,transition:{duration:500,delay:240}}">
          <div class="card-actions">
            <a href="#" class="act-btn" @click.prevent>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
          </div>
          <div class="mockup mockup-normal">
            <img src="/images/projects/arsipku.png" alt="Arsipku" loading="lazy"/>
          </div>
          <div class="info">
            <h3 class="info-title">Arsipku Mobile</h3>
            <p class="info-desc">Secure mobile archive management for company documents.</p>
            <div class="badges">
              <span class="badge">Flutter</span>
              <span class="badge">Clean Arch</span>
              <span class="badge">REST API</span>
            </div>
          </div>
        </div>

        <!-- SQUARE LOGO: Wolio -->
        <div class="card card-square group" v-motion :initial="{opacity:0,scale:0.9}" :visible-once="{opacity:1,scale:1,transition:{duration:500,delay:320}}">
          <div class="logo-center">
            <span class="logo-emoji">📚</span>
          </div>
          <div class="square-hover-info">
            <h3 class="info-title">Wolio Learning</h3>
            <p class="info-desc">Digital learning platform — my university capstone project.</p>
            <div class="badges">
              <span class="badge">Vue.js</span>
              <span class="badge">Firebase</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
/* PAGE */
.pg {
  background: #0a0f1a;
  min-height: 100vh;
  padding: 6rem 1.5rem 7rem;
}
.pg-wrap { max-width: 1100px; margin: 0 auto; }
.pg-head { margin-bottom: 2.5rem; }
.pg-eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: .7rem;
  letter-spacing: .18em;
  color: rgba(6,182,212,.6);
  margin-bottom: .5rem;
}
.pg-title {
  font-size: clamp(2.2rem,5vw,3.8rem);
  font-weight: 800;
  letter-spacing: -.04em;
  color: #fff;
}

/* GRID: 3 equal cols, explicit placement */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 220px;
  gap: 10px;
}

/* EXPLICIT POSITIONS */
.card-wide   { grid-column: 1 / 3; grid-row: 1 / 2; }
.card-tall   { grid-column: 3 / 4; grid-row: 1 / 3; }
.card-normal { grid-column: 1 / 2; grid-row: 2 / 3; }
.card-square { grid-column: 2 / 3; grid-row: 2 / 3; }

/* BASE CARD */
.card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: #111827;
  border: 1px solid rgba(42,63,85,.6);
  cursor: pointer;
  transition: transform .35s cubic-bezier(.34,1.4,.64,1),
              box-shadow .3s ease,
              border-color .3s ease;
}
.card:hover {
  transform: translateY(-6px) scale(1.015);
  border-color: rgba(77,201,176,.35);
  box-shadow: 0 20px 60px rgba(0,0,0,.55), 0 0 0 1px rgba(77,201,176,.12);
}

/* ACTION BUTTONS — slide in from top on hover */
.card-actions {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 20;
  display: flex;
  gap: 6px;
  transform: translateY(-40px);
  opacity: 0;
  transition: transform .3s ease, opacity .3s ease;
}
.card:hover .card-actions { transform: translateY(0); opacity: 1; }

.act-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255,255,255,.9);
  color: #0d1117;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform .2s ease;
}
.act-btn:hover { transform: scale(1.1); }

/* INFO BLOCK — bottom-left */
.info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.25rem 1.4rem;
  z-index: 10;
  background: linear-gradient(to top, rgba(13,17,23,.95) 60%, transparent 100%);
}
.info-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: .25rem;
  letter-spacing: -.01em;
  transition: color .25s;
}
.card:hover .info-title { color: #67e8f9; }
.info-desc {
  font-family: 'JetBrains Mono', monospace;
  font-size: .7rem;
  color: rgba(148,163,184,.8);
  line-height: 1.55;
  margin-bottom: .55rem;
}

/* BADGES */
.badges { display: flex; flex-wrap: wrap; gap: 5px; }
.badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: .62rem;
  color: rgba(203,213,225,.85);
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.1);
  padding: 3px 10px;
  border-radius: 99px;
  transition: border-color .2s, color .2s;
}
.card:hover .badge { border-color: rgba(6,182,212,.3); color: #e2e8f0; }

/* MOCKUP BASE */
.mockup {
  position: absolute;
  z-index: 1;
  pointer-events: none;
  transition: transform .5s cubic-bezier(.34,1.2,.64,1);
}
.mockup img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
  filter: drop-shadow(0 12px 30px rgba(0,0,0,.7));
}

/* WIDE card mockup — top-right, rotated */
.mockup-wide {
  right: -30px;
  top: -24px;
  width: 52%;
  transform: rotate(-18deg);
  opacity: .75;
}
.card-wide:hover .mockup-wide {
  transform: rotate(-14deg) translateY(-6px);
  opacity: .95;
}

/* TALL card mockup — rotated, right side */
.mockup-tall {
  right: -20px;
  top: -30px;
  width: 65%;
  transform: rotate(-20deg);
  opacity: .7;
}
.card-tall:hover .mockup-tall {
  transform: rotate(-15deg) translateY(-8px);
  opacity: .95;
}

/* NORMAL card mockup */
.mockup-normal {
  right: -15px;
  top: -20px;
  width: 55%;
  transform: rotate(-16deg);
  opacity: .72;
}
.card-normal:hover .mockup-normal {
  transform: rotate(-11deg) translateY(-6px);
  opacity: .95;
}

/* SQUARE / LOGO CARD */
.card-square { background: #0f2a20; }

.logo-center {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity .3s ease;
  z-index: 5;
}
.card-square:hover .logo-center { opacity: .15; }

.logo-emoji { font-size: 4rem; }

.square-hover-info {
  position: absolute;
  inset: 0;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 6;
  opacity: 0;
  transition: opacity .3s ease;
}
.card-square:hover .square-hover-info { opacity: 1; }

/* TABLET */
@media (max-width: 860px) {
  .grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 200px; }
  .card-wide   { grid-column: 1 / 3; grid-row: auto; }
  .card-tall   { grid-column: 1 / 2; grid-row: auto; min-height: 380px; }
  .card-normal { grid-column: 2 / 3; grid-row: auto; }
  .card-square { grid-column: 1 / 3; grid-row: auto; }
}

/* MOBILE */
@media (max-width: 540px) {
  .grid { grid-template-columns: 1fr; grid-auto-rows: auto; }
  .card-wide, .card-tall, .card-normal, .card-square {
    grid-column: 1 / 2;
    grid-row: auto;
    min-height: 220px;
  }
  .card-tall { min-height: 320px; }
  .info { position: relative; background: none; padding: 1rem 1rem 1.2rem; }
  .mockup { position: absolute; }
}
</style>
