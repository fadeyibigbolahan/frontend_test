import React, { useState } from "react";
import axios from "axios";
import { url } from "../../api";

const PaymentPage = () => {
  const [amount, setAmount] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Simple validation
    if (!amount || !bankName || !accountNumber || !accountName) {
      setError("Please fill in all the fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${url}transactions/withdrawal`,
        {
          amount,
          accountDetails: `${bankName}, ${accountNumber}, ${accountName}`,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`, // Assuming the token is stored in localStorage
          },
        }
      );

      setSuccess("Withdrawal request submitted successfully.");
      setAmount("");
      setBankName("");
      setAccountNumber("");
      setAccountName("");
    } catch (err) {
      // console.log("error", err.response?.data?.message);
      setError(
        err.response?.data?.message ||
          "An error occurred while submitting your request."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Withdrawal Request
      </h2>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      {success && (
        <div className="text-green-500 text-center mb-4">{success}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount (in Naira)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="bankName"
            className="block text-sm font-medium text-gray-700"
          >
            Bank Name
          </label>
          <select
            id="bankName"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          >
            <option value="">Select a Bank</option>
            <option value="First Bank">First Bank</option>
            <option value="Access Bank">Access Bank</option>
            <option value="Zenith Bank">Zenith Bank</option>
            <option value="GT Bank">GT Bank</option>
            <option value="UBA">UBA</option>
            <option value="Union Bank">Union Bank</option>
            <option value="Fidelity Bank">Fidelity Bank</option>
            <option value="Ecobank">Ecobank</option>
            <option value="Stanbic IBTC">Stanbic IBTC</option>
            <option value="Wema Bank">Wema Bank</option>
            <option value="Heritage Bank">Heritage Bank</option>
            <option value="Keystone Bank">Keystone Bank</option>
            <option value="Polaris Bank">Polaris Bank</option>
            <option value="Standard Chartered Bank">
              Standard Chartered Bank
            </option>
            <option value="Citibank Nigeria">Citibank Nigeria</option>
            <option value="Jaiz Bank">Jaiz Bank</option>
            <option value="Unity Bank">Unity Bank</option>
            <option value="Opay Bank">Opay Bank</option>
            <option value="Palmpay Bank">Palmpay Bank</option>
            <option value="Moniepoint Bank">Moniepoint Bank</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="accountNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Account Number
          </label>
          <input
            type="number"
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="accountName"
            className="block text-sm font-medium text-gray-700"
          >
            Account Name
          </label>
          <input
            type="text"
            id="accountName"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-2 mt-4 text-white rounded-md ${
            loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
          } focus:outline-none`}
        >
          {loading ? "Processing..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
