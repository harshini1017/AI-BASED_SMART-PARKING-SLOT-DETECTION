import React from "react";
import "./SlotGrid2D.css";

export default function SlotGrid2D({ currentFrameSlots, colors }) {
  return (
    <div className="slot-grid">
      {Object.entries(currentFrameSlots).map(([slotId, status]) => (
        <div
          key={slotId}
          className="slot-box"
          style={{
            backgroundColor: colors[status],
          }}
        >
          <span className="slot-label">{slotId}</span>
        </div>
      ))}
    </div>
  );
}
