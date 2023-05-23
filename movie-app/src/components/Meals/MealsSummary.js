import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Món Ngon Giao Đến Bạn</h2>
      <p>
        Chọn bữa ăn yêu thích của bạn từ nhiều lựa chọn bữa ăn có sẵn của chúng
        tôi và thưởng thức bữa trưa hoặc bữa tối ngon miệng tại nhà.
      </p>
      <p>
        Tất cả các bữa ăn của chúng tôi được nấu bằng nguyên liệu chất lượng
        cao, vừa kịp thời và tất nhiên bởi các đầu bếp giàu kinh nghiệm!
      </p>
    </section>
  );
};

export default MealsSummary;
