<script lang="ts" setup>
import { computed, watch } from 'vue';
import type { ProgressProps } from './types';

const props = withDefaults(defineProps<ProgressProps>(), {
  value: undefined,
  max: 100,
  labelledBy: '',
  // Root
  base: 'overflow-x-hidden',
  bg: 'bg-surface-200-800',
  width: 'w-full',
  height: 'h-2',
  rounded: 'rounded',
  classes: '',
  // Meter
  meterBase: 'h-full',
  meterBg: 'bg-surface-950-50',
  meterRounded: 'rounded',
  meterTransition: 'transition-[width]',
  meterAnimate: 'animate-indeterminate',
  meterClasses: '',
});

watch(
  () => props.max,
  () => {
    if (props.max < 0) {
      console.warn('The max prop should be greater than or equal to 0');
    }
  },
);

const indeterminate = computed(() => props.value === undefined);
const fillPercentage = computed(
  () => `${indeterminate.value ? 50 : ((props.value! - 0) / (props.max - 0)) * 100}%`,
);
const rxIndeterminate = computed(() => (indeterminate.value ? props.meterAnimate : ''));
</script>

<template>
  <div
    role="progressbar"
    :aria-labelledby="labelledBy"
    :aria-valuenow="value"
    aria-valuemin="0"
    :aria-valuemax="max"
    :class="[base, bg, width, height, rounded, classes]"
  >
    <div
      :class="[meterBase, meterBg, meterRounded, meterTransition, rxIndeterminate, meterClasses]"
      :style="{ width: fillPercentage }"
    ></div>
  </div>
</template>
