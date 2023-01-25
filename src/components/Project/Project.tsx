// TODO - prop으로 데이터 전달받아서 컴포넌트 재사용
import Link from 'next/link';
import { Project } from '../../models/Project';
import PersonalInfo from './PersonalInfo';
import classes from './Project.module.scss';
import Skills from './Skills';

interface Props {
  project: Project;
}

const Project = ({ project }: Props) => {
  return (
    <div className="flex relative md:flex-row flex-col gap-2 w-full">
      <div className={`${classes.left} md:sticky self-start top-4`}>
        <h2 className="font-bold text-3xl py-1 break-all">{project.title}</h2>
        {/** TODO - Date format 후 사용하기 */}
        <p className="pt-4 text-zinc-400">
          {project.startDate} ~ {project.endDate || '진행 중'}
        </p>
        <PersonalInfo links={project.links} />
      </div>
      <div className={`${classes.right} break-all`}>
        {/** Project Image */}
        <h3 className="font-bold text-xl mb-4 break-all">
          {project.introduction}
        </h3>
        <ul className="my-4 list-disc pl-4">
          {project.description.map((description) =>
            typeof description === 'string' ? (
              <li key={description} className="py-1">
                {description}
              </li>
            ) : (
              <li key={description.name} className="py-1">
                {description.name}
              </li>
            )
          )}
        </ul>
        {/** 기술 스택 */}
        <Skills skills={project.skills} />
        {project.otherLinks ? (
          <h3 className="font-bold text-xl my-4">링크</h3>
        ) : null}
        {project.otherLinks ? (
          <ul className="list-disc pl-4">
            {project.otherLinks.map((link) => (
              <li key={link.url} className="py-1">
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        ) : null}
        Project Component
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
        <p>long text</p>
      </div>
    </div>
  );
};

export default Project;
