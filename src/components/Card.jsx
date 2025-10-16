import { Bookmark } from "lucide-react";
const Card = () => {
  return (
    <>
      <div className="card">
        <div className="top">
          <img
            src="data:image/png;base64,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"
            alt="amazon pic"
          />
          <button>
            Save <Bookmark />
          </button>
        </div>
        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>
          </h3>
          <h2>UI/UX Designer</h2>
          <div>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply Now!</button>
        </div>
      </div>
    </>
  );
};

export default Card;
