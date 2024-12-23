import { skills } from "../../assets/skills.js";

export default function Skills() {
    return (
        <div className="skills">
            {skills.map((skill, index) => (
                <div key={index} className="skill">
                    <div>{skill.title}</div>
                        {skill.content.map((content, index) => (
                            <div key={index}>{content},</div>
                        ))}
                </div>
            ))}
        </div>
    );
}