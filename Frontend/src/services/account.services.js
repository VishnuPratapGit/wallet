class AccountService {
  async transferAmount(details) {
    console.log(details);
    try {
      const response = await fetch("/api/v1/account/transfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });

      const result = await response.json();

      console.log(result);
    } catch (error) {
      console.log("Somthing went wrong!", error);
    }
  }

  async getBalance() {
    try {
      const response = await fetch("/api/v1/account/balance");

      const result = await response.json();

      if (!result) {
        console.log("Problem in fetching balace.");
      }

      return result;
    } catch (error) {
      console(error);
    }
  }
}

const accountService = new AccountService();

export default accountService;
