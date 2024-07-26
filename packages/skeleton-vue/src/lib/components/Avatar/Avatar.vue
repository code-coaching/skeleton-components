<script lang="ts" setup>
import * as avatar from '@zag-js/avatar';
import { normalizeProps, useMachine } from '@zag-js/vue';
import { v4 as uuid } from 'uuid';
import { computed } from 'vue';
import type { AvatarProps } from './types';

withDefaults(defineProps<AvatarProps>(), {
  src: '',
  srcset: '',
  name: '',
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
  // Fallback
  fallbackBase: 'w-full h-full flex justify-center items-center',
  fallbackClasses: '',
  // Snippets - This are named slots in Vue, found in the template
  // children
});

const id = uuid();
const [state, send] = useMachine(avatar.machine({ id }));
const api = computed(() => avatar.connect(state.value, send, normalizeProps));

function getInitials(name: string) {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('');
}
</script>

<template>
  <figure
    v-bind="api.getRootProps()"
    :class="`${base} ${background} ${size} ${font} ${border} ${rounded} ${shadow} ${classes}`"
    data-testId="avatar"
  >
    <img
      v-if="src"
      v-bind="api.getImageProps()"
      :class="`${imageBase} ${imageClasses}`"
      :src
      :srcset
      :alt="name"
      :style="{ filter: filter ? `url(${filter})` : '' }"
    />
    <template v-else-if="$slots.default">
      <slot></slot>
    </template>
    <!-- Fallback -->
    <template v-else>
      <span v-bind="api.getFallbackProps()" :class="`${fallbackBase} ${fallbackClasses}`">
        {{ getInitials(name) }}
      </span>
    </template>
  </figure>
</template>
