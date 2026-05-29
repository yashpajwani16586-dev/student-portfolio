function App() {
  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        padding: "60px",
        fontFamily: "Arial",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      {/* Hero Section */}
      <h1
        style={{
          fontSize: "60px",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        Yash Pajwani
      </h1>

      <h2
        style={{
          color: "#38bdf8",
          textAlign: "center",
        }}
      >
        Computer Engineering Student
      </h2>

      <p
        style={{
          textAlign: "center",
          fontSize: "20px",
          maxWidth: "800px",
          margin: "20px auto",
        }}
      >
        Passionate about Web Development, Data Analytics, Python,
        Database Management and Software Development.
      </p>

      <hr />

      {/* About */}
      <section style={{ marginTop: "40px" }}>
        <h2 style={{ textAlign: "center" }}>About Me</h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          I am a Computer Engineering student at Shah & Anchor Kutchhi
          Engineering College (SAKEC). I enjoy building websites,
          solving programming problems and learning new technologies.
        </p>
      </section>

      {/* Skills */}
      <section style={{ marginTop: "40px" }}>
        <h2 style={{ textAlign: "center" }}>Skills</h2>

        <p style={{ textAlign: "center" }}>
          Python • JavaScript • React • MySQL • HTML • CSS • Power BI
        </p>
      </section>

      {/* Education */}
      <section style={{ marginTop: "40px" }}>
        <h2 style={{ textAlign: "center" }}>Education</h2>

        <div
          style={{
            border: "1px solid #334155",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Shah & Anchor Kutchhi Engineering College</h3>
          <p>Computer Engineering</p>
        </div>
      </section>

      {/* Projects */}
      <section style={{ marginTop: "40px" }}>
        <h2 style={{ textAlign: "center" }}>Projects</h2>

        <div
          style={{
            border: "1px solid #334155",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        >
          <h3>Student Portfolio Website</h3>
          <p>
            Personal portfolio website developed using React and
            deployed on Vercel.
          </p>
        </div>

        <div
          style={{
            border: "1px solid #334155",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Library Management System</h3>
          <p>
            Database management project using MySQL for managing
            books, students and issue records.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ marginTop: "40px" }}>
        <h2 style={{ textAlign: "center" }}>Certifications</h2>

        <ul>
          <li>Python Programming Certification</li>
          <li>Data Analytics Workshop</li>
          <li>Web Development Training</li>
        </ul>
      </section>

      {/* Contact */}
      <section style={{ marginTop: "40px" }}>
        <h2 style={{ textAlign: "center" }}>Contact</h2>

        <p style={{ textAlign: "center" }}>
          Email: yash.pajwani16586@sakec.ac.in
        </p>

        <p style={{ textAlign: "center" }}>
          Mumbai, Maharashtra, India
        </p>
      </section>
    </div>
  );
}

export default App;