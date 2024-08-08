export function formatDate(time: number) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date(time));
}

const parser = new DOMParser();

export function parserHTML(str: string) {
  return parser.parseFromString(str, 'text/html').body.textContent;
}
