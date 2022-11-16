import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExpert } from "../../../store/redux/ExpertReducer/expert.action";
import { getNews } from "../../../store/redux/NewsReducer/news.action";
import styles from "./Interview.module.scss";

export default function Interview(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { expert } = useSelector((state) => state.ExpertReducer);
  const { news } = useSelector((state) => state.NewsReducer);

  useEffect(() => {
    dispatch(getExpert());
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div className={styles.interview}>
      <section>
        <Image
          alt="banner"
          src="/images/interview/banner.png"
          width={1294}
          height={685}
        />
      </section>

      <div className="px-interview">
        <section className="d-flex flex-wrap mt-5">
          <div className="col-8 d-flex flex-column pe-4">
            <Image
              alt="banner"
              src="/images/interview/1.png"
              width={657}
              height={792}
            />

            <div className="col-7 d-flex flex-column mt-3">
              <p className={styles.mr}>Ông</p>
              <p className={styles.name}>Đậu Minh Nhật</p>
              <p className={styles.position}>Chủ tịch Aura Capital</p>
            </div>
          </div>

          <div className="col-4 d-flex flex-column justify-content-between">
            <div>
              <p className="fw-bold">
                Với phương pháp cơ chế vốn, ông Đậu Minh Nhật, Chủ tịch Aura
                Capital đã giúp hơn 30 SMEs tái cấu trúc, thiết kế chiến lược
                trước khi IPO và thu hút nhà đầu tư.
              </p>
            </div>

            <div className="position-relative">
              <div className={styles.interview_decor}>
                <p>
                  Theo ông Đậu Minh Nhật, giai đoạn tiền IPO có vai trò quan
                  trọng với các doanh nghiệp, nhất là trong bối cảnh cạnh tranh
                  ngày càng lớn trên thế giới. Với hơn 10 năm kinh nghiệm làm
                  việc với các startup và SMEs, là chuyên gia đào tạo cơ chế vốn
                  tại Việt Nam, ông Minh Nhật sẽ chia sẻ thêm về sự ra đời của
                  quỹ đầu tư Aura Capital cũng như kinh nghiệm IPO cho các doanh
                  nghiệp SMEs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="d-flex flex-wrap mt-5">
          <div className="col-6 pe-3">
            <p className="fw-bold">
              Aura Capital ra đời như thế nào, thưa ông?
            </p>

            <p>
              - Aura Capital ra đời xuất phát từ một trăn trở, đó là làm thế nào
              để có thể xây dựng được những doanh nghiệp Việt trường tồn và lớn
              mạnh khi so sánh với các quốc gia trên thế giới. Để tìm ra câu trả
              lời, tôi đã di chuyển đến nhiều nơi trên thế giới và cuối cùng đáp
              án tôi tìm thấy là phương pháp cơ chế vốn.
            </p>

            <p>
              Tính đến nay, đã có gần 20.000 chủ doanh nghiệp, hơn 500 doanh
              nhân SMEs và hơn 30 SMEs tái cấu trúc, thiết kế chiến lược tiền
              IPO và thu hút thành công các nhà đầu tư với sự hỗ trợ của Aura
              Capital. Chúng tôi đã tư vấn, truyền đạt phương pháp cơ chế vốn,
              đồng hành cùng doanh nghiệp.
            </p>
          </div>

          <div className="col-6 position-relative">
            <div className={styles.interview_decor_2}>
              <div className="pe-5">
                <Image
                  alt="banner"
                  src="/images/interview/2.png"
                  width={576}
                  height={660}
                />
              </div>

              <div className={styles.box}>
                <p>
                  Ông <span className={styles.text_special}>Minh Nhật</span> tại
                  một sự kiện do
                  <span className={styles.text_special}>Aura Capital</span> tổ
                  chức.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5">
          <p className="fw-bold">
            Ông vừa nhắc đến phương pháp cơ chế vốn, ông có thể chia sẻ rõ hơn
            về điều này?
          </p>

          <p>
            - Cơ chế vốn dựa trên nguyên lý sở hữu nguồn lực vô hạn của xã hội,
            giúp các doanh nghiệp thu hút mọi nguồn vốn, sau đó IPO giúp công ty
            phát triển nhanh chóng. Thời điểm ban đầu tôi gặp một số khó khăn
            khi mang phương pháp này ứng dụng vào thị trường Việt Nam. Bởi những
            gì mà tôi tiếp nhận là theo luật chứng khoán Mỹ, tiêu chuẩn thế
            giới, khi ứng dụng vào thị trường Việt Nam thì không phù hợp. Sau
            đó, tôi quyết định thử nghiệm phương pháp cho chính doanh nghiệp của
            mình là Aura Capital. Khi đã thành công, tôi hệ thống hoá phương
            pháp cơ chế vốn, cấu trúc lại mô hình này một cách đơn giản hơn để
            giúp các SMEs dễ dàng áp dụng.
          </p>

          <p className="fw-bold">
            Theo ông phương pháp cơ chế vốn phù hợp với các SMEs Việt như thế
            nào?
          </p>

          <p>
            - Trong quá trình nghiên cứu và tìm hiểu, tôi thấy khi nhắc đến
            thuật ngữ IPO, các SMEs Việt Nam vẫn còn khá mơ hồ và lo sợ bởi vì
            họ nghĩ IPO là mục tiêu của các tập đoàn lớn, không phù hợp đối với
            SMEs. Đó là lý do thôi thúc Aura Capital tìm cách hỗ trợ cho các
            SMEs Việt. Thực tế, các SMEs chỉ cần nắm nguyên lý và ứng dụng
            phương pháp cơ chế vốn vào chiến lược tài chính sẽ tạo sự thuận lợi
            rất lớn để gia tăng giá trị doanh nghiệp của họ.
          </p>
        </section>

        <section className="d-flex flex-wrap">
          <div className="col-6 d-flex flex-column justify-content-center pe-5">
            <p>
              Ông. <span className={styles.text_special}>Đậu Minh Nhật </span>
              chia sẻ kinh nghiệm IPO cho các doanh nghiệp SMEs tại sự kiện
              kick-off <span className="fw-bold">Running to IPO</span>
            </p>
          </div>

          <div className="col-6">
            <Image
              alt="banner"
              src="/images/interview/3.png"
              width={576}
              height={680}
            />
          </div>
        </section>

        <section className="mt-5">
          <p className="fw-bold">
            Ông vừa nhắc đến phương pháp cơ chế vốn, ông có thể chia sẻ rõ hơn
            về điều này?
          </p>

          <p>
            - Cơ chế vốn dựa trên nguyên lý sở hữu nguồn lực vô hạn của xã hội,
            giúp các doanh nghiệp thu hút mọi nguồn vốn, sau đó IPO giúp công ty
            phát triển nhanh chóng. Thời điểm ban đầu tôi gặp một số khó khăn
            khi mang phương pháp này ứng dụng vào thị trường Việt Nam. Bởi những
            gì mà tôi tiếp nhận là theo luật chứng khoán Mỹ, tiêu chuẩn thế
            giới, khi ứng dụng vào thị trường Việt Nam thì không phù hợp. Sau
            đó, tôi quyết định thử nghiệm phương pháp cho chính doanh nghiệp của
            mình là Aura Capital. Khi đã thành công, tôi hệ thống hoá phương
            pháp cơ chế vốn, cấu trúc lại mô hình này một cách đơn giản hơn để
            giúp các SMEs dễ dàng áp dụng.
          </p>

          <p className="fw-bold">
            Theo ông phương pháp cơ chế vốn phù hợp với các SMEs Việt như thế
            nào?
          </p>

          <p>
            - Trong quá trình nghiên cứu và tìm hiểu, tôi thấy khi nhắc đến
            thuật ngữ IPO, các SMEs Việt Nam vẫn còn khá mơ hồ và lo sợ bởi vì
            họ nghĩ IPO là mục tiêu của các tập đoàn lớn, không phù hợp đối với
            SMEs. Đó là lý do thôi thúc Aura Capital tìm cách hỗ trợ cho các
            SMEs Việt. Thực tế, các SMEs chỉ cần nắm nguyên lý và ứng dụng
            phương pháp cơ chế vốn vào chiến lược tài chính sẽ tạo sự thuận lợi
            rất lớn để gia tăng giá trị doanh nghiệp của họ.
          </p>
        </section>
      </div>
    </div>
  );
}
