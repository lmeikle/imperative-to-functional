/**
 * Step 5: Apply a bit of binary logic
 */

const addEventListener = (event, handler, eventMap) => {
  if (eventMap.has(event)) {
    return new Map(eventMap).set(event, eventMap.get(event).concat([handler]));
  } else {
    return new Map(eventMap).set(event, [handler]);
  }
};
const dispatchEvent = (event, eventMap) => {
  return (
    // if the map contains the event, it will then go on a do the forEach,
    // this returns nothing, so the event is always returned
    (eventMap.has(event) && eventMap.get(event).forEach(a => a())) || event
  );
};

const myMap = addEventListener(
  "hello",
  () => console.log("hi - step5"),
  new Map()
);

let hello = dispatchEvent("hello", myMap);
console.log("hello", hello)

let goodbye = dispatchEvent("goodbye", myMap);
console.log("goodbye", goodbye)
