import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../api";

const GeneratePackageCodesPage = () => {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [generatedCodes, setGeneratedCodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch available packages
    const fetchPackages = async () => {
      try {
        const res = await axios.get(`${url}package`); // Update this URL as needed
        console.log("res package", res.data);
        setPackages(res.data);
      } catch (err) {
        console.error("Failed to fetch packages:", err);
      }
    };

    fetchPackages();
  }, []);

  const handleGenerate = async () => {
    if (!selectedPackage || quantity < 1) return;

    setLoading(true);
    setMessage("");
    setGeneratedCodes([]);

    try {
      const res = await axios.post(`${url}code/generate-code`, {
        packageId: selectedPackage,
        quantity,
      });

      setMessage(res.data.message);
      setGeneratedCodes(res.data.codes);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-8">
      <h1 className="text-2xl font-bold mb-4">Generate Package Codes</h1>

      <div className="mb-4">
        <label className="block font-medium mb-1">Select Package</label>
        <select
          className="w-full p-2 border rounded"
          value={selectedPackage}
          onChange={(e) => setSelectedPackage(e.target.value)}
        >
          <option value="">-- Select Package --</option>
          {packages.map((pkg) => (
            <option key={pkg._id} value={pkg._id}>
              {pkg.name} - ₦{pkg.price}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Quantity</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
      </div>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        onClick={handleGenerate}
        disabled={loading || !selectedPackage}
      >
        {loading ? "Generating..." : "Generate Codes"}
      </button>

      {message && (
        <p className="mt-4 text-sm text-gray-700 font-medium">{message}</p>
      )}

      {generatedCodes.length > 0 && (
        <div className="mt-4">
          <h2 className="font-semibold mb-2">Generated Codes:</h2>
          <ul className="space-y-1">
            {generatedCodes.map((code, index) => (
              <li key={index} className="bg-gray-100 p-2 rounded font-mono">
                {code}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GeneratePackageCodesPage;
