import me from "../assets/me.png";

const AboutMe = () => {
  return (
    <div>
      {/* Card */}
      <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl mb-4">
        {/* Avatar */}
        <img
          src={me}
          alt="Abdellah Karani"
          className="w-12 h-12 rounded-full object-cover"
        />

        {/* Info */}
        <div>
          <p className="text-sm font-medium text-gray-900">Abdellah Karani</p>
          <p className="text-xs text-gray-500">
            Data Scientist · Machine Learning Engineer
          </p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        Passionate about building machine learning solutions that solve
        real-world problems. This project demonstrates salary prediction using a
        Random Forest model with real-world structured data.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {["Python", "scikit-learn", "Random Forest", "React", "Tailwind"].map(
          (tag, i) => (
            <span
              key={i}
              className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ),
        )}
      </div>
    </div>
  );
};

export default AboutMe;
