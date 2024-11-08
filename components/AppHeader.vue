<template>
    <div>
      <header>
        <div class="container mx-auto px-4">
          <nav>
            <div class="logo">
              <NuxtLink to="/">
                <figure>
                  <img src="../assets/img/metodo-immobiliare-logo-white.png" alt="metodo-immobiliare-logo-white" width="150">
                </figure>
              </NuxtLink>
            </div>
            <input type="checkbox" id="menu-toggle">
            <label for="menu-toggle" class="menu-icon">&#9776;</label>
            <ul class="menu">
              <li><a class="menu-link" href="#results">Risultati</a></li>
              <li><a class="menu-link" href="#services-section">Servizi</a></li>
              <li><a class="menu-link" href="#testimonials">Testimonianze</a></li>
              <li><a class="menu-link" href="#ceo-section">Chi Siamo</a></li>
              <li>
                <a href="#">
                  <button class="btn btn-border">Blog</button>
                </a>
              </li>
              <li>
                <a href="https://form.typeform.com/to/jd4BaOPX" target="_blank" class="last-button">
                  <button class="btn btn-main">Consulenza gratuita</button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
</template>

<script>

</script>

<style scoped>

header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 30px;
}

.logo a {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}

.logo a span {
  color: #8739fa;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu a {
  display: block;
  padding: 7px 15px;
  font-size: 17px;
  font-weight: 500;
  transition: 0.2s all ease-in-out;
  color: #fff;

}

.last-button {
  padding-right: 0 !important;
}

.menu-icon {
  display: none;
}

#menu-toggle {
  display: none;
}

#menu-toggle:checked ~ .menu {
  transform: scale(1, 1);
}

@media only screen and (max-width: 950px) {
  .menu {
    flex-direction: column;
    background-color: #151418;
    align-items: start;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    z-index: 1;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  .menu a {
    margin-left: 12px;
  }

  .menu li {
    margin-bottom: 10px;
  }

  .menu-icon {
    display: block;
    color: #fff;
    font-size: 28px;
    cursor: pointer;
  }
}

nav {

  a.menu-link {
    position: relative;
  }

  a.menu-link:before, a:after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -2px;
    background: #fff;
  }

  a.menu-link:before {
    left: 0;
  }

  a.menu-link:after {
    right: 0;
    background: #fff;
    transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  a.menu-link:hover:before {
    background: #fff;
    width: 100%;
    transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  
  a.menu-link:hover:after {
    background: transparent;
    width: 100%;
    transition: 0s;
  }

}
</style>