import { SingleBar } from "cli-progress";

const progressBar = new SingleBar({
  format:
    "Scanning account regions |{bar}| {percentage}% | ETA: {eta}s | {value}/{total}",
  barCompleteChar: "\u2588",
  barIncompleteChar: "\u2591",
  hideCursor: true,
});

export function startProgress(total, seed = 0) {
  progressBar.start(total, seed);
}

export function incrementProgress() {
  progressBar.increment();
}

export function stopProgressBar() {
  progressBar.stop();
}
