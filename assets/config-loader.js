globalThis.weddingConfigReady = (async () => {
  try {
    const [achievementsResponse, defaultsResponse] = await Promise.all([
      fetch("data/achievements.json"),
      fetch("data/default-plan.json"),
    ]);
    if (!achievementsResponse.ok || !defaultsResponse.ok) throw new Error("Planner configuration could not be loaded.");
    globalThis.WEDDING_ACHIEVEMENT_CATALOG = await achievementsResponse.json();
    globalThis.WEDDING_DEFAULT_PLAN = await defaultsResponse.json();
  } catch (error) {
    console.info("Using the built-in starter plan. Run with Live Server to edit JSON configuration files.", error);
    globalThis.WEDDING_ACHIEVEMENT_CATALOG = [];
    globalThis.WEDDING_DEFAULT_PLAN = {};
  }
})();
