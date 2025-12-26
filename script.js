 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/script.js b/script.js
new file mode 100644
index 0000000000000000000000000000000000000000..e0757c3b40ba9958e4909cf1d10200557223f61a
--- /dev/null
+++ b/script.js
@@ -0,0 +1,37 @@
+const targetDate = new Date("2025-06-01T17:00:00");
+
+const timeParts = {
+  days: document.querySelector("#days"),
+  hours: document.querySelector("#hours"),
+  minutes: document.querySelector("#minutes"),
+  seconds: document.querySelector("#seconds"),
+};
+
+const padTime = (value) => String(value).padStart(2, "0");
+
+const updateCountdown = () => {
+  const now = new Date();
+  const diff = targetDate - now;
+
+  if (diff <= 0) {
+    timeParts.days.textContent = "00";
+    timeParts.hours.textContent = "00";
+    timeParts.minutes.textContent = "00";
+    timeParts.seconds.textContent = "00";
+    return;
+  }
+
+  const totalSeconds = Math.floor(diff / 1000);
+  const days = Math.floor(totalSeconds / 86400);
+  const hours = Math.floor((totalSeconds % 86400) / 3600);
+  const minutes = Math.floor((totalSeconds % 3600) / 60);
+  const seconds = totalSeconds % 60;
+
+  timeParts.days.textContent = padTime(days);
+  timeParts.hours.textContent = padTime(hours);
+  timeParts.minutes.textContent = padTime(minutes);
+  timeParts.seconds.textContent = padTime(seconds);
+};
+
+updateCountdown();
+setInterval(updateCountdown, 1000);
 
EOF
)
