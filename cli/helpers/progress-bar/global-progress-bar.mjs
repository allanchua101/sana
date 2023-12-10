import { SingleBar } from "cli-progress";
let isProgressBarEnabled = true;
let progressBar = null;

export function startProgress(total, title, seed = 0) {
  progressBar = new SingleBar({
    format: `Scanning ${title} from account regions |{bar}| {percentage}% | ETA: {eta}s | {value}/{total}`,
    barCompleteChar: "\u2588",
    barIncompleteChar: "\u2591",
    hideCursor: true,
  });

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
