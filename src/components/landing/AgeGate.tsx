import React from "react";
import { Lock } from "lucide-react";

interface AgeGateProps {
  onVerify: () => void;
}

export const AgeGate: React.FC<AgeGateProps> = ({ onVerify }) => {
  return (
    <div className="age-modal show">
      <div className="age-card">
        <div className="eyebrow">
          <Lock size={16} /> Privacy & Age Check
        </div>
        <h3>Welcome to IRU Intima</h3>
        <p>
          This platform is intended for adults only. By continuing, you confirm you are 18+ and agree to follow local laws and the platform terms.
        </p>
        <div className="age-actions">
          <button className="iru-btn iru-btn-accent" onClick={onVerify}>
            I am 18+ — Enter
          </button>
          <button className="iru-btn iru-btn-ghost" onClick={() => window.history.back()}>
            Leave
          </button>
        </div>
      </div>
    </div>
  );
};
