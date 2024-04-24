<script>
  import Divider from "../../components/portfolio/divider.svelte";
  import Countdown from "../../components/portfolio/countdown.svelte";
  import TextContent from "../../components/portfolio/textContent.svelte";
  import Skills from "../../components/portfolio/skills.svelte";
  import Timeline from "../../components/portfolio/timeline.svelte";
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

<h1 class="my-6 text-6xl p-5 text-center text-base-content font-bold">
  Skills & Confidence
</h1>
<Skills />
<TextContent>
  While this isn't an exhaustive list of all my skills, it is a brief list of skills I
  wished to highlight. Please see the next section for detailed information on how I have
  utilised these skills in other workplaces.
</TextContent>

<h1 class="my-6 text-6xl p-5 text-center text-base-content font-bold">Experiences</h1>
<Timeline />
<h3 class="p-5 text-4xl text-center">Informal Experience</h3>
<TextContent>
  Griffith University has also been helpful in engaging me with industry panels and
  experiences. In early 2024, one of my units had a panel with some industry experts who
  discussed what the future of the IT industry would look like. Coming away from that
  panel, I felt better about the path I had taken. The experts all agreed that the
  industry is an ever-changing field, so it really doesn't make sense to stay comfortable
  with a single expertise.
</TextContent>
<TextContent middle={true}>
  Another extracurricular activity I undertook was the 2023 'James-Jam'. In this activity,
  groups were formed and given two weeks to construct a working game in p5play.js. The
  theme was a game remniscient of Homeworld (1999). While this wasn't a competition, our
  group did an amazing job at constructing a fully working game. You can play the game at
  <a class="link" href="https://gamejam2023.nickbland.dev/">this link here</a>. And if you
  want to view the source code, it can be found
  <a class="link" href="https://github.com/NickBland">on my GitHub</a>.
</TextContent>
<TextContent middle={true} classes={"pt-5"}>
  Outside of work experience and university, I also aim to learn new projects in my own
  time. For example, the website you are reading this on was built by hand by me. You can
  find the source code for this project, and others at my personal <a
    class="link"
    href="https://git.nickbland.dev">GitLab instance here</a
  >
  or my <a class="link" href="https://github.com/NickBland">GitHub here</a>.
</TextContent>
<TextContent middle={true} classes={"pt-5"}>
  On top of that, I also have my own homelab setup. Utilising Proxmox, I run hosts and
  containers for various services that both me, and my friends and family enjoy. For a
  list of services that I am running, you can visit my <a
    class="link"
    href="https://status.nickbland.dev/">AWS-hosted status page here</a
  >.
</TextContent>
<TextContent>
  The homelab is a constantly evolving project that has given enabled me to self-teach
  myself aspects of linux administration in a safer environment. In the future, I may have
  a blog with some of the more interesting projects I've worked on.
</TextContent>

<h1 class="my-6 text-6xl p-5 text-center text-base-content font-bold">Contact</h1>
<TextContent>
  Thanks for checking out my site, if you want to get in contact with me, you can find me
  on <a class="link" href="https://github.com/NickBland">GitHub</a>, or send an email to
  <a class="link" href="mailto:hello@nickbland.dev">hello@nickbland.dev</a>.
</TextContent>
