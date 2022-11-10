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

          <div className="col-6 position-relative d-flex flex-wrap justify-content-center">
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
                <p>Ông Minh Nhật tại một sự kiện do Aura Capital tổ chức.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
