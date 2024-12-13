"use client";

import React, { useState } from "react";
import { Drawer, IconButton, List, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import Hero from "./hero";
import RiwayatPendidikan from "./RiwayatPendidikan";
import RiwayatPekerjaan from "./RiwayatPekerjaan";
import Skill from "./Skill";
import InformasiPribadi from "./MyInfo";
import Hobbies from "./Hobbies";
import ContactForm from "./FormKontak";
import FavColor from "./FavColor";

interface DrawerMenuProps {
  setWarna: (warna: string) => void;
  warna: string;
}

export default function DrawerMenu({ setWarna, warna }: DrawerMenuProps) {
  const [drawerOpen, setDrawerOpen] = useState(false); // Status drawer (terbuka/tutup)
  const [content, setContent] = useState(<Hero />); // Konten awal yang ditampilkan

  const menuItems = [
    { label: "Home", component: <Hero /> },
    { label: "Riwayat Pendidikan", component: <RiwayatPendidikan /> },
    { label: "Riwayat Pekerjaan", component: <RiwayatPekerjaan /> },
    {
      label: "Skill",
      component: <Skill skills={["React", "HTML", "CSS", "Flutter", "UI/UX Design"]} />,
    },
    { label: "Informasi Pribadi", component: <InformasiPribadi /> },
    {
      label: "Hobby",
      component: (
        <Hobbies
          hobbies={[
            { id: 1, name: "Menonton Film", image: "/hobby1.jpeg" },
            { id: 2, name: "Membersihkan Rumah", image: "/hobby2.jpeg" },
            { id: 3, name: "Motoran", image: "/hobby3.jpeg" },
            { id: 4, name: "Makan", image: "/hobby4.jpeg" },
          ]}
        />
      ),
    },
    { label: "Kontak", component: <ContactForm /> },
    { label: "Tema", component: <FavColor setWarna={setWarna} warna={warna} /> },
  ];

  return (
    <Box display="flex" height="100vh">
      {/* Tombol untuk membuka Drawer */}
      <IconButton
        onClick={() => {
          console.log("Tombol menu diklik");
          setDrawerOpen(true);
        }}
        sx={{
          position: "fixed",
          top: 16,
          left: 16,
          color: warna === "Dark" ? "white" : "black",
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer untuk menampilkan menu */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => {
          console.log("Drawer ditutup");
          setDrawerOpen(false);
        }}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: warna === "Dark" ? "#333" : "#fff",
            color: warna === "Dark" ? "white" : "black",
          },
        }}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => {
                    console.log(`Menu ${item.label} dipilih`);
                    setContent(item.component);
                    setDrawerOpen(false);
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Konten Utama */}
      <Box
        flexGrow={1}
        padding={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor:
            warna === "Dark"
              ? "black"
              : warna === "Light"
              ? "white"
              : "pink.300",
          color: warna === "Dark" ? "white" : "black",
        }}
      >
        {content}
      </Box>
    </Box>
  );
}
