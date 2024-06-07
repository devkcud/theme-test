<script lang="ts">
  import Icon from '@iconify/svelte';
  import { isMode, setCookieTheme } from '$lib/stores/theme';

  let isLight: boolean = isMode('light');

  let checkboxActive: boolean = false;

  function swapTheme() {
    if (!isLight) {
      setCookieTheme(checkboxActive ? 'light' : 'dark');
    } else {
      setCookieTheme(checkboxActive ? 'dark' : 'light');
    }
  }
</script>

<label class="cursor-pointer m-4 text-primary swap swap-rotate">
  <input
    bind:checked={checkboxActive}
    type="checkbox"
    class="theme-controller"
    value={isLight ? 'dark' : 'light'}
    on:change={swapTheme}
  />

  {#if isLight}
    <Icon icon="ph:moon" class="swap-off size-10" />
    <Icon icon="ph:sun" class="swap-on size-10" />
  {:else}
    <Icon icon="ph:moon" class="swap-on size-10" />
    <Icon icon="ph:sun" class="swap-off size-10" />
  {/if}
</label>
