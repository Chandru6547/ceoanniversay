import React, { useState } from "react";

export default function App() {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const codeMessage = `public class CEOAnniversaryVisit {

    public static void main(String[] args) {

        String employeeName = "Your Loyal Employee";
        int distanceToSirHome = 35; // in KM
        double walletBalance = 12.50; // very dangerous value 😅

        boolean wantsToWishInPerson = true;
        boolean transportationAffordable = false;

        System.out.println("Respected CEO Sir 🙏,");

        if (wantsToWishInPerson && !transportationAffordable) {
            System.out.println("We truly want to attend your Wedding Anniversary celebration in person 🎉");
            System.out.println("But current wallet version does not support travel expenses 😢");
            System.out.println("Distance to destination is greater than wallet capacity 💸");
            System.out.println("Requesting possible solution: Lift | Travel Allowance | Teleportation Device 🚀");
        }

        System.out.println("Otherwise, we will celebrate virtually with full happiness and zero budget 😄");

        System.out.println("Thank you for understanding, Sir.");
        System.out.println(employeeName + " ☕");
    }
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>CEO Wedding Anniversary Wish Generator</h1>
        <p style={styles.subtitle}>
          Because respect is high… but wallet balance is low
        </p>

        <div style={styles.buttonRow}>
          <button
            style={{ ...styles.button, ...styles.primaryBtn }}
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? "Hide Message" : "Generate Anniversary Wishes"}
          </button>

          {showCode && (
            <button
              style={{ ...styles.button, ...styles.secondaryBtn }}
              onClick={copyToClipboard}
            >
              {copied ? "Copied! ✅" : "Copy Code"}
            </button>
          )}
        </div>

        {showCode && (
          <div style={styles.codeContainer}>
            <pre style={styles.pre}>
              <code>{codeMessage}</code>
            </pre>
          </div>
        )}

        <div style={styles.footer}>
          Made with 😂 + Respect + Broke Engineers Association
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Segoe UI, sans-serif",
    padding: "20px",
  },
  card: {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "30px",
    width: "100%",
    maxWidth: "900px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    animation: "fadeIn 0.6s ease-in-out",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    marginBottom: "10px",
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "25px",
  },
  buttonRow: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  button: {
    padding: "12px 20px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  },
  primaryBtn: {
    background: "#4f46e5",
    color: "white",
  },
  secondaryBtn: {
    background: "#10b981",
    color: "white",
  },
  codeContainer: {
    background: "#0d1117",
    borderRadius: "15px",
    padding: "20px",
    overflowX: "auto",
    boxShadow: "inset 0 0 20px rgba(0,0,0,0.4)",
  },
  pre: {
    color: "#00ff9f",
    margin: 0,
    fontSize: "14px",
    lineHeight: "1.6",
  },
  footer: {
    textAlign: "center",
    marginTop: "25px",
    color: "#777",
    fontSize: "14px",
  },
};
