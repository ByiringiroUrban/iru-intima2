import React, { useState } from "react";
import { Link } from "react-router-dom";
import iruLogo from "@/assets/IRU_Intima_Logo.png";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [message, setMessage] = useState<{ text: string; type: "error" | "success" } | null>(null);
  const [loginEmail, setLoginEmail] = useState(() => localStorage.getItem("iru_intima_remember_email") || "");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(() => !!localStorage.getItem("iru_intima_remember_email"));
  const [showPasswords, setShowPasswords] = useState<Record<string, boolean>>({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirm, setRegConfirm] = useState("");
  const [ageConfirm, setAgeConfirm] = useState(false);
  const [termsConfirm, setTermsConfirm] = useState(false);

  const togglePass = (id: string) => setShowPasswords(p => ({ ...p, [id]: !p[id] }));

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { setMessage({ text: "Please enter a valid email.", type: "error" }); return; }
    if (loginPassword.length < 6) { setMessage({ text: "Password must be at least 6 characters.", type: "error" }); return; }
    if (rememberMe) localStorage.setItem("iru_intima_remember_email", loginEmail);
    else localStorage.removeItem("iru_intima_remember_email");
    setMessage({ text: "Login successful (demo). Redirecting to dashboard...", type: "success" });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName.length < 2 || lastName.length < 2) { setMessage({ text: "Please fill all name fields.", type: "error" }); return; }
    if (!regEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { setMessage({ text: "Please enter a valid email.", type: "error" }); return; }
    if (regPassword.length < 8) { setMessage({ text: "Password must be at least 8 characters.", type: "error" }); return; }
    if (regPassword !== regConfirm) { setMessage({ text: "Passwords don't match.", type: "error" }); return; }
    if (!ageConfirm) { setMessage({ text: "You must confirm you are 18+.", type: "error" }); return; }
    if (!termsConfirm) { setMessage({ text: "You must agree to the Terms.", type: "error" }); return; }
    setMessage({ text: "Account created successfully (demo). You can now log in.", type: "success" });
    setTimeout(() => { setActiveTab("login"); setLoginEmail(regEmail); }, 700);
  };

  return (
    <div className="auth-page">
      <div className="auth-shell">
        {/* LEFT */}
        <aside className="showcase">
          <Link to="/" className="iru-brand">
            <div className="iru-brand-badge"><img src={iruLogo} alt="IRU Intima" /></div>
            <div>IRU Intima<small>Private Content Hub</small></div>
          </Link>

          <div className="pill">🔒 Secure • 18+ • Private Access</div>

          <h1>Welcome back to a premium private browsing experience</h1>
          <p>Sign in to continue watching, follow creators, and manage your premium access. New here? Create an account in seconds and personalize your feed.</p>

          <div className="feature-list">
            {[
              { icon: "✨", title: "Modern UX", desc: "Fast, responsive design for desktop, tablet, and mobile." },
              { icon: "🛡️", title: "Privacy First", desc: "Built with secure sessions, protected routes, and account controls." },
              { icon: "🎯", title: "Creator Ready", desc: "Manage subscriptions, watchlists, and premium content with ease." },
            ].map((f, i) => (
              <div className="feature" key={i}>
                <i>{f.icon}</i>
                <div><h4>{f.title}</h4><p>{f.desc}</p></div>
              </div>
            ))}
          </div>

          <div className="preview">
            <div className="mini"><div className="mini-thumb" /><div><h5>Trending creators</h5><span>Follow your favorites and get new upload alerts</span></div></div>
            <div className="mini"><div className="mini-thumb" /><div><h5>Premium access</h5><span>Unlock member-only collections and playlists</span></div></div>
          </div>
        </aside>

        {/* RIGHT */}
        <section className="auth-panel">
          <div className="top-actions-auth">
            <Link to="/" className="back-link">← Back to Home</Link>
            <span style={{ color: "hsl(var(--muted-foreground))", fontSize: ".82rem" }}>IRU Intima Auth</span>
          </div>

          <div className="tabs">
            <button className={`tab ${activeTab === "login" ? "active" : ""}`} onClick={() => { setActiveTab("login"); setMessage(null); }}>Login</button>
            <button className={`tab ${activeTab === "register" ? "active" : ""}`} onClick={() => { setActiveTab("register"); setMessage(null); }}>Register</button>
          </div>

          <div className="auth-card">
            <h2>{activeTab === "login" ? "Welcome back 👋" : "Create your account ✨"}</h2>
            <p className="subtitle">{activeTab === "login" ? "Log in to your account and continue where you left off." : "Join IRU Intima and personalize your private content experience."}</p>

            {message && <div className={`msg show ${message.type}`}>{message.text}</div>}

            {activeTab === "login" ? (
              <form onSubmit={handleLogin}>
                <div className="row"><div className="field"><label>Email</label><input type="email" placeholder="you@example.com" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} /></div></div>
                <div className="row"><div className="field"><label>Password</label><div className="input-wrap"><input type={showPasswords.login ? "text" : "password"} placeholder="Enter password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} /><button type="button" className="toggle-pass" onClick={() => togglePass("login")}>{showPasswords.login ? "Hide" : "Show"}</button></div></div></div>
                <div className="helper">
                  <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                    <input type="checkbox" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} style={{ accentColor: "hsl(var(--primary))" }} /> Remember me
                  </label>
                  <a href="#" style={{ color: "hsl(var(--accent))" }}>Forgot password?</a>
                </div>
                <button className="iru-btn iru-btn-primary" style={{ width: "100%" }} type="submit">Login</button>
                <div className="divider">or continue with</div>
                <div className="socials"><button type="button" className="iru-btn iru-btn-ghost" style={{ width: "100%" }}>Google</button><button type="button" className="iru-btn iru-btn-ghost" style={{ width: "100%" }}>Apple</button></div>
                <div className="switch-text">Don't have an account? <button type="button" onClick={() => { setActiveTab("register"); setMessage(null); }}>Create one</button></div>
              </form>
            ) : (
              <form onSubmit={handleRegister}>
                <div className="row two"><div className="field"><label>First name</label><input type="text" placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)} /></div><div className="field"><label>Last name</label><input type="text" placeholder="Last name" value={lastName} onChange={e => setLastName(e.target.value)} /></div></div>
                <div className="row"><div className="field"><label>Email</label><input type="email" placeholder="you@example.com" value={regEmail} onChange={e => setRegEmail(e.target.value)} /></div></div>
                <div className="row two"><div className="field"><label>Password</label><div className="input-wrap"><input type={showPasswords.reg ? "text" : "password"} placeholder="Create password" value={regPassword} onChange={e => setRegPassword(e.target.value)} /><button type="button" className="toggle-pass" onClick={() => togglePass("reg")}>{showPasswords.reg ? "Hide" : "Show"}</button></div></div><div className="field"><label>Confirm password</label><div className="input-wrap"><input type={showPasswords.regConfirm ? "text" : "password"} placeholder="Repeat password" value={regConfirm} onChange={e => setRegConfirm(e.target.value)} /><button type="button" className="toggle-pass" onClick={() => togglePass("regConfirm")}>{showPasswords.regConfirm ? "Hide" : "Show"}</button></div></div></div>
                <div className="check"><input type="checkbox" checked={ageConfirm} onChange={e => setAgeConfirm(e.target.checked)} /><label>I confirm I am 18+ and legally allowed to access this platform.</label></div>
                <div className="check"><input type="checkbox" checked={termsConfirm} onChange={e => setTermsConfirm(e.target.checked)} /><label>I agree to the Terms of Service and Privacy Policy.</label></div>
                <button className="iru-btn iru-btn-primary" style={{ width: "100%" }} type="submit">Create Account</button>
                <div className="switch-text">Already have an account? <button type="button" onClick={() => { setActiveTab("login"); setMessage(null); }}>Sign in</button></div>
              </form>
            )}

            <div className="footer-note">Demo UI only. Connect this page to your backend for real authentication.</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
