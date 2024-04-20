<script>
  import Divider from "../../components/divider.svelte";
  import Countdown from "../../components/countdown.svelte";
  import TextContent from "../../components/textContent.svelte";
  import Skills from "../../components/skills.svelte";
  import Timeline from "../../components/timeline.svelte";
</script>

<div
  class="hero height-minus-nav bg-gradient-to-br from-primary from-10% to-accent to-80%"
>
  <div class="hero-overlay bg-opacity-30"></div>
  <div class="hero-content text-left text-accent-content flex-col lg:flex-row">
    <div class="skeleton w-48 h-64 shadow-2xl max-w-sm"></div>
    <div>
      <h1 class="mb-6 text-6xl font-bold text-wrap text-center text-primary-content">
        Hello, my name is Nick
      </h1>
      <p class="py-5 text-lg max-w-fit text-center text-primary-content">
        I am an IT Student at Griffith University with a passion for developing neat
        things.
      </p>
    </div>
    <div class="hidden lg:flex divider divider-horizontal divider-start">Scoll</div>
  </div>
</div>

<h1 class="my-6 text-6xl text-center text-base-content font-bold">About Me</h1>
<TextContent>
  Since 2014, I've had an interest in programming and making things. I've made this
  portfolio as a place for me to collate and show off some of the work that I've done.
</TextContent>
<TextContent>
  At the moment, I've returned back to Uni to finish my degree after achieving a point in
  my career that I am happy with. With the experience I've gained, and after finishing my
  studies, my plan is to work in the cybersecurity field.
</TextContent>

<Divider />

<h1 class="my-6 text-6xl text-center text-base-content font-bold">Education & Goals</h1>
<Countdown />
<TextContent>
  I am currently studying a Bachelor of Information Technology at Griffith University,
  opting for a no major or minor option. Having previously studied Computer Science at QUT
  from 2019-2021, I decided to take a break from study and focus on work experience. As of
  2023, I returned to studying at Griffith using the experiences I gained from both QUT
  and from work.
</TextContent>
<TextContent middle={true}>
  From my previous work experience, employers look more for relevant skills and industry
  knowledge over the type of degree or the majors and minors you study. The mentorship I
  gained from those jobs was what influenced me to change my degree over, and to not
  choose a major.
</TextContent>
<TextContent>
  As time has progressed, my goals and ambitions have also adapted. Initially, I wanted to
  be a systems administrator. Upon reaching that goal, I shifted my gaze to what I wanted
  to do work towards, setting on cybersecurity. Given that the industry is ever-changing,
  I felt it appropriate to not hem myself in to a single major or minor.
</TextContent>

<h1 class="my-6 text-6xl p-5 text-center text-base-content font-bold">Skills</h1>
<Skills />
<TextContent>
  While this isn't an exhaustive list of all my skills, it is a brief list of skills I
  wished to highlight. Please see the next section for detailed information on how I have
  utilised these skills in other workplaces.
</TextContent>

<h1 class="my-6 text-6xl p-5 text-center text-base-content font-bold">Experiences</h1>
<Timeline />
