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
                        <li key={position.company.concat(position.title)} className='mt-5 mb-10 ml-4'>
                            <div className="absolute w-3 h-3 rounded-full -left-[0.400rem] bg-primary"></div>
                            <PositionCard  position={position} />
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}

export default ExperienceSection;