import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <a href="/product/detail" rel="noopener noreferrer">
          Task1. 상품 상세 페이지
        </a>
        <a href="/cart" rel="noopener noreferrer">
          Task2. 장바구니 페이지
        </a>
      </main>
      <footer className={styles.footer}>
        안녕하세요오~ 부족하지만 확인부탁드립니다!
      </footer>
    </div>
  );
}
