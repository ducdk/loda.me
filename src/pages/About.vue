<template>
  <Default title="About">
    <div class="container">
      <Card title="Meow">
        <p>Cảm ơn bạn đã ghé thăm.</p>
        <p>
          <a class="text-danger">Loda</a> là blog chia sẻ về công nghệ, lập trình và
          học máy được thành lập vào ngày 8/3/2019. Với tiêu chí xây dựng một trang
          web blog chuyên nghiệp, lấy chất lượng làm đầu, tôi không
          ngừng cố gắng từng ngày để đem đến cho các bạn đọc Việt Nam những kiến thức
          mới và hay nhất.
        </p>

        <p>
          Các bài viết tôi chia sẻ trên
          <a class="text-danger">Loda</a> sẽ đi từ
          các kiến thức của một
          <a class="text-danger">Software Engineer</a> chứ không
          phải dưới góc độ một Scientist. Vì thế tôi đề cao tính ứng dụng của
          kiến thức, khả năng hiểu vấn đề và sử dụng của nó trong công việc của bạn.
          Tuy vậy, không phải vì thế bài viết sơ sài, mà ngược lại còn rất chi tiết,
          để bạn hiểu kiến thức từ bản chất.
        </p>

        <p>
          <a class="text-danger">Loda</a>
          luôn mong muốn nhận được sự giúp đỡ của các bạn để cải thiện chất lượng tốt
          hơn.
        </p>

        <p>Mọi thông tin xin hãy liên hệ:</p>
        <p>
          <strong>Gmail:</strong> loda.namnh@gmail.com
        </p>
        <p>
          <strong>GitHub:</strong> https://github.com/loda-kun
        </p>

        <p>Nếu bạn muốn đăng lại các bài viết từ blog loda, xin tuân thủ:</p>
        <p>
          1. Bạn có thể đăng lại bài viết hoặc một phần của bài viết. Khi bạn trích
          dẫn vui lòng ghi rõ nguồn, bao gồm liên kết (link) đến trang web này và ghi
          rõ nguồn "loda.me"
        </p>
        <p>
          2. Các bài đăng lại phải là phi lợi nhuận. Nếu muốn đăng vì lợi nhuận xin
          hỏi tác giả trước.
        </p>
        <p>
          3. Nếu bạn sửa chữa nội dung bài viết, bao gồm thêm, bớt hoặc viết tiếp xin
          liên hệ với tác giả.
        </p>

        <p>Một lần nữa, xin cảm ơn.</p>
      </Card>
    </div>
  </Default>
</template>

<script>
import Card from "~/components/cards/Card.vue";
export default {
  metaInfo: {
    title: "About",
    meta: [
      { property: "og:url", content: "/" },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "About" },
      {
        property: "og:description",
        content: "Chia sẻ, hướng dẫn lập trình miễn phí và chất lượng nhất."
      },
      { property: "og:image", content: "" }
    ]
  },
  components: {
    Card
  }
};
</script>
