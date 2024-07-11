import { ProjectType } from '../utils/types';

interface ProjectProps {
  project: ProjectType;
}

const Project = ({ project }: ProjectProps) => {
  const { image, url, title } = project;

  return (
    <a className="project" href={url} target="_blank" rel="noreferrer">
      <img className="img" src={image} alt={title} />
      <h5>{title}</h5>
    </a>
  );
};

export default Project;
