﻿function add(first: number, second: number): number {
  return first + second;
}

function clock(callback) {
  const timer = setInterval(() => {
    const time = currentTime();
    callback.setResult(time);
  }, 1000);

  callback.onCanceled = () => {
    clearInterval(timer);
  };
}

function currentTime() {
  return new Date().toLocaleTimeString();
}

function increment(incrementBy: number, callback) {
  let result = 0;
  const timer = setInterval(() => {
    result += incrementBy;
    callback.setResult(result);
  }, 1000);

  callback.onCanceled = () => {
    clearInterval(timer);
  };
}

function logMessage(message: string) {
  console.log(message);

  return message;
}

if (typeof(CustomFunctionMappings) !== 'undefined') {
  CustomFunctionMappings.add = add;
  CustomFunctionMappings.clock = clock;
  CustomFunctionMappings.increment = increment;
  CustomFunctionMappings.log = logMessage;
}