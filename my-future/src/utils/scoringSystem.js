/**
 * Financial Literacy Game Scoring System
 * 
 * Teaching kids that financial literacy = responsibility + life balance
 * Rewards balanced choices, teaches consequences of extremes
 * 
 * IMPACT SCALING:
 * Each choice has an impact level that multiplies stat deltas:
 * - "small" (1.0x): Minor decisions, everyday choices
 * - "medium" (1.8x): Meaningful decisions with clear tradeoffs
 * - "big" (2.5x): Major decisions with big consequences
 */

export const INITIAL_STATS = {
  savings: 100,         // Real dollars ($0-$200)
  lifeBalance: 100,     // Life satisfaction (0-200, shown as Low/Okay/Good/Great)
  moneySkills: 0        // Financial knowledge (0-200, shown as Level 1-5)
};

/**
 * Convert raw stat value to kid-friendly label
 * @param {number} value - Raw stat value (0-200)
 * @returns {string} Human-readable label
 */
export function getLifeBalanceLabel(value) {
  if (value < 40) return 'Low';
  if (value < 80) return 'Okay';
  if (value < 140) return 'Good';
  return 'Great';
}

/**
 * Convert Money Skills value to level + title
 * @param {number} value - Raw stat value (0-200)
 * @returns {Object} { level: 1-5, title: "Learner"|"Growing"|"Smart"|"Expert"|"Genius" }
 */
export function getMoneySkillsLevel(value) {
  if (value < 40) return { level: 1, title: 'Learner' };
  if (value < 80) return { level: 2, title: 'Growing' };
  if (value < 130) return { level: 3, title: 'Smart' };
  if (value < 170) return { level: 4, title: 'Expert' };
  return { level: 5, title: 'Genius' };
}

/**
 * Get progress percentage for stat bars (0-100)
 * @param {number} value - Raw stat value (0-200)
 * @returns {number} Progress percentage (0-100)
 */
export function getProgressPercent(value) {
  return Math.round((value / 200) * 100);
}

/**
 * Impact scaling multipliers - make stat changes feel dramatic
 */
const IMPACT_MULTIPLIERS = {
  small: 1.0,    // -5 to +8
  medium: 1.8,   // -15 to +22
  big: 2.5       // -30 to +40
};

/**
 * Apply impact scaling to choice deltas
 * @param {Object} baseDeltas - { savings, lifeBalance, moneySkills }
 * @param {string} impact - "small" | "medium" | "big"
 * @returns {Object} Scaled deltas
 */
export function applyImpactScaling(baseDeltas, impact) {
  const multiplier = IMPACT_MULTIPLIERS[impact] || 1.0;
  return {
    savings: Math.round(baseDeltas.savings * multiplier),
    lifeBalance: Math.round(baseDeltas.lifeBalance * multiplier),
    moneySkills: Math.round(baseDeltas.moneySkills * multiplier)
  };
}

/**
 * Choice scoring map - each choice has impact level + base deltas
 * Designed to teach:
 * - Balance is key (both savings AND life balance needed)
 * - Smart choices improve all 3 stats
 * - Extreme choices have trade-offs
 * - Small smart choices add up (impact scaling)
 */
export const choiceScoring = {
  // ===== HOME SCENARIO =====
  delivery: { impact: 'medium', savings: -8, lifeBalance: 4, moneySkills: 1 },      // Impulse, but happy short term
  cook: { impact: 'medium', savings: 3, lifeBalance: 3, moneySkills: 4 },             // Smart balanced choice
  buy_snack: { impact: 'small', savings: -4, lifeBalance: 4, moneySkills: 2 },      // Impulse treat
  home_snack: { impact: 'small', savings: 2, lifeBalance: 2, moneySkills: 3 },      // Responsible choice
  clean_now: { impact: 'small', savings: 0, lifeBalance: 2, moneySkills: 3 },       // Responsible, feels good
  later: { impact: 'small', savings: 0, lifeBalance: -1, moneySkills: 0 },          // Procrastination, stress
  buy_now: { impact: 'big', savings: -12, lifeBalance: 4, moneySkills: -2 },      // Impulse, instant gratification
  wait_24: { impact: 'medium', savings: 5, lifeBalance: 2, moneySkills: 6 },        // Smart financial thinking!
  new_game: { impact: 'big', savings: -14, lifeBalance: 6, moneySkills: 1 },     // Expensive fun
  use_free: { impact: 'medium', savings: 3, lifeBalance: 3, moneySkills: 3 },        // Resourceful fun
  leave_on: { impact: 'small', savings: -3, lifeBalance: 0, moneySkills: -1 },      // Wasteful
  turn_off: { impact: 'medium', savings: 5, lifeBalance: 1, moneySkills: 3 },        // Mindful budgeting
  brand_new: { impact: 'big', savings: -18, lifeBalance: 7, moneySkills: 1 },    // Big spend, feels good
  swap_reuse: { impact: 'medium', savings: 6, lifeBalance: 3, moneySkills: 4 },     // Creative & smart
  save_some: { impact: 'medium', savings: 12, lifeBalance: 3, moneySkills: 7 },     // BALANCED CHOICE - teaches that saving can still be happy
  spend_some: { impact: 'medium', savings: -3, lifeBalance: 8, moneySkills: 2 },    // Short-term happiness
  start_trial: { impact: 'medium', savings: -6, lifeBalance: 3, moneySkills: 0 },   // Hidden cost awareness gap
  skip_trial: { impact: 'small', savings: 3, lifeBalance: 2, moneySkills: 4 },      // Financial wisdom
  proud: { impact: 'small', savings: 0, lifeBalance: 6, moneySkills: 3 },          // Reflection on choices
  learned: { impact: 'medium', savings: 3, lifeBalance: 4, moneySkills: 8 },        // Growth mindset!
  // Home scenario step 9 (budget check)
  check_budget: { impact: 'medium', savings: 7, lifeBalance: 3, moneySkills: 6 },  // Smart planning
  just_go: { impact: 'big', savings: -5, lifeBalance: 6, moneySkills: 1 },       // Impulsive, no planning

  // ===== GROCERIES SCENARIO =====
  follow_list: { impact: 'medium', savings: 7, lifeBalance: 3, moneySkills: 6 },   // Disciplined shopping
  browse: { impact: 'medium', savings: -6, lifeBalance: 5, moneySkills: 0 },        // Impulse shopping
  produce: { impact: 'small', savings: 5, lifeBalance: 2, moneySkills: 4 },         // Planning-focused
  snacks: { impact: 'medium', savings: -7, lifeBalance: 5, moneySkills: 0 },        // Impulse shopping
  store_brand: { impact: 'medium', savings: 6, lifeBalance: 2, moneySkills: 5 },    // Smart value choice
  name_brand: { impact: 'medium', savings: -7, lifeBalance: 3, moneySkills: 1 },    // Brand bias
  make_own: { impact: 'medium', savings: 5, lifeBalance: 4, moneySkills: 5 },        // Smart cooking
  pre_made: { impact: 'small', savings: -2, lifeBalance: 3, moneySkills: 1 },       // Convenience cost
  buy_bulk: { impact: 'big', savings: 10, lifeBalance: 2, moneySkills: 6 },      // Long-term thinking!
  buy_one: { impact: 'small', savings: 2, lifeBalance: 3, moneySkills: 3 },         // Balanced choice
  skip_impulse: { impact: 'medium', savings: 5, lifeBalance: 2, moneySkills: 5 },    // Discipline
  buy_candy: { impact: 'small', savings: -2, lifeBalance: 4, moneySkills: 0 },      // Impulse checkout
  wish_saved: { impact: 'small', savings: 0, lifeBalance: 3, moneySkills: 4 },      // Learning moment

  // ===== SCHOOL SCENARIO =====
  pack_lunch: { impact: 'big', savings: 10, lifeBalance: 4, moneySkills: 6 },    // Planning wins!
  buy_lunch: { impact: 'medium', savings: -6, lifeBalance: 4, moneySkills: 1 },     // Convenient but expensive
  borrow_free: { impact: 'medium', savings: 3, lifeBalance: 3, moneySkills: 4 },     // Smart & social
  buy_pencil: { impact: 'small', savings: -1, lifeBalance: 2, moneySkills: 1 },     // Expensive shortcut
  bring_supplies: { impact: 'medium', savings: 5, lifeBalance: 5, moneySkills: 6 }, // Prepared & stress-free
  forget_supplies: { impact: 'big', savings: -7, lifeBalance: -2, moneySkills: 0 }, // Stressful & costly
  compare_value: { impact: 'medium', savings: 3, lifeBalance: 5, moneySkills: 6 },  // Smart shopping
  buy_first: { impact: 'medium', savings: -2, lifeBalance: 6, moneySkills: 1 },     // Impulse buying
  save_plan: { impact: 'big', savings: 9, lifeBalance: 5, moneySkills: 7 },     // Goal-oriented
  ask_money: { impact: 'medium', savings: -6, lifeBalance: 5, moneySkills: 1 },     // Last-minute scramble
  think_value: { impact: 'medium', savings: 5, lifeBalance: 3, moneySkills: 6 },    // Thoughtful choice
  buy_both: { impact: 'big', savings: -12, lifeBalance: 7, moneySkills: 1 },     // Spending spree
  keep_saving: { impact: 'big', savings: 10, lifeBalance: 5, moneySkills: 7 },   // Momentum building
  do_homework: { impact: 'medium', savings: 3, lifeBalance: 2, moneySkills: 5 },     // Long-term investment
  play_games: { impact: 'small', savings: 0, lifeBalance: 6, moneySkills: 1 },     // Fun but short-term

  // ===== WORK SCENARIO =====
  budget_it: { impact: 'big', savings: 10, lifeBalance: 5, moneySkills: 9 },     // Smart planning
  no_plan: { impact: 'big', savings: -6, lifeBalance: 6, moneySkills: 1 },       // Chaotic spending
  spend: { impact: 'big', savings: -15, lifeBalance: 7, moneySkills: -3 },       // Immediate gratification
  save: { impact: 'big', savings: 18, lifeBalance: 4, moneySkills: 9 },          // Instant wisdom! Core financial literacy
  go_out: { impact: 'medium', savings: -12, lifeBalance: 8, moneySkills: 1 },       // Fun but expensive
  stay_in: { impact: 'medium', savings: 6, lifeBalance: 5, moneySkills: 3 },        // Balanced choice
  stick_budget: { impact: 'big', savings: 8, lifeBalance: 7, moneySkills: 6 }, // Sticking to plan
  break_budget: { impact: 'big', savings: -10, lifeBalance: 10, moneySkills: 0 }, // Breaking discipline
  buy: { impact: 'big', savings: -18, lifeBalance: 6, moneySkills: -1 },         // Major impulse
  wait: { impact: 'big', savings: 10, lifeBalance: 3, moneySkills: 7 },          // Discipline & wisdom
  save_goal: { impact: 'big', savings: 12, lifeBalance: 6, moneySkills: 9 },    // Goal-focused saving
  buy_now: { impact: 'big', savings: -15, lifeBalance: 7, moneySkills: -2 },     // Impulsive purchase
  goal: { impact: 'big', savings: 16, lifeBalance: 5, moneySkills: 9 },          // PURPOSE-DRIVEN SAVING
  forget: { impact: 'big', savings: -6, lifeBalance: 7, moneySkills: 0 },       // Drifting spending
  keep_saving: { impact: 'big', savings: 12, lifeBalance: 6, moneySkills: 7 },  // PERFECT BALANCE CHOICE
  spend_savings: { impact: 'big', savings: -10, lifeBalance: 8, moneySkills: 1 }, // Derailing goals
  split: { impact: 'big', savings: 12, lifeBalance: 6, moneySkills: 7 },        // PERFECT BALANCE CHOICE
  spend_all: { impact: 'big', savings: -12, lifeBalance: 8, moneySkills: -2 },   // Back to zero
  add_savings: { impact: 'big', savings: 15, lifeBalance: 5, moneySkills: 9 },   // Goal achievement
  treat_yourself: { impact: 'small', savings: -3, lifeBalance: 7, moneySkills: 1 }, // Balanced indulgence
  hit_goal: { impact: 'big', savings: 8, lifeBalance: 9, moneySkills: 11 },     // Success! Teaching that goals work
  fell_short: { impact: 'medium', savings: 2, lifeBalance: 3, moneySkills: 6 },     // Learning moment
  reflect: { impact: 'medium', savings: 0, lifeBalance: 9, moneySkills: 6 },       // Pride in balanced choices
  regret: { impact: 'medium', savings: -6, lifeBalance: -3, moneySkills: 2 }        // Learning from mistakes
};

/**
 * Apply choice score and enforce stat constraints
 * @param {Object} currentStats - Current stat values
 * @param {string} choiceId - ID of chosen option
 * @returns {Object} Updated stats with constraints applied (and delta info)
 */
export function applyChoiceScore(currentStats, choiceId) {
  const choice = choiceScoring[choiceId];
  
  if (!choice) {
    console.warn(`Unknown choice: ${choiceId}`);
    return currentStats;
  }

  // Extract impact and base deltas
  const { impact, ...baseDeltas } = choice;
  
  // Apply impact scaling
  const scaledDeltas = applyImpactScaling(baseDeltas, impact);

  const newStats = {
    savings: currentStats.savings + scaledDeltas.savings,
    lifeBalance: currentStats.lifeBalance + scaledDeltas.lifeBalance,
    moneySkills: currentStats.moneySkills + scaledDeltas.moneySkills
  };

  // Apply min/max constraints
  const clampedStats = {
    savings: Math.max(0, Math.min(200, newStats.savings)),
    lifeBalance: Math.max(0, Math.min(200, newStats.lifeBalance)),
    moneySkills: Math.max(0, Math.min(200, newStats.moneySkills))
  };

  // Return both updated stats and the deltas for UI feedback
  return {
    ...clampedStats,
    _deltas: scaledDeltas  // Private field for UI to show +18, -12, etc.
  };
}

/**
 * Calculate end game result based on final stats
 * Rewards balance, teaches consequences of extremes
 * @param {Object} finalStats - Final stat values
 * @returns {Object} Result with title, message, and encouragement
 */
export function calculateEndGameResult(finalStats) {
  const { savings, lifeBalance, moneySkills } = finalStats;
  
  // Thresholds for "high" and "low"
  const highSavings = savings >= 120;
  const lowSavings = savings <= 80;
  const highLifeBalance = lifeBalance >= 120;
  const lowLifeBalance = lifeBalance <= 80;
  const highMoneySkills = moneySkills >= 120;

  let title = '';
  let message = '';
  let emoji = '';
  let color = '';

  // ===== IDEAL: Balance (both savings and lifeBalance) =====
  if (highSavings && highLifeBalance) {
    title = '💎 Financial Champion!';
    message = "You found the perfect balance! You're saving for tomorrow AND enjoying today. That's true financial wisdom - you don't have to choose between being responsible and being happy.";
    emoji = '🎉';
    color = '#FFD700';
  }
  // ===== High Savings, Low Life Balance (too extreme) =====
  else if (highSavings && lowLifeBalance) {
    title = '💰 The Saver';
    message = 'Great savings! But remember - money is a tool for living a good life. You can save AND enjoy experiences. Next time, treat yourself more often (within reason). Financial literacy means balance!';
    emoji = '🤔';
    color = '#4CAF50';
  }
  // ===== Low Savings, High Life Balance (spending too much) =====
  else if (lowSavings && highLifeBalance) {
    title = '🎉 The Enjoyer';
    message = "You're having fun now, and that's great! But future you will need help. Savings are like having a safety net AND superpowers. Next time, try saving some while still treating yourself. You CAN do both!";
    emoji = '😊';
    color = '#FF9800';
  }
  // ===== Low both (poor choices) =====
  else if (lowSavings && lowLifeBalance) {
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

  // Extra tip if they have high Money Skills
  let extraTip = '';
  if (highMoneySkills) {
    extraTip = '\n\n🧠 You\'re building real Money Skills! Keep learning - every choice teaches you something about money.';
  }

  return {
    title,
    message: message + extraTip,
    emoji,
    color,
    stats: {
      savings,
      lifeBalance,
      moneySkills,
      highSavings,
      highLifeBalance,
      highMoneySkills
    }
  };
}
