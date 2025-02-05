class AuthServices {
  constructor() {
    this.BASE_URL = import.meta.env.VITE_API_URL;
  }

  async login(inputData) {
    try {
      const response = await fetch(`${this.BASE_URL}/api/v1/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      const result = await response.json();

      if (!response.ok) {
        console.log(result.message);
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.log("Request not sent: ", error);
    }
  }

  async getCurrentUser() {
    try {
      const response = await fetch(`${this.BASE_URL}/api/v1/users/getuser`, {
        method: "GET",
        credentials: "include",
      });

      const userData = await response.json();

      if (!response.ok) {
        console.log(userData.message);
        return null;
      } else {
        return userData;
      }
    } catch (error) {
      console.log("Failed to fetch user data", error);
      return null;
    }
  }

  async signup(inputData) {
    try {
      const response = await fetch(`${this.BASE_URL}/api/v1/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      const result = await response.json();

      if (!response.ok) {
        console.log(result.message);
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.error("Network error:", error);
      return false;
    }
  }

  async fetchAllUsers() {
    try {
      const response = await fetch(`${this.BASE_URL}/api/v1/users/all`);

      const result = await response.json();

      console.log(result);
    } catch (error) {
      console.error("Network error:", error);
    }
  }

  async logout() {
    fetch(`${this.BASE_URL}/api/v1/users/logout`)
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
