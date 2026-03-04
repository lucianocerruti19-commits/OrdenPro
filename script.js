// 🔐 CONFIGURACIÓN SUPABASE
const supabaseUrl = "uumzxwtlvvqnmiwbrjly";
const supabaseKey = "uumzxwtlvvqnmiwbrjly";

const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey);

// 🎯 LOGIN
document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await client.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    alert("Error: " + error.message);
  } else {
    alert("Login exitoso 🚀");
    console.log("Usuario:", data.user);
  }
});