import NavigationBar from "./NavigationBar";

interface Props {
  children: React.ReactNode;
}

const ProjectPageLayout = ({ children }: Props) => {
  return (
    <>
      <NavigationBar />
      <main className="ml-20">{children}</main>
    </>
  );
};

export default ProjectPageLayout;
