<script lang="ts">
  import ThemeToggler from '$lib/components/ThemeToggler.svelte';
  import Icon from '@iconify/svelte';
</script>

<section class="animate-pulse flex items-center gap-2">
  <Icon icon="mingcute:question-fill" class="text-primary" />

  <p class="text-primary">
    Use <b>icon below</b> to toggle theme, then <b>reload the page</b>.
  </p>
</section>

<ThemeToggler />
