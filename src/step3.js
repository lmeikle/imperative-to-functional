/**
 * Step 3: Remove side effects and add returns
 *
 * Make event map one of the arguments for both of our functions and add returns:
 */

const addEventListener = (event, handler, eventMap) => {
  if (eventMap.has(event)) {
    return new Map(eventMap).set(event, eventMap.get(event).concat([handler]));
  } else {
    return new Map(eventMap).set(event, [handler]);
  }
};
const dispatchEvent = (event, eventMap) => {
  if (eventMap.has(event)) {
    const handlers = eventMap.get(event);
    for (const i in handlers) {
      handlers[i]();
    }
  }
  return eventMap;
};

const myMap = addEventListener("hello", () => console.log("hi - step3"), new Map());
dispatchEvent("hello", myMap);
