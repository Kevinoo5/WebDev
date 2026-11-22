<template>
  <div class="login">
    <Header />
    <div class="pagecontent">
      <div class="middlebox">
        <form @submit.prevent="handleSubmit" class="signup-form">
          <div class="form-row">
            <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          >
          </div>
          <br>
          <div class="form-row">
            <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            v-model="password"
            required>
          <br>
          </div>
          <div v-if="validationMessage" class="error-message">
            {{ validationMessage }}
          </div>
          <button class="button" type="submit">Signup</button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Signup",
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      email: "",
      password: "",
      submitted: false,
    };
  },
  computed: {
    failedPasswordChecks() {
      const pwd = this.password;
      const errors = [];
      
      if (!(pwd.length >= 8 && pwd.length < 15)) {
        errors.push("Password must be at least 8 characters and less than 15 characters");
      }
      if (!/[A-Z]/.test(pwd)) {
        errors.push("Password at least one uppercase alphabet character");
      }
      const lowercaseMatches = pwd.match(/[a-z]/g);
      if (!lowercaseMatches || lowercaseMatches.length < 2) {
        errors.push("Password at least two lowercase alphabet characters");
      }
      if (!/[0-9]/.test(pwd)) {
        errors.push("Password at least one numeric value");
      }
      if (!/^[A-Z]/.test(pwd)) {
        errors.push("Password should start with an uppercase letter");
      }
      if (!pwd.includes("_")) {
        errors.push('Password should include the character "_"');
      }

      return errors;
    },
    validationMessage() {
      if (!this.submitted || this.failedPasswordChecks.length === 0) {
        return "";
      }
      return `Password is not valid - ${this.failedPasswordChecks.join("; ")}`;
    },
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      if (this.failedPasswordChecks.length === 0) {
        console.log("Valid signup");
        this.$router.push("/");
      }
    },
  },
};
</script>
