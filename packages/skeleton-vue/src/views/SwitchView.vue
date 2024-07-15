<script lang="ts" setup>
import { Switch } from '@/lib';
import {
  Check as IconCheck,
  Frown as IconFrown,
  Moon as IconMoon,
  Smile as IconSmile,
  Sun as IconSun,
  X as IconX,
} from 'lucide-vue-next';
import { ref } from 'vue';

const disturb = ref(false);
const notifications = ref(true);
const disabled = ref(false);
const icons = ref(true);
const lightswitch = ref(false);
const compact = ref(false);
</script>

<template>
  <div class="space-y-10">
    <header>
      <h1 class="h1">Switch</h1>
    </header>
    <pre class="pre">{{
      JSON.stringify({ disturb, notifications, disabled, icons, lightswitch, compact }, null, 2)
    }}</pre>
    <section class="space-y-4">
      <label for="disturb" class="flex items-center justify-between gap-4 label">
        <p>Defaults to inactive state.</p>
        <Switch
          id="disturb"
          name="disturb"
          :checked="disturb"
          @on-checked-change="disturb = $event"
        />
      </label>
      <hr class="hr" />
      <label for="notifications" class="flex items-center justify-between gap-4 label">
        <p>Defaults to active state.</p>
        <Switch
          id="notifications"
          name="notifications"
          :checked="notifications"
          @onCheckedChange="notifications = $event"
        />
      </label>
      <hr class="hr" />
      <label for="disabled" class="flex items-center justify-between gap-4 label">
        <p>Uses the disabled state.</p>
        <Switch
          id="disabled"
          name="disabled"
          :checked="disabled"
          @on-checked-change="disabled = $event"
          disabled
        />
      </label>
      <hr class="hr" />
      <label for="icons" class="flex items-center justify-between gap-4 label">
        <p>Custom Icons</p>
        <Switch
          id="icons"
          name="icons"
          stateActive="bg-secondary-500"
          :checked="icons"
          @on-checked-change="icons = $event"
        >
          <template #inactiveChild>
            <IconX :size="14" />
          </template>
          <template #activeChild>
            <IconCheck color="blue" :size="14" />
          </template>
        </Switch>
      </label>
      <hr class="hr" />
      <label for="mode" class="flex items-center justify-between gap-4 label">
        <p>Lightswitch</p>
        <Switch
          id="mode"
          name="mode"
          stateActive="bg-surface-200"
          :checked="lightswitch"
          @on-checked-change="lightswitch = $event"
        >
          <template #inactiveChild>
            <IconMoon :size="14" />
          </template>
          <template #activeChild>
            <IconSun :size="14" />
          </template>
        </Switch>
      </label>
      <hr class="hr" />
      <label for="compact" class="flex items-center justify-between gap-4 label">
        <p>Compact</p>
        <Switch
          id="compact"
          name="compact"
          :checked="compact"
          @on-checked-change="compact = $event"
          width="w-9"
          compact
        >
          <template #inactiveChild>
            <IconFrown :size="18" />
          </template>
          <template #activeChild>
            <IconSmile :size="18" />
          </template>
        </Switch>
      </label>
    </section>
  </div>
</template>
