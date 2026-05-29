function App() {
  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        padding: "60px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "60px", marginBottom: "10px" }}>
        Your Name
      </h1>

      <h2 style={{ color: "#38bdf8" }}>
        Computer Science Student
      </h2>

      <p style={{ maxWidth: "700px" }}>
        Passionate about Web Development, Data Analytics,
        Python and Software Engineering.
      </p>

      <hr />

      <h2>About Me</h2>
      <p>
        I am a student who enjoys building websites and solving
        real-world problems through technology.
      </p>

      <h2>Skills</h2>
      <p>
        Python • JavaScript • React • MySQL • HTML • CSS
      </p>

      <h2>Projects</h2>

      <div
        style={{
          border: "1px solid #334155",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "15px",
        }}
      >
        <h3>Student Portfolio Website</h3>
        <p>Personal portfolio built using React.</p>
      </div>

      <div
        style={{
          border: "1px solid #334155",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <h3>Library Management System</h3>
        <p>Database management project using MySQL.</p>
      </div>

      <h2 style={{ marginTop: "40px" }}>Contact</h2>
      <p>Email: yourmail@gmail.com</p>
      <p>LinkedIn: linkedin.com/in/yourname</p>
    </div>
  );
}

export default App;