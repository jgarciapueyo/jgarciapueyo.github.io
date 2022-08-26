import React from "react";

const PositionCard: React.FC<{ position: any }> = ({ position }: any) => (
    <div>
        <h3>{position.title}</h3>
        <h6>{position.company}</h6>
        <span><time>{position.startDate}</time> - <time>{position.endDate}</time></span>
        {position.description !== undefined && (
            <p>{position.description}</p>
        )}
    </div>
);

export default PositionCard;