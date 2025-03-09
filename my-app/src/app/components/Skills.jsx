import CardSkills from "./CardSkills";

export default function Skills() {
  return (
    <div className="mt-20 text-5xl mx-auto w-fit mb-60 scroll-mt-10" id="experience">
      <h1 className="text-center mb-10 ">Experience</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 sm:gap-10 md:gap-12 mx-auto w-fit">
        <CardSkills text={"Html & Css"} image={"/images/html.png"}></CardSkills>
        <CardSkills text={"Javascipt"} image={"/images/js.png"}></CardSkills>
        <CardSkills text={"Tailwind css"} image={"/images/tailwind.png"}></CardSkills>
        <CardSkills text={"Git"} image={"/images/git.png"}></CardSkills>
        <CardSkills text={"MySql"} image={"/images/sql.png"}></CardSkills>
        <CardSkills text={"React"} image={"/images/react.png"}></CardSkills>
        <CardSkills text={"Vue"} image={"/images/vue.png"}></CardSkills>
        <CardSkills text={"Node"} image={"/images/node.png"}></CardSkills>
        {/* alterar img */}
        <CardSkills text={"Figma"} image={"/images/node.png"}></CardSkills>
        <CardSkills text={"Bootstrap"} image={"/images/node.png"}></CardSkills>
      </div>
    </div>
  );
}
