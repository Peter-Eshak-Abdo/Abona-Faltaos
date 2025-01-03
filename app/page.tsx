import styles from "./page.module.css";
import Head from "../components/Head";
import Header from "../components/Header";
import Home from "@/components/Home";
import Footer from "@/components/Footer";

function Page() {
  return (
    <div className={styles.page}>
      <Head></Head>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default Page;
