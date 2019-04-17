<template>
  <div class="card card-borderless">
    <g-image class="card-img-top" src="~/assets/images/book-email.jpg" quality="100" width="800"/>

    <div class="card-body d-flex flex-column">
      <div>
        <h4>Cảm ơn bạn đã theo dõi blog thời gian qua!</h4>
        <p>
          Mình gửi tặng các bạn cuốn sách
          <span class="font-weight-bold">Pro Spring Boot 2</span>
          trị giá
          <span class="font-weight-bold">$19.24</span>. Chi tiết:
          <a
            target="_blank"
            href="https://www.amazon.com/Pro-Spring-Boot-Authoritative-Microservices-ebook/dp/B07G2NSBCS"
          >Amazon</a>
        </p>
      </div>
      <div>
        <form action="https://gmail.us20.list-manage.com/subscribe/post" method="POST">
          <input type="hidden" name="u" value="78b78b7108a5c924d4d147cd0">
          <input type="hidden" name="id" value="9435c8836b">
          <div class="input-group">
            <input
              type="email"
              autocapitalize="off"
              autocorrect="off"
              name="MERGE0"
              id="MERGE0"
              class="form-control"
              placeholder="Email"
            >
            <div class="input-group-append">
              <button type="button" class="btn btn-azure">Nhận sách</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmailCard"
};
</script>
