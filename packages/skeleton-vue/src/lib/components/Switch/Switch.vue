<script lang="ts" setup>
import { computed, onMounted, reactive } from 'vue';
import type { SwitchProps } from './types';

const emits = defineEmits<{
  onCheckedChange: [value: boolean];
}>();

const props = withDefaults(defineProps<SwitchProps>(), {
  // id: '', // Required
  // name: '', // Required
  checked: false,
  disabled: false,
  compact: false,
  // Aria
  labelledby: undefined,
  describedby: undefined,
  // Root (Track)
  base: 'inline cursor-pointer transition duration-200',
  stateInactive: 'preset-filled-surface-200-800',
  stateActive: 'preset-filled-primary-500',
  stateDisabled: 'opacity-50 cursor-not-allowed',
  width: 'w-10',
  height: 'h-6',
  padding: 'p-0.5',
  rounded: 'rounded-full',
  hover: 'hover:brightness-90 dark:hover:brightness-110',
  classes: '',
  // Thumb
  thumbBase: 'right-0 aspect-square h-full flex justify-center items-center text-right',
  thumbInactive: 'preset-filled-surface-50-950',
  thumbActive: 'bg-surface-50 text-surface-contrast-50',
  thumbRounded: 'rounded-full',
  thumbTranslateX: 'translate-x-4',
  thumbTransition: 'transition',
  thumbEase: 'ease-in-out',
  thumbDuration: 'duration-200',
  thumbClasses: '',
  // Icons
  iconInactiveBase: 'pointer-events-none',
  iconActiveBase: 'pointer-events-none',

  // Events - This are Emits in Vue, found in the defineEmits in the script
  // onCheckedChange: () => {}

  // Snippets - This are named slots in Vue, found in the template
  // inactiveChild,
  // activeChild
});

const state = reactive({
  base: props.base,
  height: props.height,
  thumbInactive: props.thumbInactive,
  thumbActive: props.thumbActive,
  thumbTranslateX: props.thumbTranslateX,
  padding: props.padding,
  checked: props.checked,
});

onMounted(() => {
  if (props.compact) setCompactMode();
});

function setCompactMode() {
  Object.assign(state, {
    base: props.thumbBase,
    height: '',
    // Thumb inherits track styles
    thumbInactive: props.stateInactive,
    thumbActive: props.stateActive,
    thumbTranslateX: '',
    padding: '',
  });
}

function toggle() {
  if (props.disabled) return;
  console.log('here: ', state.checked);
  state.checked = !state.checked;
  console.log('here: ', state.checked);
  emits('onCheckedChange', state.checked);
}

const rxTrackState = computed(() => (state.checked ? props.stateActive : props.stateInactive));
const rxThumbState = computed(() =>
  state.checked ? `${state.thumbActive} ${state.thumbTranslateX}` : state.thumbInactive,
);
const rxDisabled = computed(() => (props.disabled ? props.stateDisabled : ''));
</script>

<template>
  <!-- Track -->
  <button
    type="button"
    :class="`${state.base} ${rxTrackState} ${width} ${state.height} ${state.padding} ${rounded} ${hover} ${rxDisabled} ${classes}`"
    role="switch"
    :aria-checked="state.checked"
    :aria-labelledby="labelledby"
    :aria-describedby="describedby"
    tabindex="0"
    @click="toggle"
    data-testid="switch"
  >
    <!-- Input (hidden) -->
    <input
      type="checkbox"
      :id="id"
      :name="name"
      :checked="state.checked"
      class="hidden"
      :disabled="disabled"
    />
    <!-- Thumb -->
    <div
      :class="`${thumbBase} ${rxThumbState} ${thumbRounded} ${thumbTransition} ${thumbEase} ${thumbDuration} ${thumbClasses}`"
    >
      <span v-if="!state.checked && $slots.inactiveChild" :class="iconInactiveBase">
        <slot name="inactiveChild"></slot>
      </span>
      <span v-if="state.checked && $slots.activeChild" :class="iconActiveBase">
        <slot name="activeChild"></slot>
      </span>
    </div>
  </button>
</template>
