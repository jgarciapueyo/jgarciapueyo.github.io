import React from "react";

const PositionCard: React.FC<{ position: any }> = ({ position }: any) => (
    <div className="text-left">
        {/*TODO: transform into shadow grey the date */}
        <span className="text-sm text-bgText"><time>{position.startDate}</time> - <time>{position.endDate}</time></span>
        <h3 className="text-xl font-bold text-primary tracking-wide mt-1 mb-1">{position.title}</h3>
        <h4 className="text-md text-primaryText text-black mb-0.5">{position.company}</h4>
        {position.description !== undefined && (
            <p className="text-justify text-bgText">{position.description}</p>
        )}
    </div>
);

export default PositionCard;