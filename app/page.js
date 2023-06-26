import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Markets from "../components/Markets";
import Banner from "@/components/MainBanner";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

const cards = [
  {
    icon: "access_alarm",
    title: "Decentralized",
    description: "Access an immutable money market directly on-chain.",
  },
  {
    icon: "rotation_icon",
    title: "BEP-20",
    description: "All Venus Protocol assets are bound by the BEP-20 standard. ",
  },
  {
    icon: "circle_icon",
    title: "Scalable",
    description:
      "Built on BNB Chain for fast, secure, and low cost transactions.",
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Markets />
      <div className={styles.card}>
        {cards.map((card) => (
          <Card
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <Footer />
    </main>
  );
}
