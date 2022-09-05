import React from 'react';
import { experience } from '../../../data/config';
import PositionCard from '../PositionCard/PositionCard';

const ExperienceSection: React.FC<{}> = () => {
    if (experience.length === 0) {
        return null;
    }

    return (
        <section id="experience">
            <h2 className='text-center font-bold text-xl text-bgText uppercase mb-2'>Experience</h2>

            <div>
                <ol className='relative border-l-2 border-bgText'>
                    {experience.map((position) => (
                        <li className='my-5 ml-4'>
                            <div className="absolute w-3 h-3 rounded-full -left-[0.400rem] bg-primary"></div>
                            <PositionCard key={position.company.concat(position.title)} position={position} />
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}

export default ExperienceSection;