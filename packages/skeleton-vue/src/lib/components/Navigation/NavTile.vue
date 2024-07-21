<script lang="ts" setup>
import { computed } from 'vue';
import { getNavigationContext } from './context';
import type { NavTileProps } from './types';

const emits = defineEmits<{
  onClick: [value: string];
}>();

const props = withDefaults(defineProps<NavTileProps>(), {
  id: undefined,
  href: undefined,
  target: undefined,
  label: undefined,
  labelExpanded: undefined,
  title: undefined,
  selected: false,
  // Root
  base: 'flex items-center',
  width: 'w-full',
  aspect: 'aspect-square',
  background: '',
  hover: 'hover:preset-filled-surface-50-950',
  active: 'preset-filled-primary-500',
  padding: 'p-2',
  gap: 'gap-1',
  rounded: 'rounded-container',
  classes: 'flex-col justify-center',
  // Expanded
  expandedPadding: 'py-3 px-4',
  expandedGap: 'gap-4',
  expandedClasses: '',
  // Label (base)
  labelBase: 'type-scale-1',
  labelClasses: '',
  // Label (expanded)
  labelExpandedBase: '',
  labelExpandedClasses: '',
  // Events
  // onclick: undefined,
  // Snippets
  // children
});

// Context
const ctx = getNavigationContext();

// Reactive
const element = computed(() => (props.href ? 'a' : 'button'));
const type = computed(() => (props.href ? undefined : 'button'));
const role = computed(() => (props.href ? undefined : 'button'));
const rxSize = computed(() => (ctx.parent === 'bar' ? `h-full` : `${props.aspect}`));
const classesCollapsed = computed(() => `${rxSize.value} ${props.padding} ${props.gap} ${props.classes}`);
const classesExtended = computed(
  () => `${props.expandedPadding} ${props.expandedGap} ${props.expandedClasses}`,
);
const rxMode = computed(() => {
  return ctx.expanded ? classesExtended.value : classesCollapsed.value;
});
const rxBackground = computed(() => {
  return props.selected || ctx.value === props.id
    ? props.active
    : `${props.background} ${props.hover}`;
});

function onClickHandler() {
  if (!props.id) return;

  emits('onClick', props.id);
  if (ctx.onSelectionHandler && props.id) ctx.onSelectionHandler(props.id);
}
</script>

<template>
  <component
    :is="element"
    :class="[base, width, rounded, rxBackground, rxMode]"
    :href
    :target
    :type
    :title
    :role
    @click="onClickHandler"
    tabindex="0"
    data-testid="nav-tile"
  >
    <!-- Icon -->
    <div v-if="$slots.default">
      <slot></slot>
    </div>
    <!-- Label (base) -->
    <div v-if="label && !ctx.expanded" :class="[labelBase, labelClasses]">{{ label }}</div>
    <!-- Label (expanded) -->
    <div v-if="labelExpanded && ctx.expanded" :class="[labelExpandedBase, labelExpandedClasses]">
      {{ labelExpanded }}
    </div>
  </component>
</template>
