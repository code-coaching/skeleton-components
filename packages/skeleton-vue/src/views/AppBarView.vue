<script lang="ts" setup>
import { AppBar } from '@/lib';
import { Skull } from 'lucide-vue-next';
</script>

<template>
  <div class="space-y-10">
    <h1 class="h1">App Bar</h1>

    <section class="space-y-4">
      <AppBar>
        <template #lead>
          <span><Skull :size="22" /></span>
          <span>Skeleton</span>
        </template>
        Skeleton
        <template #trail>
          <span>Skeleton</span>
          <span><Skull :size="22" /></span>
        </template>
      </AppBar>
    </section>

    <section class="space-y-4">
      <h3 class="h3">Headline</h3>
      <AppBar headlineBase="text-center">
        <template #lead>
          <span><Skull :size="22" /></span>
          <span>Skeleton</span>
        </template>
        <template #trail>
          <span>Skeleton</span>
          <span><Skull :size="22" /></span>
        </template>
        <template #headline>
          <h1 class="h1">Headline</h1>
        </template>
      </AppBar>
    </section>

    <section class="space-y-4">
      <h3 class="h3">Sticky</h3>
      <div class="flex flex-col space-y-4 overflow-y-auto max-h-64">
        <AppBar classes="sticky top-0">
          <template #lead>
            <span><Skull :size="22" /></span>
            <span>Skeleton</span>
          </template>
          Skeleton
          <template #trail>
            <span>Skeleton</span>
            <span><Skull :size="22" /></span>
          </template>
        </AppBar>
        <div>First line of the sticky AppBar</div>
        <div v-for="i in Array(10)">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut
          reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos!
          Quibusdam asperiores aliquam reiciendis eligendi!
        </div>
      </div>
    </section>

    <section class="space-y-8">
      <h3 class="h3">A11Y Keyboard</h3>
      <button type="button" class="btn preset-filled">Button before the AppBar</button>
      <AppBar>
        <template #lead>
          <button type="button" class="btn-icon preset-filled-primary-500">
            <Skull :size="22" />
          </button>
          <button type="button" class="btn preset-filled">Skeleton</button>
        </template>
        Skeleton
        <template #trail>
          <button type="button" class="btn preset-filled">Skeleton</button>
          <button type="button" class="btn-icon preset-filled-primary-500">
            <Skull :size="22" />
          </button>
        </template>
      </AppBar>
      <button type="button" class="btn preset-filled">Button after the AppBar</button>
    </section>

    <section class="space-y-8">
      <h3 class="h3">RTL</h3>
      <div dir="rtl">
        <AppBar>
          <template #lead>
            <button type="button" class="btn-icon preset-filled-primary-500">
              <Skull :size="22" />
            </button>
            <button type="button" class="btn preset-filled">lead</button>
          </template>
          Skeleton
          <template #trail>
            <button type="button" class="btn preset-filled">trail</button>
            <button type="button" class="btn-icon preset-filled-primary-500">
              <Skull :size="22" />
            </button>
          </template>
          <template #headline>
            <h1 class="h1">مرحبا بك</h1>
          </template>
        </AppBar>
      </div>
    </section>
  </div>
</template>
