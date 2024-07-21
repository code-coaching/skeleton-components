<script lang="ts" setup>
import { NavBar, NavRail, NavTile } from '@/lib';
import { Box, Settings, Skull } from 'lucide-vue-next';
import { ref } from 'vue';

const navBarModel = ref('0');
const expanded = ref(false);
const toggleExpanded = () => (expanded.value = !expanded.value);

function onChangeHandler(value: string) {
  navBarModel.value = value;
}
</script>

<template>
  <div class="space-y-10">
    <header>
      <h1 class="h1">Navigation</h1>
    </header>

    <section class="space-y-4">
      <h2 class="h2">Bar</h2>
      <pre class="pre">value: {{ navBarModel }}</pre>
      <div class="w-[320px]">
        <NavBar v-model:value="navBarModel">
          <NavTile id="0" label="Tile 1" labelExpanded="Expanded Tile 1">
            <Box />
          </NavTile>
          <NavTile id="1" label="Tile 2" labelExpanded="Expanded Tile 2">
            <Box />
          </NavTile>
          <NavTile id="2" label="Tile 3" labelExpanded="Expanded Tile 3">
            <Box />
          </NavTile>
          <NavTile id="3" label="Tile 4" labelExpanded="Expanded Tile 4">
            <Box />
          </NavTile>
        </NavBar>
      </div>
      <NavBar :value="navBarModel" @on-change="onChangeHandler">
        <NavTile id="0" label="Tile 1" labelExpanded="Expanded Tile 1">
          <Box />
        </NavTile>
        <NavTile id="1" label="Tile 2" labelExpanded="Expanded Tile 2">
          <Box />
        </NavTile>
        <NavTile id="2" label="Tile 3" labelExpanded="Expanded Tile 3">
          <Box />
        </NavTile>
        <NavTile id="3" label="Tile 4" labelExpanded="Expanded Tile 4">
          <Box />
        </NavTile>
        <NavTile id="4" label="Tile 5" labelExpanded="Expanded Tile 5">
          <Box />
        </NavTile>
      </NavBar>
    </section>

    <section class="space-y-4">
      <header class="flex justify-between">
        <h2 class="h2">Rail</h2>
        <button class="btn preset-filled" @click="toggleExpanded">Toggle Expanded</button>
      </header>
      <div class="flex h-[960px] justify-center gap-10">
        <!-- Expanded -->
        <NavRail :expanded classes="transition-all">
          <template #header>
            <a
              href="/"
              class="flex flex-col items-center justify-center w-full gap-2 aspect-square"
            >
              <Skull :size="expanded ? 48 : 24" />
              <span :class="`font-bold ${expanded ? 'type-scale-5' : 'type-scale-1'}`">
                Skeleton
              </span>
            </a>
          </template>
          <template #tiles>
            <NavTile id="0" label="Tile 1" labelExpanded="Expanded Tile 1" href="/page/1" selected>
              <Box />
            </NavTile>
            <NavTile id="1" label="Tile 2" labelExpanded="Expanded Tile 2" href="/page/2">
              <Box />
            </NavTile>
            <NavTile id="2" label="Tile 3" labelExpanded="Expanded Tile 3" href="/page/3">
              <Box />
            </NavTile>
            <NavTile id="3" label="Tile 4" labelExpanded="Expanded Tile 4" href="/page/4">
              <Box />
            </NavTile>
            <NavTile id="4" label="Tile 5" labelExpanded="Expanded Tile 5" href="/page/5">
              <Box />
            </NavTile>
          </template>
          <template #footer>
            <NavTile labelExpanded="Settings" href="/settings" title="Settings">
              <Settings />
            </NavTile>
          </template>
        </NavRail>
      </div>
    </section>
  </div>
</template>
