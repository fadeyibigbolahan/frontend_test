// BVReferralTreeChart.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tree } from "react-organizational-chart";
import ReferralOrgNode from "../components/RefferalOrgNode";
import { useAuth } from "../contexts/AuthContext";
import { url } from "../../api";

const MyBVPage = () => {
  const [tree, setTree] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchTree = async () => {
      try {
        const response = await axios.get(
          `${url}users/bv-referral-tree/${user?.username}`,
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        setTree(response.data.tree);
      } catch (error) {
        console.error("Error fetching tree:", error);
      }
    };

    fetchTree();
  }, [user]);

  return (
    <div className="overflow-auto p-6">
      <h2 className="text-xl font-bold mb-4">
        BV Referral Tree for {user?.username}
      </h2>
      {tree ? (
        <Tree
          lineWidth={"2px"}
          lineColor={"#ccc"}
          lineBorderRadius={"10px"}
          label={
            <div className="bg-blue-100 p-3 rounded shadow-md text-center border border-blue-300">
              <strong>{tree.username}</strong>
              <div>BV: {tree.bv}</div>
              <div>Direct Acc BV: {tree.totalBV}</div>
            </div>
          }
        >
          {tree.referrals.map((child) => (
            <ReferralOrgNode key={child.username} node={child} />
          ))}
        </Tree>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyBVPage;
