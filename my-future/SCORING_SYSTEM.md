# Financial Literacy Game - Scoring System

## Core Philosophy
**Financial literacy means being BOTH responsible AND happy, not choosing one or the other.**

This scoring system teaches kids that:
- Balance is key - you need both savings AND happiness
- Smart choices improve ALL three metrics, not just one
- Extreme choices (all saving or all spending) have real trade-offs
- Small smart choices add up over time
- Saving doesn't mean being miserable
- Spending everything leaves you unprepared

---

## Three Metrics

### 💰 Savings (Starts: $100)
Money saved for future goals. Represents:
- Long-term thinking
- Impulse control
- Planning for the future
- Range: $0 - $200

### 😊 Happiness (Starts: 100)
Overall well-being and life satisfaction. Represents:
- Enjoying the present moment
- Social connections
- Work-life balance
- Range: 0 - 200

### 🧠 Money Smarts (Starts: 0)
Financial knowledge gained through smart choices. Represents:
- Understanding consequences
- Learning financial principles
- Making intentional decisions
- Range: 0 - 200

---

## Scoring Categories

### ✅ Smart Balanced Choices
**Impact: Good Savings, Good Happiness, High Money Smarts**

These are the GOAL choices - they show kids that being responsible can ALSO be enjoyable.

Examples:
- Packing lunch most days instead of always buying or always skipping
- Saving some money but enjoying some treats
- Choosing store brands but not being miserable about it
- Buying in bulk to save money on things you actually need

Point values teach: "You can be smart AND happy!"

---

### ⚠️ Pure Saving (Too Extreme)
**Impact: High Savings, Low Happiness, Moderate Money Smarts**

These choices teach that extreme frugality backfires:
- Never treating yourself
- Always saying no to friends
- Only buying store brand everything
- Skipping any enjoyment

Point values teach: "You're saving well, but don't forget to enjoy life! Financial health includes happiness."

---

### ⚠️ Pure Spending (Too Extreme)
**Impact: Low Savings, High Happiness (short-term), Low Money Smarts**

These choices teach the consequences of impulsive spending:
- Spending entire paycheck immediately
- Impulse buying
- Always buying expensive options
- Not thinking about the future

Point values teach: "You feel good NOW, but future you needs help. This isn't sustainable."

---

### ❌ Poor Choices
**Impact: Low Savings, Low Happiness, Some Money Smarts (learn from mistakes)**

These choices teach that bad decisions lose on both fronts:
- Buying things that don't satisfy
- Chaos shopping
- Forgetting goals
- Wasting money on things you don't want

Point values teach: "This doesn't work - let's try smarter choices next time!"

---

## End Game Results - Reward Balance

### 💎 Financial Champion
**Requirement:** High Savings + High Happiness
**Message:** "You found the perfect balance! You're saving for tomorrow AND enjoying today. That's true financial wisdom."

This is the PRIMARY win condition. Shows kids that balance is the goal.

### 💰 The Saver
**Requirement:** High Savings + Low Happiness
**Message:** "Great savings! But remember - money is a tool for living a good life. You can save AND enjoy experiences."

Friendly nudge toward balance.

### 🎉 The Enjoyer
**Requirement:** Low Savings + High Happiness
**Message:** "You're having fun now, and that's great! But future you will need help. Try saving some while still treating yourself."

Teaches consequence without shame - "you CAN do both!"

### 🤔 Room to Grow
**Requirement:** Low Savings + Low Happiness
**Message:** "It looks like your choices weren't working for either goal. Now you know what NOT to do! Try balancing wants and needs."

Growth mindset - this isn't failure, it's learning.

### ⭐ Bonus: Money Smarts Awareness
**Extra Tip if High Money Smarts:** "You're building real Money Smarts! Keep learning - every choice teaches you something about money."

Rewards learning even if stats aren't perfect.

---

## Choice Examples & Point Values

### HOME SCENARIO

**1. Hungry after school: Order delivery vs Make at home**
- Order delivery: -15 savings, +8 happiness, +2 smarts
  - Fast gratification but expensive
- Make at home: +5 savings, +5 happiness, +8 smarts
  - Smart balanced choice ✓

**4. See cool thing online: Buy now vs Wait 24 hours**
- Buy now: -20 savings, +6 happiness, -2 smarts
  - Impulse = learning the WRONG lesson
- Wait 24 hours: +8 savings, +4 happiness, +10 smarts
  - Smart financial thinking! ✓

**8. Get money (gift/allowance): Save some vs Spend some**
- Save some: +20 savings, +5 happiness, +12 smarts
  - BALANCED CHOICE - teaches that saving can still be happy ✓
- Spend some: -5 savings, +15 happiness, +3 smarts
  - Short-term happiness, building bad habits

---

### WORK SCENARIO (Highest Point Values)

**1. Get paid: Spend vs Save first thought**
- Spend: -25 savings, +12 happiness, -5 smarts
  - Instant gratification mindset
- Save: +30 savings, +6 happiness, +15 smarts
  - INSTANT WISDOM! This teaches core financial literacy ✓

**4. Remember a goal: Save for goal vs Forget**
- Save for goal: +25 savings, +8 happiness, +15 smarts
  - PURPOSE-DRIVEN SAVING - teaches that goals matter! ✓
- Forget: -10 savings, +12 happiness, +0 smarts
  - Drifting without purpose

**5. Get another payment: Save some vs Spend all**
- Save some: +20 savings, +10 happiness, +12 smarts
  - PERFECT BALANCE CHOICE ✓
- Spend all: -20 savings, +14 happiness, -3 smarts
  - Back to zero, no learning

---

## Design Principles

### 1. Balance is Rewarded
The best outcomes require BOTH high savings AND high happiness.

### 2. Extremes Have Costs
- All saving = you're miserable
- All spending = you're unprepared
Both lose!

### 3. Smart Choices Improve Everything
When kids make balanced choices, they gain points in all three areas, not just one.

### 4. Learning Matters
Even "bad" outcomes teach Money Smarts. Kids see that poor choices teach them something.

### 5. No Shame, Only Growth
Results use encouraging language. It's never "you failed" - it's "you learned" or "here's what to try next."

### 6. Early Lessons Stick
The highest point values are on the most important lessons:
- Work scenario: Getting paid should be SAVED (not spent)
- Work scenario: Goals should drive savings decisions
- Home scenario: Impulse control over waiting

---

## How to Use This System

When integrating this into components:

```javascript
import { useGameScoring } from '../hooks/useGameScoring';

const YourGameComponent = () => {
  const { stats, makeChoice, completeGame, endGameResult } = useGameScoring();
  
  // When user clicks a choice
  const handleChoice = (choiceId, stepNumber) => {
    makeChoice(choiceId, stepNumber);
    // Stats automatically updated!
  };
  
  // When scenario ends
  const handleGameEnd = () => {
    completeGame();
    // endGameResult now has the final message and emoji!
  };
};
```

---

## Teaching Moments

This system creates natural teaching moments:

1. **After balanced choices:** "Look! You saved money AND had fun!"
2. **After extreme choices:** "See how extreme choices have trade-offs?"
3. **End results:** The messages explain the WHY behind their stats
4. **Replaying scenarios:** Kids can try different strategies and see results change

## Summary

This scoring system teaches financial literacy by making it clear that:
- ✅ **Responsibility + Happiness = Success**
- ❌ Choosing one extreme over the other = Missing the point
- 🧠 **Learning comes from every choice**
- 🎯 **Balance is the goal, not perfection**
