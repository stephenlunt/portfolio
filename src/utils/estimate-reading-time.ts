const WORDS_PER_MINUTE = 200;

export function estimateReadingTime(body: string): string {
  const numOfWords = body.trim().split(/\s+/).length;
  const readingTime = Math.ceil(numOfWords / WORDS_PER_MINUTE);
  return readingTime.toString();
}
