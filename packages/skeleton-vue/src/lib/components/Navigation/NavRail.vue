<script lang="ts" setup>
import { computed, reactive } from 'vue';
import { setNavigationContext } from './context';
import type { NavRailProps } from './types';

const emits = defineEmits<{
  onChange: [value: string];
  'update:value': [value: string];
}>();

const props = withDefaults(defineProps<NavRailProps>(), {
  value: '',
  expanded: false,
  // Root
  base: 'h-full flex flex-col',
  background: 'preset-filled-surface-100-900',
  padding: 'p-1',
  width: 'w-24',
  widthExpanded: 'w-64',
  height: 'h-full',
  classes: '',
  // Header
  headerBase: 'flex',
  headerFlexDirection: 'flex-col',
  headerJustify: 'justify-center',
  headerItems: 'items-center',
  headerGap: 'gap-1',
  headerClasses: '',
  // Tiles
  tilesBase: 'flex-1 flex',
  tilesFlexDirection: 'flex-col',
  tilesJustify: 'justify-center',
  tilesItems: 'items-center',
  tilesGap: 'gap-1',
  tilesClasses: '',
  // Footer
  footerBase: 'flex',
  footerFlexDirection: 'flex-col',
  footerJustify: 'justify-center',
  footerItems: 'items-center',
  footerGap: 'gap-1',
  footerClasses: '',
  // Events - This are Emits in Vue, found in the defineEmits in the script
  // onchange,
  // Snippets - This are named slots in Vue, found in the template
  // header,
  // tiles,
  // footer,
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
  parent: 'rail',
  get value() {
    return props.value;
  },
  get expanded() {
    return props.expanded;
  },
  onSelectionHandler,
});

// Reactive
const rxWidth = computed(() => (props.expanded ? props.widthExpanded : props.width));
</script>

<template>
  <aside
    :class="`${base} ${background} ${height} ${padding} ${rxWidth} ${classes}`"
    data-testid="nav-rail"
  >
    <header
      v-if="$slots.header"
      :class="`${headerBase} ${headerFlexDirection} ${headerJustify} ${headerItems} ${headerGap} ${headerClasses}`"
    >
      <slot name="header" />
    </header>
    <!-- Tiles -->
    <nav
      v-if="$slots.tiles"
      :class="`${tilesBase} ${tilesFlexDirection} ${tilesJustify} ${tilesItems} ${tilesGap} ${tilesClasses}`"
    >
      <slot name="tiles" />
    </nav>
    <!-- Footer -->
    <footer
      v-if="$slots.footer"
      :class="`${footerBase} ${footerFlexDirection} ${footerJustify} ${footerItems} ${footerGap} ${footerClasses}`"
    >
      <slot name="footer" />
    </footer>
  </aside>
</template>
