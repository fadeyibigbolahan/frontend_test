// ReferralOrgNode.js
import React from "react";
import { TreeNode } from "react-organizational-chart";

const ReferralOrgNode = ({ node }) => {
  return (
    <TreeNode
      label={
        <div className="bg-white shadow p-2 rounded-md text-sm text-center border border-gray-300">
          <strong>{node.username}</strong>
          <div>BV: {node.bv}</div>
          <div>Direct Acc BV: {node.totalBV}</div>
        </div>
      }
    >
      {node.referrals.map((child) => (
        <ReferralOrgNode key={child.username} node={child} />
      ))}
    </TreeNode>
  );
};

export default ReferralOrgNode;
