<template>
  <div>
    <div class="header py-4">
      <div class="container">
        <div class="d-flex">
          <a class="header-brand" href="/index.html">
            <img src="/demo/brand/tabler.svg" class="header-brand-img" alt="tabler logo">
          </a>

          <div class="d-flex order-lg-2 ml-auto">
            <div class="nav-item d-none d-md-flex">
              <a href="githubUrl" class="btn btn-sm btn-outline-primary" target="_blank">Source code</a>
            </div>
          </div>

          <a
            href="#"
            class="header-toggler d-lg-none ml-3 ml-lg-0"
            data-toggle="collapse"
            data-target="#headerMenuCollapse"
          >
            <span class="header-toggler-icon"></span>
          </a>
        </div>
      </div>
    </div>

    <div class="header collapse d-lg-flex p-0" id="headerMenuCollapse">
      <div class="container">
        <div class="row align-items-center">
          <!-- <div class="col-lg-3 ml-auto">
            <form class="input-icon my-3 my-lg-0">
              <input
                type="search"
                class="form-control header-search"
                placeholder="Search&hellip;"
                tabindex="1"
              >
              <div class="input-icon-addon">
                <i class="fe fe-search"></i>
              </div>
            </form>
          </div> -->
          <!-- <div class="col-lg order-lg-first">{% include menu.html %}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    githubUrl
  }
}
</static-query>


<script>
export default {
  name: 'Header'
}
</script>