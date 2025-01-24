class AuthServices {
  async login(inputData) {
    try {
      const response = await fetch("/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        return result;
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.log("Request not sent: ", error);
    }
  }

  async signup(inputData) {
    try {
      const response = await fetch("/api/v1/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
        return result;
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  }

  async fetchAllUsers() {
    try {
      const response = await fetch("/api/v1/users/all");

      if (response.ok) {
        const result = await response.json();
        console.log("User successfully fetched:", result);
        return result;
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  }

  async logout() {
    fetch("api/v1/users/logout")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => console.log("Error in Logout", err));
  }
}

const authServices = new AuthServices();

export default authServices;
