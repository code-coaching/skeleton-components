<script lang="ts" setup>
import type { AppBarProps } from './types';

withDefaults(defineProps<AppBarProps>(), {
  // Root
  base: 'w-full flex flex-col',
  background: 'bg-surface-100-900',
  spaceY: 'space-y-4',
  border: '',
  padding: 'p-4',
  shadow: '',
  classes: '',
  // Toolbar
  toolbarBase: 'flex justify-between',
  toolbarGridCols: 'grid-cols-[auto_1fr_auto]',
  toolbarGap: 'gap-4',
  toolbarClasses: '',
  // Lead
  leadBase: 'flex',
  leadSpaceX: 'space-x-4 rtl:space-x-reverse',
  leadPadding: '',
  leadClasses: '',
  // Center
  centerBase: 'grow',
  centerAlign: 'text-center',
  centerPadding: '',
  centerClasses: '',
  // Trail
  trailBase: 'flex',
  trailSpaceX: 'space-x-4 rtl:space-x-reverse',
  trailPadding: '',
  trailClasses: '',
  // Headline
  headlineBase: 'w-full',
  headlineClasses: '',
  // Snippets - This are named slots in Vue, found in the template
  // children,
  // lead,
  // trail,
  // headline
});
</script>

<template>
  <header
    :class="`${base} ${background} ${spaceY} ${border} ${padding} ${shadow} ${classes}`"
    role="toolbar"
    data-testid="app-bar"
  >
    <section :class="`${toolbarBase} ${toolbarGridCols} ${toolbarGap} ${toolbarClasses}`">
      <div v-if="$slots.lead" :class="`${leadBase} ${leadSpaceX} ${leadPadding} ${leadClasses}`">
        <slot name="lead"></slot>
      </div>

      <div
        v-if="$slots.default"
        :class="`${centerBase} ${centerAlign} ${centerPadding} ${centerClasses}`"
      >
        <slot></slot>
      </div>

      <div
        v-if="$slots.trail"
        :class="`${trailBase} ${trailSpaceX} ${trailPadding} ${trailClasses}`"
      >
        <slot name="trail"></slot>
      </div>
    </section>

    <section v-if="$slots.headline" :class="`${headlineBase} ${headlineClasses}`">
      <slot name="headline"></slot>
    </section>
  </header>
</template>
