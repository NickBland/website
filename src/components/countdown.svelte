<script lang="ts">
  import { onMount } from "svelte";

  let w: number = 0; // Width of the screen, using the svelte binding

  const GRADUATION = new Date(1753797600000).valueOf();
  const FORMATTED = new Date(1753797600000).toDateString();
  let interval: ReturnType<typeof setInterval>;

  let timeTo = Math.abs(GRADUATION - Date.now().valueOf()) / 1000;

  // Calculate time remaining from milliseconds to graduation (30 Jul, 2025)
  $: years = Math.floor(timeTo / 31556926);
  $: months = Math.floor(timeTo / 2629743) % 12;
  $: days = Math.floor(timeTo / 86400) % 30;
  $: hours = Math.floor(timeTo / 3600) % 24;
  $: minutes = Math.floor(timeTo / 60) % 60;
  $: seconds = Math.floor(timeTo % 60);

  // Update the timeTo variable every 1000 milliseconds
  // Don't go past 0 though! Stop the updates afterwards
  function update() {
    timeTo = (GRADUATION - Date.now().valueOf()) / 1000;
    if (timeTo <= 0) {
      clearInterval(interval);
      timeTo = 0;
    }
  }

  onMount(() => {
    // Create a timer
    interval = setInterval(update, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<svelte:window bind:innerWidth={w} />

<!-- Display a different type of countdown for smaller screens, as larger one won't fit -->
{#if w >= 768}
  <h3 class="p-5 text-4xl text-center">Time to Graduation</h3>
  <div class="grid grid-flow-col gap-5 pb-5 text-center auto-cols-max justify-center">
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl place-self-center">
        <span style="--value:{years};"></span>
      </span>
      years
    </div>
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl place-self-center">
        <span style="--value:{months};"></span>
      </span>
      months
    </div>
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl place-self-center">
        <span style="--value:{days};"></span>
      </span>
      days
    </div>
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl place-self-center">
        <span style="--value:{hours};"></span>
      </span>
      hours
    </div>
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl place-self-center">
        <span style="--value:{minutes};"></span>
      </span>
      minutes
    </div>
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl place-self-center">
        <span style="--value:{seconds};"></span>
      </span>
      seconds
    </div>
  </div>
{:else}
  <h3 class="p-5 text-4xl text-center">Time to Graduation<br /> {FORMATTED}</h3>
  <span class="flex countdown pb-5 font-mono text-4xl justify-center">
    <span style="--value:{years};"></span>y
    <span style="--value:{months};"></span>m
    <span style="--value:{days};"></span>d-
    <span style="--value:{hours};"></span>:
    <span style="--value:{minutes};"></span>:
    <span style="--value:{seconds};"></span>
  </span>
{/if}
