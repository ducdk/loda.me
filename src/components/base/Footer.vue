<template>
  <div>
    <FooterTop/>

    <footer class="footer footer-large">
      <div class="container">
        <div class="row align-items-top text-center">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 text-sm-left">
            <h4># Nani</h4>
            <nav class="nav flex-column">
              <g-link class="nav-link active" to="/">Home</g-link>
              <g-link class="nav-link" to="/java">Java</g-link>
              <g-link class="nav-link" to="/spring-boot">Spring</g-link>
              <g-link class="nav-link" to="/about">Contact</g-link>
            </nav>
          </div>

          <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 mt-sm-0 text-sm-left">
            <h4># Meow</h4>
            <nav class="nav flex-column">
              <g-link class="nav-link active" to="/">Privacy Policy</g-link>
              <g-link class="nav-link" to="/">Terms</g-link>
              <g-link class="nav-link" to="/">FAQ</g-link>
              <g-link class="nav-link" to="/">Support</g-link>
            </nav>
          </div>

          <div class="col-12 col-md-4 col-lg-3 text-md-left mt-5 mt-md-0">
            <h4># Loda.me</h4>
            <p>
              Chia sẻ, hướng dẫn lập trình miễn phí và chất lượng nhất...
              <g-link class="text-success" to="/about">
                <i class="fe fe-log-in"></i> About
              </g-link>
            </p>
            <p class="lead">
              <a href="https://www.facebook.com/loda.mee/" class="mx-2">
                <i class="fab fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://loda.me" class="mx-2">
                <i class="fab fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://loda.me" class="mx-2">
                <i class="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://loda.me" class="mx-2">
                <i class="fab fa-pinterest" aria-hidden="true"></i>
              </a>
              <a href="https://loda.me" class="mx-2">
                <i class="fab fa-google" aria-hidden="true"></i>
              </a>
            </p>
          </div>

          <div class="col-12 col-lg-2 ml-auto text-lg-left mt-4 mt-lg-0">
            <FBFanpage />
          </div>
        </div>

        <div class="row mt-3">
          <div class="col text-center">
            Copyright © 2019
            <g-link to="/">Loda.me</g-link>.
            <br>Theme by
            <a href="#" target="_blank">Tabler</a> and and images was designed by
            <a href="http://www.freepik.com">Freepik</a>
          </div>
        </div>
      </div>
    </footer>
    <!-- <footer class="footer">
      <div class="container">
        <div class="row align-items-center flex-row-reverse">
          <div class="col-auto ml-lg-auto">
            <div class="row align-items-center">
              <div class="col-auto">
                <ul class="list-inline list-inline-dots mb-0">
                  <li class="list-inline-item">
                    <a href="/docs/index.html">Documentation</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="/faq.html">FAQ</a>
                  </li>
                </ul>
              </div>
              <div class="col-auto">
                <a href="#" class="btn btn-outline-primary btn-sm">Source code</a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-auto mt-3 mt-lg-0 text-center">
            Copyright © 2019
            <a href="#">Loda.me</a>. Theme by
            <a href="#" target="_blank">Tabler</a>.
          </div>
        </div>
      </div>
    </footer>-->
  </div>
</template>


<script>
import FooterTop from "~/components/base/FooterTop.vue";
import FBFanpage from "~/components/plugin/FBFanpage.vue";
export default {
  name: "Footer",
  components: {
    FooterTop,
    FBFanpage
  }
};
</script>