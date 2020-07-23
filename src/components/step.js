import React from 'react'

export default function Step(step) {
    console.log("step component", step)
    return (
        <li key={step.id}>
            <h2>{step.title}</h2>
            <p>
                {step.description}
            </p>
            <span>
                {step.imgs.map((item, index) => (
                    <img src={item} alt={step.title} />
                ))}
            </span>
        </li>
    );
}