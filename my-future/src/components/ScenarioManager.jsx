import React, { useState } from 'react';
import ScenarioModal from './ScenarioModal';
import ScenarioCard from './ScenarioCard';
import './ScenarioManager.css';

// Import scenario data
import homeScenario from '../../public/scenarios/home.json';
import schoolScenario from '../../public/scenarios/school.json';
import groceryScenario from '../../public/scenarios/groceries.json';
import workScenario from '../../public/scenarios/work.json';

/**
 * ScenarioManager - Displays available scenarios as cards and manages modal state
 */
const ScenarioManager = () => {
  const [activeScenario, setActiveScenario] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const scenarios = [
    {
      key: 'home',
      data: homeScenario,
      title: 'HOME ADVENTURE',
      description: 'Make smart financial choices at home and earn Money Smarts!',
      emoji: '🏠',
      color: '#FF6B6B',
    },
    {
      key: 'grocery',
      data: groceryScenario,
      title: 'FOOD ADVENTURE',
      description: 'Smart shopping means more savings and happiness!',
      emoji: '🛒',
      color: '#4ECDC4',
    },
    {
      key: 'school',
      data: schoolScenario,
      title: 'SCHOOL ADVENTURE',
      description: 'Balance studying and fun - earn rewards!',
      emoji: '📚',
      color: '#45B7D1',
    },
    {
      key: 'work',
      data: workScenario,
      title: 'EARN ADVENTURE',
      description: 'Learn to save, spend, and achieve goals!',
      emoji: '💼',
      color: '#FFA502',
    },
  ];

  const handleStartScenario = (scenario) => {
    setActiveScenario(scenario);
    setCurrentStep(0);
  };

  const handleChoiceMade = (choiceId) => {
    const scenario = activeScenario;
    const nextStep = currentStep + 1;

    if (nextStep < scenario.data.steps.length) {
      setCurrentStep(nextStep);
    } else {
      // Scenario complete
      handleScenarioComplete();
    }
  };

  const handleScenarioComplete = () => {
    setActiveScenario(null);
    setCurrentStep(0);
  };

  const handleCloseModal = () => {
    setActiveScenario(null);
    setCurrentStep(0);
  };

  return (
    <div className="scenario-manager">
      {/* Scenario Cards Grid */}
      <div className="scenarios-grid">
        {scenarios.map((scenario) => (
          <ScenarioCard
            key={scenario.key}
            title={scenario.title}
            description={scenario.description}
            emoji={scenario.emoji}
            color={scenario.color}
            onClick={() => handleStartScenario(scenario)}
          />
        ))}
      </div>

      {/* Scenario Modal */}
      {activeScenario && (
        <ScenarioModal
          scenario={activeScenario.data}
          step={activeScenario.data.steps[currentStep]}
          stepNumber={currentStep + 1}
          totalSteps={activeScenario.data.steps.length}
          onChoiceMade={handleChoiceMade}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ScenarioManager;
