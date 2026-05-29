* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #f5f7fb;
  color: #111827;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  padding: 20px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0,0,0,.08);
  z-index: 1000;
}

.logo {
  color: #2563eb;
  font-size: 32px;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 35px;
}

.nav-links a {
  text-decoration: none;
  color: #111827;
  font-weight: 600;
}

.hero {
  min-height: 100vh;
  background: linear-gradient(135deg,#0f172a,#1e3a8a);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  text-align: center;
  padding: 20px;
}

.hero h1 {
  font-size: 72px;
}

.hero span {
  color: #60a5fa;
}

.hero h2 {
  color: #cbd5e1;
  font-size: 42px;
}

.hero p {
  font-size: 22px;
  max-width: 800px;
}

.btn {
  background: #2563eb;
  color: white;
  text-decoration: none;
  padding: 18px 40px;
  border-radius: 40px;
  font-weight: bold;
}

.section {
  padding: 120px 20px;
  text-align: center;
}

.section h2 {
  font-size: 52px;
  margin-bottom: 50px;
}

.card,
.project-card {
  max-width: 900px;
  margin: auto;
  background: white;
  padding: 40px;
  border-radius: 18px;
  box-shadow: 0 4px 15px rgba(0,0,0,.08);
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.skill {
  background: white;
  padding: 20px 30px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0,0,0,.08);
  font-weight: bold;
}

.project-card {
  margin-bottom: 25px;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
}

.contact-links a {
  background: white;
  color: #111827;
  text-decoration: none;
  padding: 18px 35px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0,0,0,.08);
  font-weight: bold;
}

@media (max-width: 768px) {
  .navbar {
    padding: 20px;
    flex-direction: column;
    gap: 15px;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero h1 {
    font-size: 42px;
  }

  .hero h2 {
    font-size: 26px;
  }
}