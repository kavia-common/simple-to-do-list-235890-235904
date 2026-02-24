import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Runs once on initial app load (mount).
    console.log("Welcome to the Simple To-Do List app!");
  }, []);

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", padding: 24 }}>
      <h1 style={{ margin: 0, fontSize: 20 }}>To-Do List</h1>
      <p style={{ marginTop: 8, color: "#64748b" }}>
        Open the browser console to see the welcome message.
      </p>
    </main>
  );
}
