// src/data/menuItems.js
import Hero from "../components/Hero"; // Sesuaikan path impor komponen kamu
import RiwayatPendidikan from "../components/RiwayatPendidikan";
import RiwayatPekerjaan from "../components/RiwayatPekerjaan";
import Skill from "../components/Skill";
import InformasiPribadi from "../components/MyInfo";
import Hobbies from "../components/Hobbies";

const menuItems = [
  { label: "Hero", component: <Hero /> },
  { label: "Riwayat Pendidikan", component: <RiwayatPendidikan /> },
  { label: "Riwayat Pekerjaan", component: <RiwayatPekerjaan /> },
  { label: "Skill", component: <Skill skills={["React", "HTML", "CSS", "Flutter", "UI/UX Design"]} /> },
  { label: "Informasi Pribadi", component: <InformasiPribadi /> },
  { label: "Gallery", component: <Hobbies hobbies={[{ id: 1, name: "Hobby1", image: "/image1.jpg" }]} /> },
];

export default menuItems;
