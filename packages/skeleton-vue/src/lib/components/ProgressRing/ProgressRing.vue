<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import type { ProgressRingProps } from './types';

const props = withDefaults(defineProps<ProgressRingProps>(), {
  value: undefined,
  max: 100,
  strokeWidth: 50, // px
  strokeLinecap: 'round',
  labelledBy: '',
  // Base (figure)
  base: 'relative',
  size: 'size-32',
  classes: '',
  // Slot
  childrenBase: 'absolute top-0 left-0 z-[1] flex justify-center items-center',
  childrenClasses: '',
  // SVG
  svgBase: 'absolute top-0 left-0 w-full h-full rounded-full',
  svgClasses: '',
  // Track
  trackBase: 'fill-none',
  trackStroke: 'stroke-surface-200-800',
  trackClasses: '',
  // Meter
  meterBase: 'fill-none',
  meterStroke: 'stroke-primary-500',
  meterTransition: 'transition-[stroke-dashoffset]',
  meterDuration: 'duration-100',
  meterClasses: '',
  // Label
  label: undefined,
  labelBase: '',
  labelFill: 'fill-surface-950-50',
  labelFontSize: 96, // px
  labelFontWeight: 'bold',
  labelClasses: '',
  // Snippets - This are named slots in Vue, found in the template
  // children
});

const baseSize = 512; // px
const radius = computed(() => baseSize / 2 - props.strokeWidth / 2);
const circumference = computed(() => radius.value * 2 * Math.PI);
const dashoffset = ref(calcDashOffset());

watch(
  () => props.value,
  () => {
    dashoffset.value = calcDashOffset();
  },
);

function calcDashOffset() {
  const v = props.value !== undefined ? props.value : 25;
  const percent = (100 * v) / props.max;
  return circumference.value - (percent / 100) * circumference.value;
}
</script>

<template>
  <figure
    :class="`${base} ${size} ${classes}`"
    role="meter"
    :aria-labelledby="labelledBy"
    :aria-valuenow="value || 0"
    :aria-valuemin="0"
    :aria-valuemax="max"
    :aria-valuetext="`${value} / ${max}`"
    data-testid="progress-ring"
  >
    <!-- Slot -->
    <div v-if="$slots.default" :class="`${childrenBase} ${size} ${childrenClasses}`">
      <slot></slot>
    </div>
    <!-- SVG -->
    <svg
      :viewBox="`0 0 ${baseSize} ${baseSize}`"
      :class="[svgBase, svgClasses, { 'animate-spin': value === undefined }]"
    >
      <!-- Track -->
      <circle
        :class="`${trackBase} ${trackStroke} ${trackClasses}`"
        :stroke-width="strokeWidth"
        :r="radius"
        cx="50%"
        cy="50%"
      />
      <!-- Meter -->
      <circle
        :class="`${meterBase} ${meterStroke} ${meterTransition} ${meterDuration} ${meterClasses}`"
        :r="radius"
        cx="50%"
        cy="50%"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLinecap"
        :stroke-dasharray="`${circumference} ${circumference}`"
        :stroke-dashoffset="dashoffset"
        :transform="`rotate(-90 ${baseSize / 2} ${baseSize / 2})`"
      />
      <!-- Text -->
      <text
        v-if="value !== undefined && !$slots.default"
        :class="`${labelBase} ${labelFill} ${labelClasses}`"
        x="50%"
        y="50%"
        :font-size="labelFontSize"
        :font-weight="labelFontWeight"
        text-anchor="middle"
        dominant-baseline="central"
      >
        {{ label ?? `${value}%` }}
      </text>
    </svg>
  </figure>
</template>
