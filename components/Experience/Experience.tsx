import React from 'react';
import { experience } from '../../data/config';
import PositionCard from '../PositionCard/PositionCard';

const Experience: React.FC<{}> = () => {
    if (experience.length === 0) {
        return null;
    }

    return (
        <section>
            <h2>Experience</h2>

            <div>
                <ol>
                    <li>
                        {experience.map((position) => (
                            <PositionCard key={position.company.concat(position.title)} position={position}/>
                        ))}
                    </li>
                </ol>
            </div>
        </section>
    )
}

export default Experience;