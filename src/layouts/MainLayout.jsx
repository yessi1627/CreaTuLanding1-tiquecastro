import NavBar from "../components/NavBar/NavBar";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />

      <main
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
          flex: 1
        }}
      >
        {children}
      </main>
    </>
  );
};

export default MainLayout;
