<script lang="ts">
  import { getContext } from 'svelte';
  import Timer from './lib/Timer.svelte';

  export let timeout: () => void = () => {
    /* do nothing */
  };
  export let displayTime = '000000';
  export let showControls
  export let showHours
  export let showMinutes
  export let showSeconds
  export let hoursLabel
  export let minutesLabel
  export let secondsLabel
  export let timeStyle
  export let cssStyle
  export let autoStart

  const { styleable } = getContext('sdk');
  const component = getContext('component');
</script>

<div use:styleable={$component.styles}>
  <Timer
    on:timeout={timeout}
    displayTime={displayTime}
    showControls={showControls}
    showHours={showHours}
    showMinutes={showMinutes}
    showSeconds={showSeconds}
    hoursLabel={hoursLabel}
    minutesLabel={minutesLabel}
    secondsLabel={secondsLabel}
    timeStyle={timeStyle}
    cssStyle={cssStyle}
    autoStart={autoStart}
  />
</div>

<style>
  :root {
    --blue: #4285f4;

    --grey-3: #eeeeee;
    --grey-4: #e0e0e0;
  }
</style>
