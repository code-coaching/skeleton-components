<script lang="ts" setup>
import type { AvatarProps } from './types';

withDefaults(defineProps<AvatarProps>(), {
  src: '',
  alt: '',
  filter: '',
  // Root
  base: 'overflow-hidden isolate',
  background: 'bg-surface-400-600',
  size: 'size-16',
  font: '',
  border: '',
  rounded: 'rounded-full',
  shadow: '',
  classes: '',
  // Image
  imageBase: 'w-full object-cover',
  imageClasses: '',
  // Snippets - This are named slots in Vue, found in the template
  // children
});
</script>

<template>
  <figure
    :class="`${base} ${background} ${size} ${font} ${border} ${rounded} ${shadow} ${classes}`"
    data-testId="avatar"
  >
    <img
      v-if="src"
      :class="`${imageBase} ${imageClasses}`"
      :src
      :alt
      :style="{ filter: filter ? `url(${filter})` : '' }"
    />
    <template v-else-if="$slots.default">
      <slot></slot>
    </template>
  </figure>
</template>
