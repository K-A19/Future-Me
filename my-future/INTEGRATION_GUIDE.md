# Quick Integration Guide

## Files Created/Updated

### ✅ Core Scoring System
- `src/utils/scoringSystem.js` - Complete scoring logic with all choice mappings
- `src/hooks/useGameScoring.js` - Custom React hook for state management

### ✅ Updated UI Components
- `src/pages/Home.jsx` - Stat bars changed to Savings, Happiness, Money Smarts
- `src/pages/School.jsx` - Stat bars changed to Savings, Happiness, Money Smarts
- `src/pages/Grocery.jsx` - Stat bars changed to Savings, Happiness, Money Smarts
- `src/pages/Office.jsx` - Stat bars changed to Savings, Happiness, Money Smarts
- `src/index.css` - Added `.stat-value` styling for numeric values

### 📖 Documentation
- `SCORING_SYSTEM.md` - Complete teaching philosophy and point value explanations

---

## How to Use in Your Game Component

### 1. Import the Hook
```javascript
import { useGameScoring } from '../hooks/useGameScoring';
```

### 2. Initialize in Your Component
```javascript
const MyGameComponent = () => {
  const { stats, makeChoice, completeGame, endGameResult } = useGameScoring();
  
  // ... rest of component
};
```

### 3. Handle User Choices
```javascript
const handleChoiceClick = (choiceId, stepNumber) => {
  makeChoice(choiceId, stepNumber);  // Stats automatically update!
  // Then advance to next step or show feedback
};
```

### 4. Display Current Stats
```javascript
<div className="stat-display">
  <div>💰 Savings: ${stats.savings}</div>
  <div>😊 Happiness: {stats.happiness}</div>
  <div>🧠 Money Smarts: {stats.moneySmarts}</div>
</div>
```

### 5. End Game & Show Results
```javascript
const handleGameComplete = () => {
  completeGame();  // Calculates final result
  // Now endGameResult contains: {title, message, emoji, color, stats}
  showResults(endGameResult);
};
```

---

## Scoring Functions Reference

### `applyChoiceScore(currentStats, choiceId)`
- **Input:** Current stats object + choice ID from scenario
- **Output:** Updated stats with constraints applied
- **Auto-runs:** Min = 0, Max = 200 for each stat
- **Example:**
```javascript
const newStats = applyChoiceScore(
  { savings: 100, happiness: 100, moneySmarts: 0 },
  'cook'  // Result: +5 savings, +5 happiness, +8 smarts
);
```

### `calculateEndGameResult(finalStats)`
- **Input:** Final stats object after all choices
- **Output:** Object with title, message, emoji, color, and final stats
- **Example:**
```javascript
const result = calculateEndGameResult(finalStats);
// {
//   title: '💎 Financial Champion!',
//   message: 'You found the perfect balance...',
//   emoji: '🎉',
//   color: '#FFD700',
//   stats: { savings: 150, happiness: 140, moneySmarts: 80, ... }
// }
```

---

## Choice Scoring Quick Reference

### Highest Impact Choices (Most Important Lessons)

**Work Scenario - First Payment (Spend vs Save)**
- `spend`: -25 savings, +12 happiness, -5 smarts (Teaches impulse = wrong)
- `save`: +30 savings, +6 happiness, +15 smarts (Teaches saving first = right)

**Work Scenario - Save for Goal**
- `goal`: +25 savings, +8 happiness, +15 smarts (Teaches purpose-driven saving)
- `forget`: -10 savings, +12 happiness, +0 smarts (Teaches drifting = failing)

**Work Scenario - Second Payment (Split vs Spend All)**
- `split`: +20 savings, +10 happiness, +12 smarts (PERFECT BALANCE)
- `spend_all`: -20 savings, +14 happiness, -3 smarts (Back to zero)

---

## Stat Ranges & Thresholds

All stats range from **0 to 200**

| Stat | Start | "High" Threshold | "Low" Threshold |
|------|-------|------------------|-----------------|
| Savings | $100 | ≥ $120 | ≤ $80 |
| Happiness | 100 | ≥ 120 | ≤ 80 |
| Money Smarts | 0 | ≥ 120 | ≤ 80 |

### End Game Result Categories
- **High Savings + High Happiness** → "Financial Champion" ⭐
- **High Savings + Low Happiness** → "The Saver" 💰
- **Low Savings + High Happiness** → "The Enjoyer" 🎉
- **Low Savings + Low Happiness** → "Room to Grow" 🤔
- **Balanced or Other** → "Good Start!" ✨

If **High Money Smarts**, adds bonus tip about learning.

---

## All Choice IDs (For Reference)

### HOME Scenario
`delivery`, `cook`, `buy_snack`, `home_snack`, `clean_now`, `later`, `buy_now`, `wait_24`, `new_game`, `use_free`, `leave_on`, `turn_off`, `brand_new`, `swap_reuse`, `save_some`, `spend_some`, `start_trial`, `skip_trial`, `proud`, `learned`

### GROCERIES Scenario
`snacks`, `produce`, `soda`, `water`, `instant`, `cook`, `bulk`, `treat`, `budget`, `extra`, `store_brand`, `name_brand`

### SCHOOL Scenario
`pack_lunch`, `buy_lunch`, `bring_supplies`, `forget_supplies`, `do_homework`, `play_games`, `buy_item`, `wait`, `hang_out`, `stay_home`, `prepared`, `overwhelmed`

### WORK Scenario
`spend`, `save`, `go_out`, `stay_in`, `buy`, `wait`, `goal`, `forget`, `split`, `spend_all`, `reflect`, `regret`

---

## Design Philosophy Reminder

The scoring system teaches:

1. **Balance is the Goal** - High savings + high happiness = winning
2. **Extremes Have Costs** - All saving or all spending = losing
3. **Smart Choices Improve Everything** - Balanced choices boost all 3 stats
4. **Learning Matters** - Even "bad" choices teach Money Smarts
5. **No Shame, Only Growth** - Encouraging language in all results

This is fundamentally different from typical money games that only reward saving. It teaches kids that **financial literacy = responsibility + happiness**, not one or the other.
