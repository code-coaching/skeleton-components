<script lang="ts" setup>
import { reactive } from 'vue';
import { setNavigationContext } from './context';
import type { NavBarProps } from './types';

const emits = defineEmits<{
  onChange: [value: string];
  'update:value': [value: string];
}>();

const props = withDefaults(defineProps<NavBarProps>(), {
  value: '',
  // Root
  base: 'h-full flex flex-col',
  background: 'preset-filled-surface-100-900',
  width: 'min-w-[320px] w-full',
  height: 'h-20',
  padding: 'p-1',
  classes: '',
  // Tiles
  tilesBase: 'flex-1 flex',
  tilesFlexDirection: '',
  tilesJustify: 'justify-center',
  tilesItems: 'items-center',
  tilesGap: 'gap-1',
  tilesClasses: '',
  // Events - This are Emits in Vue, found in the defineEmits in the script
  // onchange
  // Snippets - This are named slots in Vue, found in the template
  // children
});

const state = reactive({
  value: props.value,
});

function onSelectionHandler(id: string) {
  state.value = id;
  emits('onChange', id);
  emits('update:value', id);
}

// Context
setNavigationContext({
  parent: 'bar',
  get value() {
    return props.value;
  },
  expanded: false,
  onSelectionHandler,
});
</script>

<template>
  <aside
    :class="`${base} ${background} ${width} ${height} ${padding} ${classes}`"
    data-testid="nav-bar"
  >
    <nav
      v-if="$slots.default"
      :class="`${tilesBase} ${tilesFlexDirection} ${tilesJustify} ${tilesItems} ${tilesGap} ${tilesClasses}`"
    >
      <slot></slot>
    </nav>
  </aside>
</template>
