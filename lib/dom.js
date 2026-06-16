/**
 * A small collector for event listeners and teardown callbacks.
 *
 * Every effect module owns one of these so it can register listeners and
 * imperative cleanups, then hand back a single `cleanup()` to its caller.
 * This keeps each effect responsible for its own teardown (SRP) and frees
 * the orchestrator from tracking individual listeners.
 */
export function listenerBag() {
  const teardowns = [];

  return {
    /** Add an event listener that will be removed on cleanup. */
    on(target, event, handler, options) {
      target.addEventListener(event, handler, options);
      teardowns.push(() => target.removeEventListener(event, handler, options));
    },
    /** Register an arbitrary cleanup callback (no-op if falsy). */
    add(teardown) {
      if (typeof teardown === "function") teardowns.push(teardown);
    },
    /** Run every registered teardown, then reset. */
    cleanup() {
      teardowns.forEach((fn) => fn());
      teardowns.length = 0;
    },
  };
}
