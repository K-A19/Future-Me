/**
 * Financial Literacy Game Scoring System
 * 
 * Teaching kids that financial literacy = responsibility + happiness
 * Rewards balanced choices, teaches consequences of extremes
 */

export const INITIAL_STATS = {
  savings: 100,      // Money saved for future goals ($0-200)
  happiness: 100,    // Well-being and life satisfaction (0-200)
  moneySmarts: 0     // Financial knowledge gained (0-200)
};

/**
 * Choice scoring map - each choice ID maps to stat changes
 * Designed to teach:
 * - Balance is key (both savings AND happiness needed)
 * - Smart choices improve all 3 stats
 * - Extreme choices have trade-offs
 * - Small smart choices add up
 */
export const choiceScoring = {
  // ===== HOME SCENARIO =====
  // Step 1: Order delivery vs make at home
  delivery: { savings: -15, happiness: 8, moneySmarts: 2 },      // Impulse, but happy short term
  cook: { savings: 5, happiness: 5, moneySmarts: 8 },             // Smart balanced choice

  // Step 2: Buy snack vs use what's at home
  buy_snack: { savings: -8, happiness: 7, moneySmarts: 3 },      // Impulse treat
  home_snack: { savings: 3, happiness: 4, moneySmarts: 6 },      // Responsible choice

  // Step 3: Clean now vs do it later
  clean_now: { savings: 0, happiness: 3, moneySmarts: 5 },       // Responsible, feels good
  later: { savings: 0, happiness: -2, moneySmarts: 0 },          // Procrastination, stress

  // Step 4: Buy online thing now vs wait 24 hours
  buy_now: { savings: -20, happiness: 6, moneySmarts: -2 },      // Impulse, instant gratification
  wait_24: { savings: 8, happiness: 4, moneySmarts: 10 },        // Smart financial thinking!

  // Step 5: Buy new game vs play free game
  new_game: { savings: -25, happiness: 10, moneySmarts: 1 },     // Expensive fun
  use_free: { savings: 5, happiness: 6, moneySmarts: 5 },        // Resourceful fun

  // Step 6: Leave things on vs turn off
  leave_on: { savings: -5, happiness: 0, moneySmarts: -2 },      // Wasteful
  turn_off: { savings: 8, happiness: 2, moneySmarts: 5 },        // Mindful budgeting

  // Step 7: Buy new outfit vs reuse/swap
  brand_new: { savings: -30, happiness: 12, moneySmarts: 2 },    // Big spend, feels good
  swap_reuse: { savings: 10, happiness: 6, moneySmarts: 8 },     // Creative & smart

  // Step 8: Save some vs spend some
  save_some: { savings: 20, happiness: 5, moneySmarts: 12 },     // BALANCED CHOICE - teaches that saving can still be happy
  spend_some: { savings: -5, happiness: 15, moneySmarts: 3 },    // Short-term happiness

  // Step 9: Start trial vs skip
  start_trial: { savings: -10, happiness: 5, moneySmarts: 0 },   // Hidden cost awareness gap
  skip_trial: { savings: 5, happiness: 3, moneySmarts: 8 },      // Financial wisdom

  // Step 10: Proud vs learned
  proud: { savings: 0, happiness: 10, moneySmarts: 5 },          // Reflection on choices
  learned: { savings: 5, happiness: 8, moneySmarts: 15 },        // Growth mindset!

  // ===== GROCERIES SCENARIO =====
  // Step 1: Snacks first vs produce first
  snacks: { savings: -12, happiness: 8, moneySmarts: 0 },        // Impulse shopping
  produce: { savings: 8, happiness: 4, moneySmarts: 7 },         // Planning-focused

  // Step 2: Soda vs water
  soda: { savings: -8, happiness: 6, moneySmarts: 2 },           // Expensive indulgence
  water: { savings: 10, happiness: 2, moneySmarts: 8 },          // Smart health choice

  // Step 3: Instant noodles vs simple home meal
  instant: { savings: -3, happiness: 3, moneySmarts: 1 },        // Cheap but low nutrition
  cook: { savings: 5, happiness: 8, moneySmarts: 9 },            // Balanced home meal

  // Step 4: Bulk vs treat
  bulk: { savings: 15, happiness: 4, moneySmarts: 10 },          // Long-term thinking!
  treat: { savings: -10, happiness: 10, moneySmarts: 2 },        // Impulse on sale

  // Step 5: Stick to plan vs add extra
  budget: { savings: 12, happiness: 6, moneySmarts: 10 },        // Discipline & planning
  extra: { savings: -20, happiness: 8, moneySmarts: -2 },        // Chaos shopping

  // Step 6: Store brand vs name brand
  store_brand: { savings: 10, happiness: 4, moneySmarts: 8 },    // Smart value choice
  name_brand: { savings: -12, happiness: 6, moneySmarts: 1 },    // Brand bias

  // ===== SCHOOL SCENARIO =====
  // Step 1: Pack lunch vs buy lunch
  pack_lunch: { savings: 15, happiness: 6, moneySmarts: 10 },    // Planning wins!
  buy_lunch: { savings: -10, happiness: 7, moneySmarts: 1 },     // Convenient but expensive

  // Step 2: Bring supplies vs forget
  bring_supplies: { savings: 8, happiness: 8, moneySmarts: 10 }, // Prepared & stress-free
  forget_supplies: { savings: -10, happiness: -3, moneySmarts: 0 }, // Stressful & costly (buying again)

  // Step 3: Homework vs games
  do_homework: { savings: 5, happiness: 4, moneySmarts: 8 },     // Long-term investment
  play_games: { savings: 0, happiness: 10, moneySmarts: 1 },     // Fun but short-term

  // Step 4: Buy item now vs wait
  buy_item: { savings: -15, happiness: 7, moneySmarts: 2 },      // Impulse
  wait: { savings: 5, happiness: 5, moneySmarts: 10 },           // Thoughtful choice

  // Step 5: Hang out vs stay home
  hang_out: { savings: -15, happiness: 12, moneySmarts: 3 },     // Social but expensive
  stay_home: { savings: 8, happiness: 6, moneySmarts: 4 },       // Self-care & savings

  // Step 6: Prepared vs overwhelmed
  prepared: { savings: 0, happiness: 12, moneySmarts: 10 },      // Confidence from planning
  overwhelmed: { savings: -5, happiness: -2, moneySmarts: 0 },   // Consequence of poor choices

  // ===== WORK SCENARIO =====
  // Step 1: Spend vs save first thought
  spend: { savings: -25, happiness: 12, moneySmarts: -5 },       // Immediate gratification
  save: { savings: 30, happiness: 6, moneySmarts: 15 },          // Instant wisdom! Core financial literacy

  // Step 2: Go out vs stay in
  go_out: { savings: -20, happiness: 14, moneySmarts: 2 },       // Fun but expensive
  stay_in: { savings: 10, happiness: 8, moneySmarts: 5 },        // Balanced choice

  // Step 3: Buy online vs wait
  buy: { savings: -30, happiness: 10, moneySmarts: -2 },         // Major impulse
  wait: { savings: 15, happiness: 5, moneySmarts: 12 },          // Discipline & wisdom

  // Step 4: Save for goal vs forget
  goal: { savings: 25, happiness: 8, moneySmarts: 15 },          // PURPOSE-DRIVEN SAVING - teaches goals matter!
  forget: { savings: -10, happiness: 12, moneySmarts: 0 },       // Drifting spending

  // Step 5: Save some vs spend all (second payment)
  split: { savings: 20, happiness: 10, moneySmarts: 12 },        // PERFECT BALANCE CHOICE
  spend_all: { savings: -20, happiness: 14, moneySmarts: -3 },   // Back to zero

  // Step 6: Feel proud vs regret
  reflect: { savings: 0, happiness: 15, moneySmarts: 10 },       // Pride in balanced choices
  regret: { savings: -10, happiness: -5, moneySmarts: 3 }        // Learning from mistakes
};

/**
 * Apply choice score and enforce stat constraints
 * @param {Object} currentStats - Current stat values
 * @param {string} choiceId - ID of chosen option
 * @returns {Object} Updated stats with constraints applied
 */
export function applyChoiceScore(currentStats, choiceId) {
  const scoreChange = choiceScoring[choiceId];
  
  if (!scoreChange) {
    console.warn(`Unknown choice: ${choiceId}`);
    return currentStats;
  }

  const newStats = {
    savings: currentStats.savings + scoreChange.savings,
    happiness: currentStats.happiness + scoreChange.happiness,
    moneySmarts: currentStats.moneySmarts + scoreChange.moneySmarts
  };

  // Apply min/max constraints
  return {
    savings: Math.max(0, Math.min(200, newStats.savings)),
    happiness: Math.max(0, Math.min(200, newStats.happiness)),
    moneySmarts: Math.max(0, Math.min(200, newStats.moneySmarts))
  };
}

/**
 * Calculate end game result based on final stats
 * Rewards balance, teaches consequences of extremes
 * @param {Object} finalStats - Final stat values
 * @returns {Object} Result with title, message, and encouragement
 */
export function calculateEndGameResult(finalStats) {
  const { savings, happiness, moneySmarts } = finalStats;
  
  // Thresholds for "high" and "low"
  const highSavings = savings >= 120;
  const lowSavings = savings <= 80;
  const highHappiness = happiness >= 120;
  const lowHappiness = happiness <= 80;
  const highMoneySmarts = moneySmarts >= 120;

  let title = '';
  let message = '';
  let emoji = '';
  let color = '';

  // ===== IDEAL: Balance (both savings and happiness) =====
  if (highSavings && highHappiness) {
    title = '💎 Financial Champion!';
    message = "You found the perfect balance! You're saving for tomorrow AND enjoying today. That's true financial wisdom - you don't have to choose between being responsible and being happy.";
    emoji = '🎉';
    color = '#FFD700';
  }
  // ===== High Savings, Low Happiness (too extreme) =====
  else if (highSavings && lowHappiness) {
    title = '💰 The Saver';
    message = 'Great savings! But remember - money is a tool for living a good life. You can save AND enjoy experiences. Next time, treat yourself more often (within reason). Financial literacy means balance!';
    emoji = '🤔';
    color = '#4CAF50';
  }
  // ===== Low Savings, High Happiness (spending too much) =====
  else if (lowSavings && highHappiness) {
    title = '🎉 The Enjoyer';
    message = "You're having fun now, and that's great! But future you will need help. Savings are like having a safety net AND superpowers. Next time, try saving some while still treating yourself. You CAN do both!";
    emoji = '😊';
    color = '#FF9800';
  }
  // ===== Low both (poor choices) =====
  else if (lowSavings && lowHappiness) {
    title = '🤔 Room to Grow';
    message = "It looks like your choices weren't working for either goal. The good news? Now you know what NOT to do! Try balancing wants and needs next time. Spend smart, save smart, stay happy.";
    emoji = '📈';
    color = '#2196F3';
  }
  // ===== Balanced but not high (middle ground) =====
  else {
    title = '⭐ Good Start!';
    message = 'You made some smart choices and some spending choices. You\'re learning! Financial literacy is a skill - the more you practice making balanced decisions, the better you get. Keep going!';
    emoji = '🌟';
    color = '#9C27B0';
  }

  // Extra tip if they have high Money Smarts
  let extraTip = '';
  if (highMoneySmarts) {
    extraTip = '\n\n🧠 You\'re building real Money Smarts! Keep learning - every choice teaches you something about money.';
  }

  return {
    title,
    message: message + extraTip,
    emoji,
    color,
    stats: {
      savings,
      happiness,
      moneySmarts,
      highSavings,
      highHappiness,
      highMoneySmarts
    }
  };
}
