import { SingleBar } from "cli-progress";
let isProgressBarEnabled = true;

const progressBar = new SingleBar({
  format:
    "Scanning regions enabled in the account |{bar}| {percentage}% | ETA: {eta}s | {value}/{total}",
  barCompleteChar: "\u2588",
  barIncompleteChar: "\u2591",
  hideCursor: true,
});

export function startProgress(total, seed = 0) {
  if (isProgressBarEnabled) {
    progressBar.start(total, seed);
  }
}

export function incrementProgress() {
  if (isProgressBarEnabled) {
    progressBar.increment();
  }
}

export function stopProgressBar() {
  if (isProgressBarEnabled) {
    progressBar.stop();
  }
}

export function configureProgressBar(isEnabled) {
  isProgressBarEnabled = isEnabled;
}
