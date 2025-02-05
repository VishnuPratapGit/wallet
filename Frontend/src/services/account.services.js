class AccountService {
  constructor() {
    this.BASE_URL = import.meta.env.VITE_API_URL;
  }

  async transferAmount(details) {
    try {
      const response = await fetch(`${this.BASE_URL}/api/v1/account/transfer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(details),
      });

      const result = await response.json();

      if (!response.ok) {
        console.log(result);
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.log("Something went wrong!", error);
      return false;
    }
  }

  async getBalance() {
    try {
      const response = await fetch(`${this.BASE_URL}/api/v1/account/balance`, {
        method: "GET",
        credentials: "include",
      });

      const result = await response.json();

      if (!result) {
        console.log("Problem in fetching balance.");
      }

      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async getTransactionHistory(skipedDocuments, limit) {
    try {
      const skip = skipedDocuments || 0;

      const response = await fetch(
        `${this.BASE_URL}/api/v1/account/transaction-history?skip=${skip}&limit=${limit}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return null;
      } else {
        return data;
      }
    } catch (error) {
      console.log("Error in fetching transaction history.", error);
    }
  }
}

const accountService = new AccountService();

export default accountService;
