<script lang="ts" context="module">
  import { SDK } from '$lib/gql'
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async () => ({
    props: {
      launchpads: await SDK.LaunchpadsMany(),
    },
  })
</script>

<script lang="ts">
  import type { GQLLaunchpadsManyQuery } from '$lib/gql/gen'

  export let launchpads: GQLLaunchpadsManyQuery

  let needle: string = '2020'
  $: launches = SDK.LaunchByYear({ year: needle })
</script>

<main>
  <h1>SpaceX Land</h1>

  <h2>Launchpads</h2>
  {#each launchpads.launchpads as launchpad (launchpad.id)}
    <div class="mb3">
      <b>{launchpad.name}</b>
      <br />
      {launchpad.location.name}
      <br /> <i>Launches:</i>
      {launchpad.successful_launches}
    </div>
  {/each}

  <h2>Launches</h2>
  <input bind:value={needle} />
  {#await launches}
    <br />
    Loading...
  {:then launches}
    {#each launches.launches as launch}
      <div class="mb3">
        <b>{launch.mission_name}</b>
        <br />
        <i>Rocket:</i>
        {launch.rocket.rocket_name}
      </div>
    {/each}
  {/await}
</main>

<style>
  main {
    padding: 1em;
    max-width: 50rem;
    margin: 0 auto;
  }
</style>
