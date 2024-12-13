import React from "react";

interface SkillProps {
  skills: string[];
}

export default function Skill({ skills }: SkillProps) {
  return (
    <div className="container mx-auto p-2 text-center">
      <h2 className="text-blue font-bold text-2xl mb-4">Skills</h2>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="border-2 border-indigo-400/75 rounded-lg bg-blue-300 p-2 my-5"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-1">
              <div className="col-span-12">{skill}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
