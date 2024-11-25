import { experience } from "../assets/experience.js";
import { education } from "../assets/education.js";

interface ResumeItem {
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

const ResumeItem: React.FC<ResumeItem> = ({
  title,
  organization,
  location,
  startDate,
  endDate,
  description,
}) => {
  return (
    <section>
      <p>{title}</p>
      <ul>
        <li>
          <div>{organization}</div>
          <div>{location}</div>
        </li>
        <li>
          {startDate} - {endDate}
        </li>
        <li>
          <ul>
            {description.map((desc: string) => (
              <li>{desc}</li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default function Resume() {
  return (
    <div>
      {/** Title */}
      <section>
        <p>Resume</p>
      </section>

      {/** Education */}
      <section>
        <p>Education</p>
        {education.map((data) => (
          <ResumeItem
            title={data.title}
            organization={data.organization}
            location={data.location}
            startDate={data.startDate}
            endDate={data.endDate}
            description={data.description}
          />
        ))}
      </section>

      {/** Experience */}
      <section>
        <p>Experience</p>
        {experience.map((data) => (
          <ResumeItem
            title={data.title}
            organization={data.organization}
            location={data.location}
            startDate={data.startDate}
            endDate={data.endDate}
            description={data.description}
          />
        ))}
      </section>
    </div>
  );
}
