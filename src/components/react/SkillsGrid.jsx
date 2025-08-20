import { markdownify } from "@/lib/utils/textConverter";

const SkillsGrid = ({ skill_categories }) => {
  return (
    <div className="key-feature-grid mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
      {skill_categories.map((category, i) => {
        return (
          <div
            key={i}
            className="flex flex-col justify-between rounded-lg bg-surface p-6 shadow-lg hover:shadow-xl hover:shadow-secondary/50 transition-all hover:scale-105 h-full"
          >
            <div>
              <h3 className="text-lg font-semibold mb-4 text-text">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsGrid;
