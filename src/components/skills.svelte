<script lang="ts">
  import Stars from "./skills/stars.svelte";
  import js from "$lib/assets/js.png";
  import python from "$lib/assets/python.png";
  import linux from "$lib/assets/linux.png";
  import teams from "$lib/assets/team.png";
  import project from "$lib/assets/project-management.png";
  import teaching from "$lib/assets/lecture.png";
  import interpersonal from "$lib/assets/interpersonal.png";
  import thinking from "$lib/assets/skill.png";
</script>

<!-- Icons on this site have been designed using images from Flaticon.com -->
<div
  class="m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center justify-items-center gap-5 p-5 md:max-w-4xl lg:min-w-max"
>
  <div class="card card-side w-full bg-base-300">
    <figure><img src={js} alt="Javascript logo" /></figure>
    <div class="card-body">
      <h2 class="card-title">JavaScript + TypeScript</h2>
      <Stars count={5} />
    </div>
  </div>
  <div class="card card-side w-full bg-base-300">
    <figure><img src={python} alt="Python logo" /></figure>
    <div class="card-body">
      <h2 class="card-title">Python</h2>
      <Stars count={4} half={true} />
    </div>
  </div>
  <div class="card card-side w-full bg-base-300">
    <figure><img src={linux} alt="Tux logo" /></figure>
    <div class="card-body">
      <h2 class="card-title">Linux Administration</h2>
      <Stars count={4} half={true} />
    </div>
  </div>
  <div class="card card-side w-full bg-base-300">
    <figure><img src={teams} alt="A team thinking" /></figure>
    <div class="card-body">
      <h2 class="card-title">Working in Teams</h2>
      <Stars count={4} />
    </div>
  </div>
  <div class="card card-side w-full bg-base-300">
    <figure><img src={project} alt="A lightbulb with gears around it" /></figure>
    <div class="card-body">
      <h2 class="card-title">Independant Projects</h2>
      <Stars count={4} />
    </div>
  </div>
  <div class="card card-side w-full bg-base-300">
    <figure><img src={teaching} alt="A person giving a lecture" /></figure>
    <div class="card-body">
      <h2 class="card-title">Teaching Others</h2>
      <Stars count={4} />
    </div>
  </div>
  <div class="card card-side w-full bg-base-300">
    <figure><img src={interpersonal} alt="People communicating" /></figure>
    <div class="card-body">
      <h2 class="card-title">Interpersonal Skills</h2>
      <Stars count={4} />
    </div>
  </div>
  <div class="card card-side w-full bg-base-300">
    <figure><img src={thinking} alt="A brain and lightbulb together" /></figure>
    <div class="card-body">
      <h2 class="card-title">Critical Thinking</h2>
      <Stars count={4} />
    </div>
  </div>
</div>
