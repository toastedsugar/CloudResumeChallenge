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
    <section className="resume-item">
      <p className="resume-item-title">{title}</p>
      <div className="resume-item-info" >
        <div className="resume-item-org">{organization}</div>, {'U+0009'}
        <div className="resume-item-location">{location}</div>
        {startDate} - {endDate}
      </div> 
      {description.map((desc: string) => (
        <li className="resume-item-description">{desc}</li>
      ))}
    </section>
  );
};
const Resume = () => {
  return (
    <div className="resume-content-wrapper">
      <div className="resume-menu">
        <p className="resume-menu-item">File</p>
        <p className="resume-menu-item">Edit</p>
        <p className="resume-menu-item">View</p>
        <p className="resume-menu-item">Help</p>
      </div>
      <div className="resume-content">
        <div>
          {/** Education */}
          <section>
            <p className="resume-item-header">Education</p>
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
            <p className="resume-item-header">Experience</p>
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
      </div>
    </div>
  );
};

export default Resume;
