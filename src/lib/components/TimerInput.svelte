<script lang="ts">
  import { tryParse, styleObjectToString } from './utils/otherUtils.js';
  import splitInput from './utils/splitInput.ts';
  import {createEventDispatcher} from "svelte";

  const dispatch = createEventDispatcher();
  function change(): void {
    dispatch('change');
  }

  export let showHours
  export let showMinutes
  export let showSeconds
  export let hoursLabel
  export let minutesLabel
  export let secondsLabel
  export let timeStyle
  export let cssStyle
  export let value = '';
  $: time = splitInput(value);

  const handleKeyDown = (event: KeyboardEvent): void => {
    change();
    if (/[0-9]/.test(event.key)) {
      value = value + event.key;
    }
    if (event.key === 'Backspace') {
      value = value.slice(0, -1);
    }
  };

  cssStyle = tryParse(cssStyle);
  const containerStyle = styleObjectToString(cssStyle.container);
  const numberContainerStyle = styleObjectToString(cssStyle.numberContainer);
  const numberStyle = styleObjectToString(cssStyle.number);
  const postfixStyle = styleObjectToString(cssStyle.postfix);

</script>

<!-- <div class="timer-input"> -->
<!-- {#if timeStyle === 'long'}
  <div style={containerStyle} class="container" role="textbox" tabindex="0" on:keydown={handleKeyDown}>
    {#if showHours}
      <div style={numberContainerStyle} class="number-container">
        <div style={numberStyle} class="number">{time.hour}</div>
        <div style={postfixStyle} class="postfix">{hoursLabel}</div>
      </div>
    {/if}
    {#if showMinutes}
      <div style={numberContainerStyle} class="number-container">
        <div style={numberStyle} class="number">{time.minute}</div>
        <div style={postfixStyle} class="postfix">{minutesLabel}</div>
      </div>
    {/if}
    {#if showSeconds}
      <div style={numberContainerStyle} class="number-container">
        <div style={numberStyle} class="number">{time.second}</div>
        <div style={postfixStyle} class="postfix">{secondsLabel}</div>
      </div>
    {/if}
  </div>
{:else} -->
  <div style={containerStyle} class="container" role="textbox" tabindex="0" on:keydown={handleKeyDown}>
    <!-- {#if showHours}
      <div class="number-container">
        <div class="number">{time.hour}</div>
        <div class="postfix">:</div>
      </div>
    {/if}
    {#if showMinutes} -->
      <div style={numberContainerStyle} class="number-container">
        <div style={numberStyle} class="number">{time.minute}</div>
        <div style={postfixStyle} class="postfix">:</div>
      </div>
    <!-- {/if}
    {#if showSeconds} -->
      <div style={numberContainerStyle} class="number-container">
        <div style={numberStyle} class="number">{time.second}</div>
      </div>
    <!-- {/if} -->
</div>
<!-- {/if} -->
<!-- </div> -->

<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    outline-style: none;
    transition: 100ms;
    font-size: xx-large;
  }

  .container:focus {
    border-bottom-style: solid;
    border-color: var(--blue);
    border-bottom-width: 0.1rem;
    border-radius: 0.15rem;
  }

  .number-container {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }

  .number {
    min-width: 2ch;
    text-align: end;
  }

  .postfix {
    font-size: small;
    color: dimgrey;
  }
</style>
