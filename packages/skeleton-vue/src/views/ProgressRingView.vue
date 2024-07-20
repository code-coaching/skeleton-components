<script lang="ts" setup>
import { ProgressRing } from '@/lib';
import { ThermometerSun } from 'lucide-vue-next';
import { ref } from 'vue';

const value = ref(60);
const max = ref(100);
</script>

<template>
  <div class="space-y-10">
    <header>
      <h1 class="h1">Progress Ring</h1>
    </header>
    <section class="grid grid-cols-2 gap-4">
      <label class="label">
        <span class="label-text">Value</span>
        <input class="input" type="number" v-model="value" />
      </label>
      <label class="label">
        <span class="label-text">Max</span>
        <input class="input" type="number" v-model="max" />
      </label>
    </section>
    <section class="space-y-4">
      <ProgressRing :value :max />
    </section>
    <section class="space-y-4">
      <h2 class="h2">Icons</h2>
      <ProgressRing :value :max meterStroke="stroke-error-500">
        <ThermometerSun :size="48" />
      </ProgressRing>
    </section>
    <section class="space-y-4">
      <h2 class="h2">Indeterminate</h2>
      <ProgressRing meterStroke="stroke-tertiary-600-400" trackStroke="stroke-tertiary-50-950" />
    </section>
  </div>
</template>
