import React, { useState } from "react";
import SelectOption from "./SelectOption";
import TopicInput from "./TopicInput";

export default function ParentComponent() {
  const [selectedStudyType, setSelectedStudyType] = useState(null);
  const [step, setStep] = useState(1);
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [subTopic, setSubTopic] = useState("");

  const handleStudyType = (type) => {
    setSelectedStudyType(type);
    setStep(2);
  };

  const handleSubmit = () => {
    console.log({ selectedStudyType, subTopic, topic, difficulty });

  };

  return (
    <div className="container mx-auto p-6">
      {step === 1 && <SelectOption selectedStudyType={handleStudyType} />}

      {step === 2 && (
        <div>
          <h2 className="text-center mb-4 text-lg">
            Pilih atau masukkan topik untuk “{selectedStudyType}”
          </h2>
          <TopicInput
            studyType={selectedStudyType}
            setTopic={setTopic}
            setDifficultyLevel={setDifficulty}
            setSubTopic={setSubTopic}
          />

          <button
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
