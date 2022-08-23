<script lang="ts">
   import Title from "../components/title.svelte";
   export let data;
   const items = data?.items
</script>

<main>
   {#each items as item}
      <Title {item}></Title>
   {/each}
</main>
