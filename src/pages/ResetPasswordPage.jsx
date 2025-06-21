import React, { useState } from "react";
import axios from "axios";
import { url } from "../../api";

const ResetPasswordPage = () => {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();

    if (!username || !newPassword) {
      setStatusMessage("Please fill in both fields.");
      return;
    }

    setLoading(true);
    setStatusMessage("");

    try {
      const response = await axios.put(`${url}users/reset-password`, {
        username,
        newPassword,
      });

      if (response.data.success) {
        setStatusMessage("✅ Password reset successful!");
      } else {
        setStatusMessage("❌ " + response.data.message);
      }
    } catch (err) {
      console.error(err);
      setStatusMessage(
        err.response.data.message ||
          "❌ Failed to reset password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>

        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block font-medium">Username</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-medium">New Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 p-2 rounded"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        {statusMessage && (
          <p className="mt-4 text-center text-sm text-red-500">
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordPage;
