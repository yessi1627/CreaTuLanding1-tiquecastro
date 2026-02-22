import NavBar from "../NavBar/NavBar";

const MainLayout = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <NavBar />

      <main
        style={{
          width: "100%",
          padding: "40px 60px",
          marginTop: "90px",
          flex: 1,
          boxSizing: "border-box",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
