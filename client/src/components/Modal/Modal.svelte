﻿<script>
  import { tick } from "svelte";

  import { modal } from "../../stores";
</script>

<div class="bu-modal {$modal.visibility ? 'bu-is-active' : ''}">
  <div
    on:click={async () => {
      $modal.content = null;

      $modal.visibility = false;
      await tick();
    }}
    class="bu-modal-background"
  />
  <div class="bu-modal-content">
    <div class="bu-image bu-is-4by3">
      {#if $modal.type === "video"}
        <div class="video-container">
          <iframe
            height="100%"
            class="video-modal"
            width="100%"
            src={(function () {
              if ($modal.content) {
                var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                var match = $modal.content.match(regExp);
                if (match && match[2].length == 11) {
                  return "https://www.youtube.com/embed/" + match[2];
                } else {
                  return "error";
                }
              }
            })()}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      {:else}
        <img src={$modal.content} alt="" />
      {/if}
    </div>
  </div>
  <button
    on:click={() => {
      $modal.content = null;

      $modal.visibility = false;
    }}
    class="bu-modal-close bu-is-large"
    aria-label="close"
  />
</div>

<style lang="scss">
  .video-container {
    .video-modal {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
    }
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
</style>
