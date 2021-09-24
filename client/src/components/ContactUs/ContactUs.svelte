<script>
  import { textPages } from "../../pageContent";

  export let bgColor;
  export let deviceType;
  let form;
  let submitted = false;
  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(form);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        submitted = true;
      })
      .catch((error) => alert(error));
  };
</script>

<div style="background-color:{bgColor}" class="container">
  <div class="header-container">
    <h5 class="bu-is-size-1">contact</h5>
    <img
      class="header-stroke"
      src={"https://res.cloudinary.com/dt4xntymn/image/upload/v1631738218/aviator/bgphotos/theConcept/Concept_Brush_PNG_cbpo7s.png"}
      alt=""
    />
  </div>

  {#if !submitted}<form
      bind:this={form}
      name="emailForm"
      data-netlify="true"
      class="form-container"
    >
      <input type="hidden" name="form-name" value="emailForm" />

      <div class="bu-field">
        <div class="bu-control">
          <input
            id="name-input"
            class="bu-input"
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
      </div>
      <div class="bu-field">
        <div class="bu-control">
          <input
            id="email-input"
            class="bu-input"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div class="bu-field">
        <div class="bu-control">
          <input
            id="country-input"
            class="bu-input"
            type="text"
            name="country"
            placeholder="Country"
          />
        </div>
      </div>
      <div class="bu-field">
        <div class="bu-control">
          <input
            id="phone-input"
            class="bu-input"
            type="phone"
            name="phone"
            placeholder="Phone"
          />
        </div>
      </div>
      <div class="bu-field">
        <div class="bu-control">
          <textarea
            id="message-input"
            class="bu-textarea"
            type="text"
            name="message"
            placeholder="Message"
          />
        </div>
      </div>
      <div class="bu-field">
        <div class="bu-control">
          <input
            on:click={handleSubmit}
            type="submit"
            class="bu-button bu-is-link bu-is-fullwidth"
          />
        </div>
      </div>
    </form>
  {:else}
    <p class="success-message">Thanks! We'll get back to you shortly.</p>
  {/if}
</div>

<style lang="scss">
  .header-stroke {
    left: 0;
    top: 30px;
    height: 60%;

    z-index: 1;
    position: absolute;
  }
  .header-container {
    position: relative;
    height: fit-content;
  }
  .success-message {
    color: white;
  }
  .bu-button {
    background-color: rgb(164, 99, 46);
  }
  .form-container {
    width: 100%;
    max-width: 500px;
    .bu-field {
      margin: 15px;
      ::placeholder {
        color: black;
        font-size: 0.8em;
        opacity: 0.5; /* Firefox */
      }
    }
  }
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
  }
  h5 {
    text-transform: uppercase;
    color: white;
    z-index: 2;
    position: relative;
    font-family: Capsuula;
  }
</style>
