<script>
  let name = "world";
  import Logo from "../../images/svgs/Logo/index.js";
  import Hamburger from "../Hamburger/Hamburger.svelte";


</script>

<nav class="wrapper">
  <div class="container">
    <div class="left-container">
      <Hamburger />
      <label class="nav-menu-label" for="burger-trigger">
        <p class="secondary-main-trigger-icon">menu</p>
      </label>
    </div>

    <div class="logo-container">
      <a href="https://www.apeldesign.com/">
        <Logo fill="white" />
      </a>
    </div>
  </div>
</nav>

<style lang="scss">
  .wrapper {
    width: 100vw;
    position: fixed;
    z-index: 4;
  }
  .container {
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Orator";
    padding: 20px 40px;

    font-weight: 100;

    .left-container {
      gap: 9px;
      display: flex;

      align-items: center;
      .secondary-main-trigger-icon {
        font-size: 18px;
        cursor: pointer;
      }
    }
    .logo-container {
      max-width: 10em;
      height: auto;
    }
  }

  @media (max-width: 650px) {
    .secondary-main-trigger-icon {
      display: none;
    }
  }
</style>
