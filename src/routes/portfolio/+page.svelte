<script>
  import Divider from "../../components/divider.svelte";
  import Countdown from "../../components/countdown.svelte";
</script>

<div
  class="hero height-minus-nav bg-gradient-to-br from-primary from-10% to-accent to-80%"
>
  <div class="hero-overlay bg-opacity-30"></div>
  <div class="hero-content text-left text-accent-content flex-col lg:flex-row">
    <div class="skeleton w-48 h-64 shadow-2xl max-w-sm"></div>
    <div>
      <h1 class="mb-6 text-6xl font-bold">
        Hello,<br /> my name is Nick
      </h1>
      <p class="py-5 text-lg max-w-sm">
        I am an IT Student at Griffith University with a passion for developing
        neat things.
      </p>
    </div>
    <div class="hidden lg:flex divider divider-horizontal divider-start">
      Scoll
    </div>
  </div>
</div>

<h1 class="my-6 text-6xl text-center text-base-content font-bold">About Me</h1>
<p class="p-5 mx-auto text-xl max-w-3xl">
  Since 2014, I've had an interest in programming and making things. I've made
  this portfolio as a place for me to collate and show off some of the work that
  I've done.
  <br /><br />
  At the moment, I've returned back to Uni to finish my degree after achieving a
  point in my career that I am happy with. With the experience I've gained, and after
  finishing my studies, my plan is to work in the cybersecurity field.
</p>

<Divider />

<h1 class="my-6 text-6xl text-center text-base-content font-bold">Education</h1>
<Countdown />
