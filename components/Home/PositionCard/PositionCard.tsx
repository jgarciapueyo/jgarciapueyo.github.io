import React from "react";

const PositionCard: React.FC<{ position: any }> = ({ position }: any) => (
    <div className="text-left">
        {/*TODO: transform into shadow grey the date */}
        <span className="text-sm text-bgText"><time>{position.startDate}</time> - <time>{position.endDate}</time></span>
        <h3 className="text-xl text-primary mt-1 mb-1">{position.title}</h3>
        <h6 className="text-md text-black mb-0.5">{position.company}</h6>
        {position.description !== undefined && (
            <p className="text-justify text-bgText">{position.description}</p>
        )}
    </div>
);

export default PositionCard;