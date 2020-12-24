export function toQueryPair(key, value) {
  if (typeof value == "undefined") {
    return `&${key}=`;
  }
  return `&${key}=${value}`;
}